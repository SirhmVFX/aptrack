// app/exam/[examId]/page.js
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { courseCurriculum, getQuestionsForExam } from "@/lib/examData";
import { Clock, AlertCircle } from "lucide-react";
import toast from "react-hot-toast";

type Faculty = keyof typeof courseCurriculum;

interface UserProfile {
  faculty: Faculty;
  // ... other properties
}

type Answers = {
  [key: number]: number; // questionIndex: answerIndex
};

interface Exam {
  id: string;
  name: string;
  duration: number;
  passingScore: number;
}

interface Question {
  id: string;
  text: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct answer
}

export default function ExamPage() {
  const router = useRouter();
  const params = useParams();
  const { user, userProfile, loading } = useAuth();
  const [examData, setExamData] = useState<Exam | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [examStarted, setExamStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
      return;
    }

    if (userProfile) {
      // Find exam data
      const exams = courseCurriculum[userProfile.faculty as Faculty] || [];
      const exam = exams.find((e) => e.id === params.examId);

      if (!exam) {
        toast.error("Exam not found");
        router.push("/dashboard");
        return;
      }

      // Check if exam has already been taken
      checkIfExamTaken(params.examId as string);

      setExamData(exam);
      const examQuestions = getQuestionsForExam(params.examId);
      setQuestions(examQuestions);
      setTimeRemaining(exam.duration * 60); // Convert to seconds
    }
  }, [user, userProfile, loading, params.examId, router]);

  const checkIfExamTaken = async (examId: string) => {
    if (!user) return;

    try {
      const resultsQuery = query(
        collection(db, "results"),
        where("userId", "==", user.uid),
        where("examId", "==", examId)
      );
      const resultsSnapshot = await getDocs(resultsQuery);

      if (!resultsSnapshot.empty) {
        toast.error(
          "You have already taken this exam. Each exam can only be taken once."
        );
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error checking exam status:", error);
    }
  };

  // Timer countdown
  useEffect(() => {
    if (!examStarted || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleSubmitExam(true); // Auto-submit when time runs out
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStartExam = () => {
    setExamStarted(true);
    toast.success("Exam started! Good luck!");
  };

  const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
    setAnswers({
      ...answers,
      [questionIndex]: answerIndex,
    });
  };

  const handleSubmitExam = async (autoSubmit = false) => {
    if (!examData) {
      toast.error("Exam data not found");
      router.push("/dashboard");
      return;
    }

    if (!autoSubmit) {
      const confirmed = window.confirm(
        "Are you sure you want to submit your exam? You cannot change your answers after submission."
      );
      if (!confirmed) return;
    }

    setSubmitting(true);

    // Calculate score
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const score = Math.round((correctAnswers / questions.length) * 100);
    const passed = score >= examData.passingScore;

    // Save result to Firestore
    try {
      const resultId = `${user.uid}_${examData?.id}_${Date.now()}`;
      await setDoc(doc(db, "results", resultId), {
        userId: user.uid,
        examId: examData?.id,
        examName: examData?.name,
        score,
        correctAnswers,
        totalQuestions: questions.length,
        passed,
        passingScore: examData?.passingScore,
        completedAt: new Date().toISOString(),
        answers: answers,
        questions: questions,
      });

      // Navigate to results page
      router.push(`/results/${resultId}`);
    } catch (error) {
      console.error("Error saving result:", error);
      toast.error("Failed to submit exam. Please try again.");
      setSubmitting(false);
    }
  };

  const handleExitExam = () => {
    const confirmed = window.confirm(
      "Are you sure you want to exit? Your progress will be lost."
    );
    if (confirmed) {
      router.push("/dashboard");
    }
  };

  if (loading || !examData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading exam...</p>
        </div>
      </div>
    );
  }

  if (!examStarted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {examData.name}
            </h1>
            <p className="text-gray-600">
              Read the instructions carefully before starting
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <div className="flex">
              <AlertCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  Exam Instructions
                </h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Total Questions: {questions.length}</li>
                  <li>• Duration: {examData.duration} minutes</li>
                  <li>• Passing Score: {examData.passingScore}%</li>
                  <li>
                    •{" "}
                    <strong>
                      ⚠️ You can only take this exam ONCE - make it count!
                    </strong>
                  </li>
                  <li>• Once you start, the timer will begin automatically</li>
                  <li>• You must answer all questions before submitting</li>
                  <li>• The exam will auto-submit when time runs out</li>
                  <li>• You cannot pause or restart once you begin</li>
                  <li>• Review your answers carefully before submitting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 text-sm mb-1">Total Questions</p>
              <p className="text-2xl font-bold text-gray-800">
                {questions.length}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 text-sm mb-1">Time Allowed</p>
              <p className="text-2xl font-bold text-gray-800">
                {examData.duration} min
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleStartExam}
              className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Start Exam
            </button>
            <button
              onClick={() => router.push("/dashboard")}
              className="px-6 bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  const answeredQuestions = Object.keys(answers).length;
  const progress = (answeredQuestions / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Fixed Header */}
      <div className="bg-white shadow-lg sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {examData.name}
              </h2>
              <p className="text-sm text-gray-600">
                Question {answeredQuestions} of {questions.length}
              </p>
            </div>
            <div className="text-right">
              <div
                className={`flex items-center gap-2 font-bold text-2xl ${
                  timeRemaining < 300 ? "text-red-600" : "text-gray-800"
                }`}
              >
                <Clock className="w-6 h-6" />
                {formatTime(timeRemaining)}
              </div>
              <p className="text-sm text-gray-600">Time Remaining</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {questions.map((question, qIdx) => (
            <div key={qIdx} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                  {qIdx + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 flex-1">
                  {question.question}
                </h3>
              </div>

              <div className="space-y-3 ml-11">
                {question.options.map((option, oIdx) => (
                  <label
                    key={oIdx}
                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition ${
                      answers[qIdx] === oIdx
                        ? "border-indigo-600 bg-indigo-50"
                        : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${qIdx}`}
                      checked={answers[qIdx] === oIdx}
                      onChange={() => handleAnswerChange(qIdx, oIdx)}
                      className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-3 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex gap-4 sticky bottom-4">
          <button
            onClick={() => handleSubmitExam(false)}
            disabled={answeredQuestions < questions.length || submitting}
            className="flex-1 bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {submitting ? "Submitting..." : "Submit Exam"}
          </button>
          <button
            onClick={handleExitExam}
            disabled={submitting}
            className="px-8 bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition disabled:opacity-50 shadow-lg"
          >
            Exit
          </button>
        </div>

        {answeredQuestions < questions.length && (
          <p className="text-center text-amber-600 mt-4 font-semibold">
            Please answer all questions before submitting
          </p>
        )}
      </div>
    </div>
  );
}
