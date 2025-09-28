// app/dashboard/page.js
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { courseCurriculum } from "@/lib/examData";
import {
  BookOpen,
  LogOut,
  Clock,
  Award,
  CheckCircle,
  XCircle,
  TrendingUp,
} from "lucide-react";

interface Result {
  id: string;
  examId: string;
  examName: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  passed: boolean;
  completedAt: string;
}

interface Exam {
  id: string;
  name: string;
  duration: number;
  passingScore: number;
}

type Faculty =
  | "Frontend Development"
  | "Backend Development"
  | "Mobile App Development"
  | "UI/UX Design"
  | "Data Science"
  | "Full Stack Development";

export default function DashboardPage() {
  const router = useRouter();
  const { user, userProfile, logout, loading } = useAuth();
  const [results, setResults] = useState<Result[]>([]);
  const [loadingResults, setLoadingResults] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchResults = async () => {
      if (user) {
        const resultsQuery = query(
          collection(db, "results"),
          where("userId", "==", user.uid)
        );
        const resultsSnapshot = await getDocs(resultsQuery);
        const fetchedResults = resultsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setResults(fetchedResults as Result[]);
        setLoadingResults(false);
      }
    };

    fetchResults();
  }, [user]);

  if (loading || !userProfile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const userExams = courseCurriculum[userProfile.faculty as Faculty] || [];
  const completedExams = results.length;
  const passedExams = results.filter((r) => r.passed).length;
  const averageScore =
    results.length > 0
      ? Math.round(
          results.reduce((sum, r) => sum + r.score, 0) / results.length
        )
      : 0;

  const getExamResult = (examId: string) => {
    return results.find((r) => r.examId === examId);
  };

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">
              Aptech Examination
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-semibold text-gray-800">{userProfile.name}</p>
              <p className="text-sm text-gray-600">{userProfile.studentId}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back, {userProfile.name}!
          </h2>
          <p className="text-gray-600">Faculty: {userProfile.faculty}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Exams
              </h3>
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600">
              {userExams.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Completed</h3>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-600">
              {completedExams} / {userExams.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Passed</h3>
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <p className="text-3xl font-bold text-yellow-600">
              {passedExams} / {completedExams}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Avg Score</h3>
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-purple-600">
              {averageScore}%
            </p>
          </div>
        </div>

        {/* Available Exams */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Available Exams
          </h3>

          {loadingResults ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading exams...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userExams.map((exam: Exam) => {
                const result = getExamResult(exam.id);
                return (
                  <div
                    key={exam.id}
                    className="border-2 border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          {exam.name}
                        </h4>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {exam.duration} mins
                          </span>
                          <span>Passing: {exam.passingScore}%</span>
                        </div>
                      </div>
                      {result && (
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            result.passed
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {result.passed ? "Passed" : "Failed"}
                        </div>
                      )}
                    </div>

                    {result && (
                      <div className="bg-gray-50 rounded p-3 mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-sm text-gray-600">Score:</p>
                          <span
                            className={`font-bold ${
                              result.passed ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {result.score}%
                          </span>
                        </div>
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-sm text-gray-600">
                            Correct Answers:
                          </p>
                          <span className="font-semibold text-gray-800">
                            {result.correctAnswers}/{result.totalQuestions}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Taken: {new Date(result.completedAt).toLocaleString()}
                        </p>
                      </div>
                    )}

                    <button
                      onClick={() => router.push(`/exam/${exam.id}`)}
                      className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                    >
                      {result ? "Retake Exam" : "Take Exam"}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Recent Results */}
        {results.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Recent Results
            </h3>
            <div className="space-y-3">
              {results
                .sort(
                  (a, b) =>
                    new Date(b.completedAt).getTime() -
                    new Date(a.completedAt).getTime()
                )
                .slice(0, 5)
                .map((result) => (
                  <div
                    key={result.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      {result.passed ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600" />
                      )}
                      <div>
                        <p className="font-semibold text-gray-800">
                          {result.examName}
                        </p>
                        <p className="text-sm text-gray-600">
                          {new Date(result.completedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-2xl font-bold ${
                          result.passed ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {result.score}%
                      </p>
                      <p className="text-sm text-gray-600">
                        {result.correctAnswers}/{result.totalQuestions}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
