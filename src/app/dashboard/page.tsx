// app/dashboard/page.js
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { courseCurriculum } from "@/lib/examData";
import toast from "react-hot-toast";
import {
  BookOpen,
  LogOut,
  Clock,
  Award,
  CheckCircle,
  XCircle,
  TrendingUp,
} from "lucide-react";

interface ExamResult {
  id: string;
  examId: string;
  examName: string;
  score: number;
  passed: boolean;
  correctAnswers: number;
  totalQuestions: number;
  completedAt: Date; // You might want to use a more specific type like Date or firestore.Timestamp
  userId?: string;
  // Add any other fields that might be in your results
}

type Faculty = keyof typeof courseCurriculum;

interface UserProfile {
  faculty: Faculty;
}

interface Exam {
  id: string;
  name: string;
  duration: number;
  passingScore: number;
}

interface ResultsReport {
  studentName: string;
  studentId: string;
  faculty: string;
  completionDate: string;
  results: Array<{
    examName: string;
    score: number;
    passed: boolean;
    correctAnswers: number;
    totalQuestions: number;
    date: string;
  }>;
  totalExams: number;
  completedExams: number;
  passedExams: number;
  averageScore: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const { user, userProfile, logout, loading } = useAuth();
  const [results, setResults] = useState<ExamResult[]>([]);
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
        const fetchedResults = resultsSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            examName: data.examName || "",
            score: data.score || 0,
            passed: data.passed || false,
            correctAnswers: data.correctAnswers || 0,
            totalQuestions: data.totalQuestions || 0,
            completedAt: data.completedAt?.toDate() || new Date(),
            userId: data.userId,
          } as ExamResult;
        });
        setResults(fetchedResults);
        setLoadingResults(false);
      }
    };

    fetchResults();
  }, [user]);

  const generateResultsReport = () => {
    const report = {
      studentName: userProfile.name,
      studentId: userProfile.studentId,
      faculty: userProfile.faculty,
      completionDate: new Date().toLocaleDateString(),
      results: results.map((r) => ({
        examName: r.examName,
        score: r.score,
        passed: r.passed,
        correctAnswers: r.correctAnswers,
        totalQuestions: r.totalQuestions,
        date: new Date(r.completedAt).toLocaleDateString(),
      })),
      totalExams: userExams.length,
      completedExams: completedExams,
      passedExams: passedExams,
      averageScore: averageScore,
    };
    return report;
  };

  const downloadResultsAsPDF = (report: ResultsReport) => {
    // Create HTML content for the report
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Aptech Exam Results - ${report.studentName}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 40px;
            max-width: 900px;
            margin: 0 auto;
            line-height: 1.6;
          }
          .header {
            text-align: center;
            border-bottom: 3px solid #4F46E5;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .header h1 {
            color: #4F46E5;
            margin-bottom: 10px;
          }
          .student-info {
            background: #F3F4F6;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
          }
          .student-info p {
            margin: 8px 0;
          }
          .stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            margin-bottom: 30px;
          }
          .stat-card {
            background: #EEF2FF;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
          }
          .stat-card h3 {
            color: #4F46E5;
            font-size: 24px;
            margin: 0;
          }
          .stat-card p {
            color: #6B7280;
            font-size: 12px;
            margin: 5px 0 0 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
          }
          th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #E5E7EB;
          }
          th {
            background: #4F46E5;
            color: white;
            font-weight: 600;
          }
          .passed {
            color: #059669;
            font-weight: 600;
          }
          .failed {
            color: #DC2626;
            font-weight: 600;
          }
          .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #E5E7EB;
            color: #6B7280;
            font-size: 14px;
          }
          .certificate-text {
            background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin-top: 30px;
          }
          @media print {
            body { padding: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🎓 APTECH EXAMINATION SYSTEM</h1>
          <h2>Student Results Report</h2>
        </div>
        
        <div class="student-info">
          <p><strong>Student Name:</strong> ${report.studentName}</p>
          <p><strong>Student ID:</strong> ${report.studentId}</p>
          <p><strong>Faculty:</strong> ${report.faculty}</p>
          <p><strong>Report Generated:</strong> ${report.completionDate}</p>
        </div>

        <div class="stats">
          <div class="stat-card">
            <h3>${report.totalExams}</h3>
            <p>Total Exams</p>
          </div>
          <div class="stat-card">
            <h3>${report.completedExams}</h3>
            <p>Completed</p>
          </div>
          <div class="stat-card">
            <h3>${report.passedExams}</h3>
            <p>Passed</p>
          </div>
          <div class="stat-card">
            <h3>${report.averageScore}%</h3>
            <p>Average Score</p>
          </div>
        </div>

        <h3>Detailed Results</h3>
        <table>
          <thead>
            <tr>
              <th>Exam Name</th>
              <th>Date</th>
              <th>Score</th>
              <th>Correct Answers</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${report.results
              .map(
                (r) => `
              <tr>
                <td>${r.examName}</td>
                <td>${r.date}</td>
                <td><strong>${r.score}%</strong></td>
                <td>${r.correctAnswers}/${r.totalQuestions}</td>
                <td class="${r.passed ? "passed" : "failed"}">${
                  r.passed ? "✓ PASSED" : "✗ FAILED"
                }</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>

        ${
          report.completedExams === report.totalExams &&
          report.passedExams === report.totalExams
            ? `
          <div class="certificate-text">
            <h2>🏆 CONGRATULATIONS! 🏆</h2>
            <p>You have successfully completed and passed all exams in ${report.faculty}</p>
          </div>
        `
            : ""
        }

        <div class="footer">
          <p>This is an official document from Aptech Examination System</p>
          <p>Generated on ${new Date().toLocaleString()}</p>
        </div>
      </body>
      </html>
    `;

    // Create blob and download
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Aptech_Results_${report.studentId}_${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast.success("Results downloaded successfully!");
  };

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

        {/* Download Results Button */}
        {completedExams === userExams.length && completedExams > 0 && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 mb-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  🎉 All Exams Completed!
                </h3>
                <p className="text-green-100">
                  Congratulations! You&apos;ve completed all exams in your
                  faculty.
                </p>
              </div>
              <button
                onClick={() => {
                  // Generate comprehensive results report
                  const report = generateResultsReport();
                  downloadResultsAsPDF(report);
                }}
                className="flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
              >
                <Award className="w-5 h-5" />
                Download All Results
              </button>
            </div>
          </div>
        )}

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
                      disabled={!!result}
                      className={`w-full py-2 rounded-lg font-semibold transition ${
                        result
                          ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                          : "bg-indigo-600 text-white hover:bg-indigo-700"
                      }`}
                    >
                      {result ? "Exam Completed" : "Take Exam"}
                    </button>
                    {result && (
                      <p className="text-xs text-center text-gray-500 mt-2">
                        ℹ️ Each exam can only be taken once
                      </p>
                    )}
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
