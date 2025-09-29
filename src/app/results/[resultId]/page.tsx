// app/results/[resultId]/page.js
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { CheckCircle, XCircle, Award, TrendingUp, Home } from "lucide-react";

import confetti from "canvas-confetti";

interface Question {
  id: string;
  question: string;
  answer: string;
  options: string[];
  correctAnswer: string;
  userAnswer: string;
}

interface Result {
  id: string;
  examName: string;
  score: number;
  passed: boolean;
  completedAt: string;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unansweredQuestions: number;
  passingScore: number;
  examId: string;
  questions: Question[];
  answers: string[];
}

export default function ResultsPage() {
  const router = useRouter();
  const params = useParams();
  const { user, loading } = useAuth();
  const [result, setResult] = useState<Result | null>(null);
  const [loadingResult, setLoadingResult] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
      return;
    }

    const fetchResult = async () => {
      try {
        const resultDoc = await getDoc(
          doc(db, "results", params.resultId as string)
        );
        if (resultDoc.exists()) {
          const data = resultDoc.data() as Result;
          setResult(data);

          // Trigger confetti if passed
          if (data.passed) {
            setTimeout(() => {
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
              });
            }, 500);
          }
        } else {
          router.push("/dashboard");
        }
      } catch (error) {
        console.error("Error fetching result:", error);
        router.push("/dashboard");
      } finally {
        setLoadingResult(false);
      }
    };

    if (user) {
      fetchResult();
    }
  }, [user, loading, params.resultId, router]);

  if (loading || loadingResult || !result) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  const percentage = result.score;
  const gradeColor = result.passed ? "text-green-600" : "text-red-600";
  const gradeBgColor = result.passed ? "bg-green-50" : "bg-red-50";
  const gradeBorderColor = result.passed
    ? "border-green-200"
    : "border-red-200";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div
          className={`bg-white rounded-2xl shadow-2xl p-8 mb-6 border-4 ${gradeBorderColor}`}
        >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {result.passed ? (
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-16 h-16 text-green-600" />
                </div>
              ) : (
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-16 h-16 text-red-600" />
                </div>
              )}
            </div>

            <h1 className={`text-4xl font-bold mb-2 ${gradeColor}`}>
              {result.passed ? "Congratulations!" : "Keep Trying!"}
            </h1>

            <p className="text-xl text-gray-600 mb-4">
              {result.passed
                ? "You have successfully passed the exam!"
                : "You did not meet the passing score this time."}
            </p>

            <div
              className={`inline-block px-6 py-3 rounded-full ${gradeBgColor} border-2 ${gradeBorderColor}`}
            >
              <p className={`text-5xl font-bold ${gradeColor}`}>
                {percentage}%
              </p>
            </div>
          </div>
        </div>

        {/* Exam Details */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Exam Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Exam Name</p>
              <p className="text-lg font-semibold text-gray-800">
                {result.examName}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Completion Date</p>
              <p className="text-lg font-semibold text-gray-800">
                {new Date(result.completedAt).toLocaleDateString()}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Total Questions</p>
              <p className="text-lg font-semibold text-gray-800">
                {result.totalQuestions}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Correct Answers</p>
              <p className="text-lg font-semibold text-green-600">
                {result.correctAnswers} / {result.totalQuestions}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Passing Score</p>
              <p className="text-lg font-semibold text-gray-800">
                {result.passingScore}%
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Your Score</p>
              <p className={`text-lg font-semibold ${gradeColor}`}>
                {result.score}%
              </p>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Performance Breakdown
          </h2>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Score</span>
              <span className="text-sm font-bold text-gray-800">
                {percentage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`h-4 rounded-full transition-all duration-1000 ${
                  result.passed ? "bg-green-500" : "bg-red-500"
                }`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">
                {result.correctAnswers}
              </p>
              <p className="text-sm text-gray-600">Correct</p>
            </div>

            <div className="text-center p-4 bg-red-50 rounded-lg">
              <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-red-600">
                {result.totalQuestions - result.correctAnswers}
              </p>
              <p className="text-sm text-gray-600">Incorrect</p>
            </div>

            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">{percentage}%</p>
              <p className="text-sm text-gray-600">Accuracy</p>
            </div>
          </div>
        </div>

        {/* Answer Review */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Answer Review
          </h2>

          <div className="space-y-4">
            {result.questions.map((question, idx) => {
              const userAnswer = result.answers[idx];
              const isCorrect = userAnswer === question.correctAnswer;

              return (
                <div
                  key={idx}
                  className={`border-2 rounded-lg p-4 ${
                    isCorrect
                      ? "border-green-200 bg-green-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-2">
                        Question {idx + 1}: {question.question}
                      </p>

                      <div className="space-y-2">
                        {question.options.map((option, optIdx) => {
                          const isUserAnswer = userAnswer === String(optIdx);
                          const isCorrectAnswer =
                            question.correctAnswer === String(optIdx);

                          let optionClass = "bg-white border-gray-300";
                          if (isCorrectAnswer) {
                            optionClass =
                              "bg-green-100 border-green-500 font-semibold";
                          } else if (isUserAnswer && !isCorrect) {
                            optionClass = "bg-red-100 border-red-500";
                          }

                          return (
                            <div
                              key={optIdx}
                              className={`border-2 rounded p-2 ${optionClass}`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm">{option}</span>
                                {isCorrectAnswer && (
                                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                                    Correct Answer
                                  </span>
                                )}
                                {isUserAnswer && !isCorrect && (
                                  <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">
                                    Your Answer
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/dashboard")}
            className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
          >
            <Home className="w-5 h-5" />
            Back to Dashboard
          </button>

          {!result.passed && (
            <button
              onClick={() => router.push(`/exam/${result.examId}`)}
              className="flex-1 bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 transition shadow-lg"
            >
              Retake Exam
            </button>
          )}
        </div>

        {/* Motivational Message */}
        <div className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white text-center">
          {result.passed ? (
            <>
              <Award className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">Excellent Work!</h3>
              <p className="text-indigo-100">
                You&apos;ve demonstrated great understanding of the material.
                Keep up the excellent work!
              </p>
            </>
          ) : (
            <>
              <TrendingUp className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">Don&apos;t Give Up!</h3>
              <p className="text-indigo-100">
                Review the correct answers above and try again. Every attempt is
                a learning opportunity!
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
