// lib/examData.js

export const FACULTIES = [
  "Frontend Development",
  "Backend Development",
  "Mobile App Development",
  "UI/UX Design",
  "Data Science",
  "Full Stack Development",
];

export const courseCurriculum = {
  "Frontend Development": [
    { id: "html", name: "HTML Fundamentals", duration: 30, passingScore: 50 },
    { id: "css", name: "CSS Styling", duration: 30, passingScore: 50 },
    {
      id: "javascript",
      name: "JavaScript Programming",
      duration: 45,
      passingScore: 50,
    },
    {
      id: "bootstrap",
      name: "Bootstrap Framework",
      duration: 30,
      passingScore: 50,
    },
    { id: "tailwind", name: "Tailwind CSS", duration: 30, passingScore: 50 },
    { id: "react", name: "React.js", duration: 45, passingScore: 50 },
    {
      id: "database",
      name: "Database (SQL & MongoDB)",
      duration: 40,
      passingScore: 50,
    },
  ],
  "Backend Development": [
    {
      id: "nodejs",
      name: "Node.js Fundamentals",
      duration: 45,
      passingScore: 50,
    },
    {
      id: "express",
      name: "Express.js Framework",
      duration: 40,
      passingScore: 50,
    },
    {
      id: "database",
      name: "Database (SQL & MongoDB)",
      duration: 40,
      passingScore: 50,
    },
    {
      id: "rest-api",
      name: "RESTful API Design",
      duration: 35,
      passingScore: 50,
    },
    {
      id: "authentication",
      name: "Authentication & Security",
      duration: 35,
      passingScore: 50,
    },
    {
      id: "python",
      name: "Python Programming",
      duration: 45,
      passingScore: 50,
    },
  ],
  "Mobile App Development": [
    {
      id: "react-native",
      name: "React Native",
      duration: 45,
      passingScore: 50,
    },
    { id: "flutter", name: "Flutter & Dart", duration: 45, passingScore: 50 },
    { id: "mobile-ui", name: "Mobile UI/UX", duration: 30, passingScore: 50 },
    {
      id: "database",
      name: "Database (SQL & MongoDB)",
      duration: 40,
      passingScore: 50,
    },
    {
      id: "api-integration",
      name: "API Integration",
      duration: 35,
      passingScore: 50,
    },
  ],
  "UI/UX Design": [
    { id: "figma", name: "Figma Design Tool", duration: 35, passingScore: 50 },
    {
      id: "design-principles",
      name: "Design Principles",
      duration: 30,
      passingScore: 50,
    },
    {
      id: "user-research",
      name: "User Research",
      duration: 30,
      passingScore: 50,
    },
    { id: "prototyping", name: "Prototyping", duration: 30, passingScore: 50 },
    {
      id: "responsive-design",
      name: "Responsive Design",
      duration: 30,
      passingScore: 50,
    },
  ],
  "Data Science": [
    {
      id: "python-ds",
      name: "Python for Data Science",
      duration: 45,
      passingScore: 50,
    },
    {
      id: "statistics",
      name: "Statistics & Probability",
      duration: 40,
      passingScore: 50,
    },
    { id: "pandas", name: "Pandas & NumPy", duration: 40, passingScore: 50 },
    {
      id: "visualization",
      name: "Data Visualization",
      duration: 35,
      passingScore: 50,
    },
    {
      id: "machine-learning",
      name: "Machine Learning Basics",
      duration: 50,
      passingScore: 50,
    },
    {
      id: "database",
      name: "Database (SQL & MongoDB)",
      duration: 40,
      passingScore: 50,
    },
  ],
  "Full Stack Development": [
    { id: "html", name: "HTML Fundamentals", duration: 30, passingScore: 50 },
    { id: "css", name: "CSS Styling", duration: 30, passingScore: 50 },
    {
      id: "javascript",
      name: "JavaScript Programming",
      duration: 45,
      passingScore: 50,
    },
    { id: "react", name: "React.js", duration: 45, passingScore: 50 },
    {
      id: "nodejs",
      name: "Node.js Fundamentals",
      duration: 45,
      passingScore: 50,
    },
    {
      id: "express",
      name: "Express.js Framework",
      duration: 40,
      passingScore: 50,
    },
    {
      id: "database",
      name: "Database (SQL & MongoDB)",
      duration: 40,
      passingScore: 50,
    },
    {
      id: "rest-api",
      name: "RESTful API Design",
      duration: 35,
      passingScore: 50,
    },
  ],
};

// Sample exam questions database
export const examQuestions = {
  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which HTML tag is used for the largest heading?",
      options: ["<heading>", "<h6>", "<h1>", "<head>"],
      correctAnswer: 2,
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<br>", "<lb>", "<linebreak>"],
      correctAnswer: 1,
    },
    {
      question: "Which tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<hyperlink>"],
      correctAnswer: 1,
    },
    {
      question: "What is the correct HTML for adding a background color?",
      options: [
        '<body color="yellow">',
        '<body bg="yellow">',
        "<background>yellow</background>",
        '<body style="background-color:yellow;">',
      ],
      correctAnswer: 3,
    },
  ],
  css: [
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which property is used to change the background color?",
      options: ["color", "bgcolor", "background-color", "bg-color"],
      correctAnswer: 2,
    },
    {
      question: "How do you add a comment in CSS?",
      options: [
        "// this is a comment",
        "/* this is a comment */",
        "<!-- this is a comment -->",
        "# this is a comment",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which property is used to change the text color?",
      options: ["text-color", "font-color", "color", "text-style"],
      correctAnswer: 2,
    },
    {
      question: "How do you make text bold in CSS?",
      options: [
        "font-weight: bold",
        "text-style: bold",
        "font: bold",
        "text-weight: bold",
      ],
      correctAnswer: 0,
    },
  ],
  javascript: [
    {
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Netscape", "Google", "Apple"],
      correctAnswer: 1,
    },
    {
      question: "How do you declare a variable in JavaScript?",
      options: ["var x", "variable x", "v x", "declare x"],
      correctAnswer: 0,
    },
    {
      question: "Which operator is used for strict equality in JavaScript?",
      options: ["==", "===", "=", "!="],
      correctAnswer: 1,
    },
    {
      question: 'How do you write "Hello World" in an alert box?',
      options: [
        'msg("Hello World")',
        'alert("Hello World")',
        'msgBox("Hello World")',
        'alertBox("Hello World")',
      ],
      correctAnswer: 1,
    },
    {
      question: "Which method converts JSON data to a JavaScript object?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.convert()",
        "JSON.toObject()",
      ],
      correctAnswer: 0,
    },
  ],
  // Default questions for other subjects
  default: [
    {
      question: "This is a sample question for this course.",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is a best practice?",
      options: [
        "Writing clean code",
        "Ignoring documentation",
        "Hardcoding values",
        "Skipping testing",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the importance of version control?",
      options: [
        "Track changes",
        "Collaborate with team",
        "Backup code",
        "All of the above",
      ],
      correctAnswer: 3,
    },
    {
      question: "Which approach is recommended for learning?",
      options: [
        "Practice regularly",
        "Only read theory",
        "Copy without understanding",
        "Avoid asking questions",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the first step in problem solving?",
      options: [
        "Write code immediately",
        "Understand the problem",
        "Google the solution",
        "Ask for help",
      ],
      correctAnswer: 1,
    },
  ],
};

// Function to get questions for an exam
export const getQuestionsForExam = (examId) => {
  return examQuestions[examId] || examQuestions["default"];
};
