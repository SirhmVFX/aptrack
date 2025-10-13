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
    { id: "html", name: "HTML Fundamentals", duration: 50, passingScore: 100 },
    { id: "css", name: "CSS Styling", duration: 50, passingScore: 100 },
    {
      id: "javascript",
      name: "JavaScript Programming",
      duration: 50,
      passingScore: 100,
    },
    {
      id: "bootstrap",
      name: "Bootstrap Framework",
      duration: 40,
      passingScore: 100,
    },
    { id: "tailwind", name: "Tailwind CSS", duration: 40, passingScore: 100 },
    { id: "react", name: "React.js", duration: 60, passingScore: 100 },
    {
      id: "database",
      name: "Database (SQL & MongoDB)",
      duration: 50,
      passingScore: 100,
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
      question: "Which HTML element defines the document’s metadata?",
      options: ["<meta>", "<head>", "<info>", "<header>"],
      correctAnswer: 0,
    },
    {
      question: "What is the purpose of the <base> tag in HTML?",
      options: [
        "Specifies a base URL for all relative URLs in a page",
        "Defines the base font for the page",
        "Creates a baseline grid layout",
        "Sets the base color for elements",
      ],
      correctAnswer: 0,
    },
    {
      question:
        "Which attribute is used to specify that an input field must be filled out?",
      options: ["validate", "required", "must", "checked"],
      correctAnswer: 1,
    },
    {
      question: "Which element is used to embed an image in an HTML page?",
      options: ["<img>", "<picture>", "<src>", "<graphic>"],
      correctAnswer: 0,
    },
    {
      question: "What is the correct HTML element for playing video files?",
      options: ["<movie>", "<video>", "<media>", "<play>"],
      correctAnswer: 1,
    },
    {
      question: "Which HTML tag is used to define a table row?",
      options: ["<td>", "<tr>", "<th>", "<table-row>"],
      correctAnswer: 1,
    },
    {
      question: "Which attribute specifies an alternate text for an image?",
      options: ["alt", "title", "src", "text"],
      correctAnswer: 0,
    },
    {
      question: "What is the correct way to create an email link?",
      options: [
        '<a href="mailto:someone@example.com">Email</a>',
        '<mail href="someone@example.com">',
        '<a email="someone@example.com">',
        '<link mail="someone@example.com">',
      ],
      correctAnswer: 0,
    },
    {
      question:
        "Which tag is used to group related options in a dropdown list?",
      options: ["<optgroup>", "<select>", "<group>", "<optionset>"],
      correctAnswer: 0,
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["font", "class", "style", "design"],
      correctAnswer: 2,
    },
    {
      question:
        "Which HTML tag is used to display a scalar measurement within a range?",
      options: ["<gauge>", "<meter>", "<progress>", "<measure>"],
      correctAnswer: 1,
    },
    {
      question:
        "Which tag is used to define a footer for a document or section?",
      options: ["<bottom>", "<section-footer>", "<footer>", "<end>"],
      correctAnswer: 2,
    },
    {
      question: "How do you specify a checkbox in HTML?",
      options: [
        '<input type="checkbox">',
        '<check type="box">',
        "<input checkbox>",
        '<input type="check">',
      ],
      correctAnswer: 0,
    },
    {
      question: "Which tag defines navigation links in HTML5?",
      options: ["<nav>", "<navigation>", "<links>", "<menu>"],
      correctAnswer: 0,
    },
    {
      question: "Which HTML tag is used to define emphasized text?",
      options: ["<em>", "<strong>", "<i>", "<mark>"],
      correctAnswer: 0,
    },
    {
      question: "What does the <datalist> element do?",
      options: [
        "Provides predefined options for an input element",
        "Creates a dropdown list of checkboxes",
        "Defines a list of links",
        "Adds data to a table",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which HTML attribute can be used to open a link in a new tab?",
      options: ["newtab", "target='_blank'", "open='new'", "rel='new'"],
      correctAnswer: 1,
    },
    {
      question: "Which HTML tag defines a description list?",
      options: ["<dl>", "<list>", "<desc>", "<ul>"],
      correctAnswer: 0,
    },
    {
      question: "Which HTML element defines the title of a document?",
      options: ["<meta>", "<title>", "<head>", "<header>"],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of the <aside> tag?",
      options: [
        "Defines content aside from the main content",
        "Displays text aligned to the right",
        "Marks important content",
        "Defines an advertisement block",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which element defines the main content of an HTML document?",
      options: ["<main>", "<body>", "<content>", "<section>"],
      correctAnswer: 0,
    },
    {
      question: "Which HTML tag defines preformatted text?",
      options: ["<code>", "<pre>", "<format>", "<mono>"],
      correctAnswer: 1,
    },
    {
      question: "Which tag creates a number input field?",
      options: [
        '<input type="num">',
        '<input type="number">',
        "<number>",
        '<input value="number">',
      ],
      correctAnswer: 1,
    },
    {
      question: "What does the <mark> element represent?",
      options: [
        "Text that should be highlighted",
        "Marked text for deletion",
        "Bolded section title",
        "A citation reference",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which element is used to define an image map?",
      options: ["<map>", "<imagemap>", "<area>", "<figure>"],
      correctAnswer: 0,
    },
    {
      question: "Which HTML element is used to specify the character encoding?",
      options: [
        '<meta charset="UTF-8">',
        '<charset type="UTF-8">',
        '<encoding value="UTF-8">',
        '<meta encoding="UTF-8">',
      ],
      correctAnswer: 0,
    },
    {
      question: "Which tag defines self-contained content?",
      options: ["<section>", "<article>", "<div>", "<main>"],
      correctAnswer: 1,
    },
    {
      question: "Which HTML element defines an input field with suggestions?",
      options: ["<datalist>", "<select>", "<options>", "<suggest>"],
      correctAnswer: 0,
    },
    {
      question: "Which tag is used to define keyboard input text?",
      options: ["<kbd>", "<input>", "<key>", "<ctrl>"],
      correctAnswer: 0,
    },
    {
      question:
        "Which HTML attribute specifies that an element should be hidden?",
      options: ["display='none'", "hidden", "visibility='hidden'", "hide"],
      correctAnswer: 1,
    },
    {
      question: "Which tag defines a client-side script in HTML?",
      options: ["<script>", "<code>", "<js>", "<scripting>"],
      correctAnswer: 0,
    },
    {
      question: "Which attribute is used for image path in <img> tag?",
      options: ["alt", "link", "src", "href"],
      correctAnswer: 2,
    },
    {
      question: "Which HTML element defines a caption for a <figure>?",
      options: ["<figcaption>", "<caption>", "<legend>", "<summary>"],
      correctAnswer: 0,
    },
    {
      question: "Which HTML element is used to specify a header for a table?",
      options: ["<thead>", "<th>", "<table-header>", "<tr>"],
      correctAnswer: 0,
    },
    {
      question: "Which HTML attribute specifies the language of the document?",
      options: ["lang", "language", "xml:lang", "locale"],
      correctAnswer: 0,
    },
    {
      question: "Which element defines a collapsible content area?",
      options: ["<details>", "<collapse>", "<summary>", "<accordion>"],
      correctAnswer: 0,
    },
    {
      question:
        "Which tag is used to embed another document within the current page?",
      options: ["<embed>", "<iframe>", "<import>", "<object>"],
      correctAnswer: 1,
    },
    {
      question: "Which HTML element defines a progress bar?",
      options: ["<load>", "<progress>", "<meter>", "<bar>"],
      correctAnswer: 1,
    },
    {
      question: "Which attribute makes an input read-only?",
      options: ["readonly", "disabled", "locked", "inactive"],
      correctAnswer: 0,
    },
    {
      question: "Which tag is used to define a clickable button?",
      options: ["<input type='button'>", "<button>", "<btn>", "<click>"],
      correctAnswer: 1,
    },
    {
      question: "Which HTML element is used to define a time value?",
      options: ["<datetime>", "<clock>", "<time>", "<timer>"],
      correctAnswer: 2,
    },
    {
      question: "What is the use of the <link> element?",
      options: [
        "Links external resources like CSS files",
        "Creates hyperlinks",
        "Adds meta information",
        "Defines internal references",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which HTML tag defines an ordered list?",
      options: ["<ol>", "<ul>", "<list>", "<numbered>"],
      correctAnswer: 0,
    },
    {
      question: "Which HTML tag defines a container for SVG graphics?",
      options: ["<svg>", "<canvas>", "<vector>", "<shape>"],
      correctAnswer: 0,
    },
    {
      question:
        "Which tag defines a section of quoted text from another source?",
      options: ["<q>", "<blockquote>", "<cite>", "<quote>"],
      correctAnswer: 1,
    },
    {
      question: "Which element is used to define variables in HTML?",
      options: ["<var>", "<code>", "<data>", "<pre>"],
      correctAnswer: 0,
    },
    {
      question: "Which tag creates a dropdown menu in HTML?",
      options: ["<select>", "<dropdown>", "<option>", "<list>"],
      correctAnswer: 0,
    },
    {
      question: "Which attribute is used to disable an input field?",
      options: ["readonly", "disable", "disabled", "block"],
      correctAnswer: 2,
    },
    {
      question: "Which tag defines a definition term in a description list?",
      options: ["<dt>", "<dd>", "<term>", "<def>"],
      correctAnswer: 0,
    },
    {
      question: "Which tag defines a table header cell?",
      options: ["<td>", "<th>", "<tr>", "<thead>"],
      correctAnswer: 1,
    },
    {
      question:
        "Which tag defines a container for external resources like video or audio?",
      options: ["<object>", "<embed>", "<source>", "<link>"],
      correctAnswer: 2,
    },
    {
      question:
        "Which HTML tag is used to define a line that separates content?",
      options: ["<hr>", "<line>", "<border>", "<divider>"],
      correctAnswer: 0,
    },
    {
      question:
        "Which HTML element defines bold text without extra importance?",
      options: ["<b>", "<strong>", "<bold>", "<em>"],
      correctAnswer: 0,
    },
  ],
  css: [
    {
      question: "Which CSS property controls the text size?",
      options: ["font-size", "text-size", "font-style", "text-font"],
      correctAnswer: 0,
    },
    {
      question:
        "Which property is used to change the background color of an element?",
      options: ["color", "background-color", "bg-color", "background"],
      correctAnswer: 1,
    },
    {
      question: "What does the 'z-index' property control?",
      options: [
        "The transparency of an element",
        "The stacking order of elements",
        "The zoom level of elements",
        "The z-axis rotation of elements",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which property is used to make text italic in CSS?",
      options: ["font-italic", "font-style", "text-style", "font-weight"],
      correctAnswer: 1,
    },
    {
      question: "What is the default position value of an HTML element?",
      options: ["relative", "static", "absolute", "fixed"],
      correctAnswer: 1,
    },
    {
      question:
        "Which CSS property controls the space inside an element’s border?",
      options: ["margin", "padding", "border-spacing", "gap"],
      correctAnswer: 1,
    },
    {
      question: "How do you select all <p> elements inside a <div> element?",
      options: ["div.p", "div + p", "div p", "div > p"],
      correctAnswer: 2,
    },
    {
      question: "Which CSS property makes text all uppercase?",
      options: [
        "text-style",
        "text-transform",
        "font-case",
        "letter-transform",
      ],
      correctAnswer: 1,
    },
    {
      question: "How do you select an element with the ID 'header'?",
      options: ["header", ".header", "#header", "*header"],
      correctAnswer: 2,
    },
    {
      question: "Which property defines the space between lines of text?",
      options: ["line-height", "letter-spacing", "text-indent", "font-spacing"],
      correctAnswer: 0,
    },
    {
      question: "What is the purpose of the 'float' property?",
      options: [
        "To position elements relative to the viewport",
        "To move elements to the left or right",
        "To fix an element to the screen",
        "To create overlapping layers",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which CSS unit is relative to the size of the root element?",
      options: ["em", "px", "rem", "%"],
      correctAnswer: 2,
    },
    {
      question: "How do you make a list display horizontally?",
      options: [
        "display: horizontal;",
        "list-style: inline;",
        "display: inline;",
        "display: inline-block;",
      ],
      correctAnswer: 3,
    },
    {
      question: "Which shorthand property sets all margins in one declaration?",
      options: ["border", "padding", "margin", "spacing"],
      correctAnswer: 2,
    },
    {
      question: "What does 'position: absolute' do?",
      options: [
        "Positions element relative to parent",
        "Positions element relative to the document",
        "Positions element relative to the nearest positioned ancestor",
        "Positions element relative to the viewport",
      ],
      correctAnswer: 2,
    },
    {
      question: "Which CSS property defines a shadow around an element?",
      options: ["text-shadow", "border-shadow", "box-shadow", "outline-shadow"],
      correctAnswer: 2,
    },
    {
      question: "Which CSS selector targets only direct child elements?",
      options: ["div p", "div > p", "div + p", "div ~ p"],
      correctAnswer: 1,
    },
    {
      question: "Which property can make text appear underlined?",
      options: ["font-style", "text-decoration", "text-transform", "underline"],
      correctAnswer: 1,
    },
    {
      question: "Which property controls the transparency of an element?",
      options: ["visibility", "opacity", "filter", "alpha"],
      correctAnswer: 1,
    },
    {
      question: "Which property changes the type of cursor when hovering?",
      options: ["cursor", "hover-cursor", "mouse", "pointer"],
      correctAnswer: 0,
    },
    {
      question: "What does the 'flexbox' layout primarily control?",
      options: [
        "Text wrapping",
        "Element positioning along one axis",
        "Column count in a grid",
        "Table layout",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Which property specifies how an image or video fits in its container?",
      options: ["object-fit", "fit-content", "background-size", "cover"],
      correctAnswer: 0,
    },
    {
      question: "How do you apply a CSS rule to multiple selectors?",
      options: [
        "Separate them with commas",
        "Separate them with semicolons",
        "Write each on a new line",
        "Use 'and' keyword",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which CSS property defines the order of flex items?",
      options: ["z-index", "order", "position", "priority"],
      correctAnswer: 1,
    },
    {
      question: "Which property defines the transition speed of an animation?",
      options: [
        "animation-speed",
        "transition-duration",
        "speed",
        "animation-delay",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which pseudo-class selects an element when it is hovered?",
      options: [":hover", ":active", ":focus", ":checked"],
      correctAnswer: 0,
    },
    {
      question:
        "Which property defines the number of columns in a grid layout?",
      options: [
        "grid-columns",
        "grid-template-columns",
        "columns",
        "grid-template",
      ],
      correctAnswer: 1,
    },
    {
      question: "What does 'display: none;' do?",
      options: [
        "Hides the element and removes it from the layout flow",
        "Makes the element invisible but keeps its space",
        "Reduces element opacity",
        "Removes the element from the DOM",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which property adjusts the distance between letters?",
      options: ["letter-spacing", "word-spacing", "text-indent", "line-height"],
      correctAnswer: 0,
    },
    {
      question: "Which property defines the speed curve of a transition?",
      options: [
        "transition-delay",
        "transition-timing-function",
        "animation-ease",
        "animation-curve",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which property is used to set the font of text?",
      options: ["font-style", "font-family", "font-type", "text-font"],
      correctAnswer: 1,
    },
    {
      question: "What is the default display property of <span>?",
      options: ["block", "inline", "inline-block", "flex"],
      correctAnswer: 1,
    },
    {
      question: "Which property specifies the shape of list item markers?",
      options: ["list-style-type", "list-marker", "list-shape", "marker-type"],
      correctAnswer: 0,
    },
    {
      question:
        "Which value of 'position' keeps an element fixed on the screen?",
      options: ["absolute", "relative", "fixed", "sticky"],
      correctAnswer: 2,
    },
    {
      question: "Which pseudo-class targets the first child element?",
      options: [":first", ":first-child", ":nth-child(1)", ":child(1)"],
      correctAnswer: 1,
    },
    {
      question: "Which property defines the spacing between cells in a table?",
      options: ["border-spacing", "cell-spacing", "table-gap", "padding"],
      correctAnswer: 0,
    },
    {
      question: "Which property controls how overflowed content is handled?",
      options: ["overflow", "clip", "hidden", "visibility"],
      correctAnswer: 0,
    },
    {
      question: "Which property creates rounded corners?",
      options: ["border-radius", "corner-radius", "round-corner", "radius"],
      correctAnswer: 0,
    },
    {
      question: "Which property specifies how an element is displayed?",
      options: ["visibility", "display", "position", "opacity"],
      correctAnswer: 1,
    },
    {
      question: "Which property is used to add shadows to text?",
      options: ["box-shadow", "font-shadow", "text-shadow", "shadow"],
      correctAnswer: 2,
    },
    {
      question: "Which property changes the direction of flex items?",
      options: [
        "flex-direction",
        "flex-flow",
        "align-direction",
        "justify-direction",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which property defines a grid gap between columns and rows?",
      options: ["grid-gap", "gap", "spacing", "column-gap"],
      correctAnswer: 1,
    },
    {
      question: "Which property aligns flex items vertically?",
      options: [
        "align-items",
        "justify-content",
        "align-content",
        "flex-align",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which value of 'overflow' adds scrollbars only when needed?",
      options: ["auto", "scroll", "hidden", "visible"],
      correctAnswer: 0,
    },
    {
      question:
        "Which property defines how content is aligned along the main axis in flexbox?",
      options: ["justify-content", "align-items", "flex-flow", "align-content"],
      correctAnswer: 0,
    },
    {
      question:
        "Which property defines the time delay before a transition starts?",
      options: [
        "transition-delay",
        "animation-delay",
        "wait-time",
        "transition-start",
      ],
      correctAnswer: 0,
    },
    {
      question:
        "Which CSS function is used to apply custom transformations like rotate or scale?",
      options: ["transform()", "matrix()", "rotate()", "transition()"],
      correctAnswer: 0,
    },
    {
      question: "Which CSS function is used to set custom properties?",
      options: ["set-var()", "var()", "define()", "property()"],
      correctAnswer: 1,
    },
    {
      question: "Which CSS property sets an image as the background?",
      options: [
        "background-image",
        "background-url",
        "image-src",
        "background-file",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which CSS rule imports external style sheets?",
      options: ["@link", "@include", "@import", "@stylesheet"],
      correctAnswer: 2,
    },
    {
      question: "Which property defines the minimum height of an element?",
      options: ["min-height", "height-min", "lowest-height", "height-limit"],
      correctAnswer: 0,
    },
  ],
  javascript: [
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["String", "Number", "Character", "Boolean"],
      correctAnswer: 2,
    },
    {
      question: "Which method converts a JSON string into a JavaScript object?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.convert()",
        "JSON.objectify()",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "<!-- -->", "#", "/* */"],
      correctAnswer: 0,
    },
    {
      question: "What will `typeof null` return?",
      options: ["'null'", "'object'", "'undefined'", "'number'"],
      correctAnswer: 1,
    },
    {
      question: "How do you write a function in JavaScript?",
      options: [
        "function:myFunction()",
        "function myFunction()",
        "def myFunction()",
        "create myFunction()",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which method adds an element to the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: 0,
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["*", "-", "=", "=="],
      correctAnswer: 2,
    },
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      options: ["var", "let", "const", "constant"],
      correctAnswer: 2,
    },
    {
      question: "Which function is used to print something to the console?",
      options: ["print()", "console.print()", "console.log()", "log()"],
      correctAnswer: 2,
    },
    {
      question: "What is the result of '2' + 2 in JavaScript?",
      options: ["4", "'22'", "NaN", "undefined"],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of the `isNaN()` function?",
      options: [
        "Checks if a value is not a number",
        "Converts to a number",
        "Returns a number",
        "Checks for null",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the output of `Boolean('')`?",
      options: ["true", "false", "undefined", "null"],
      correctAnswer: 1,
    },
    {
      question: "Which of the following is a correct way to create an array?",
      options: ["let arr = []", "let arr = {}", "let arr = ()", "let arr = <>"],
      correctAnswer: 0,
    },
    {
      question: "Which keyword is used to define a class in JavaScript?",
      options: ["object", "function", "class", "define"],
      correctAnswer: 2,
    },
    {
      question: "What will `typeof NaN` return?",
      options: ["'NaN'", "'undefined'", "'number'", "'object'"],
      correctAnswer: 2,
    },
    {
      question: "Which method removes the last element from an array?",
      options: ["pop()", "push()", "shift()", "splice()"],
      correctAnswer: 0,
    },
    {
      question: "Which method joins all elements of an array into a string?",
      options: ["concat()", "join()", "combine()", "toString()"],
      correctAnswer: 1,
    },
    {
      question:
        "Which method executes a provided function once for each array element?",
      options: ["forEach()", "map()", "reduce()", "filter()"],
      correctAnswer: 0,
    },
    {
      question:
        "Which of the following is used to declare a variable that can change later?",
      options: ["let", "const", "static", "define"],
      correctAnswer: 0,
    },
    {
      question: "Which method converts a number to a string?",
      options: ["toString()", "stringify()", "convert()", "parseInt()"],
      correctAnswer: 0,
    },
    {
      question: "What will be the result of `2 == '2'`?",
      options: ["true", "false", "undefined", "NaN"],
      correctAnswer: 0,
    },
    {
      question: "What is the strict equality operator in JavaScript?",
      options: ["==", "===", "=", "!=="],
      correctAnswer: 1,
    },
    {
      question: "What will be the output of `typeof []`?",
      options: ["'array'", "'object'", "'list'", "'undefined'"],
      correctAnswer: 1,
    },
    {
      question: "Which of the following creates a new object in JavaScript?",
      options: ["let obj = []", "let obj = {}", "let obj = ()", "let obj = <>"],
      correctAnswer: 1,
    },
    {
      question: "Which built-in method returns the length of a string?",
      options: ["getSize()", "count()", "length", "index()"],
      correctAnswer: 2,
    },
    {
      question:
        "Which method adds one or more elements to the beginning of an array?",
      options: ["push()", "pop()", "unshift()", "shift()"],
      correctAnswer: 2,
    },
    {
      question: "Which of the following is a JavaScript loop structure?",
      options: ["repeat", "for", "foreach", "until"],
      correctAnswer: 1,
    },
    {
      question: "Which keyword is used to import a module in ES6?",
      options: ["require", "import", "include", "fetch"],
      correctAnswer: 1,
    },
    {
      question:
        "Which keyword is used to export functions or variables from a module?",
      options: ["send", "export", "expose", "return"],
      correctAnswer: 1,
    },
    {
      question: "What is a promise in JavaScript?",
      options: [
        "A variable that stores data permanently",
        "An object representing the eventual completion or failure of an asynchronous operation",
        "A function that runs immediately",
        "A debugging tool",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which method is used to handle errors in promises?",
      options: [".finally()", ".catch()", ".error()", ".handle()"],
      correctAnswer: 1,
    },
    {
      question: "What will be the result of `[] == false`?",
      options: ["true", "false", "undefined", "error"],
      correctAnswer: 0,
    },
    {
      question: "Which operator is used for exponentiation in JavaScript?",
      options: ["^", "**", "exp()", "pow()"],
      correctAnswer: 1,
    },
    {
      question: "What will `console.log(0.1 + 0.2 === 0.3)` output?",
      options: ["true", "false", "undefined", "NaN"],
      correctAnswer: 1,
    },
    {
      question:
        "Which method is used to remove whitespace from both ends of a string?",
      options: ["clean()", "strip()", "trim()", "removeSpace()"],
      correctAnswer: 2,
    },
    {
      question: "Which keyword is used to stop a loop?",
      options: ["break", "stop", "exit", "halt"],
      correctAnswer: 0,
    },
    {
      question:
        "What is the default value of uninitialized variables in JavaScript?",
      options: ["null", "0", "undefined", "false"],
      correctAnswer: 2,
    },
    {
      question:
        "Which method calls a function for each element and returns a new array?",
      options: ["forEach()", "map()", "reduce()", "filter()"],
      correctAnswer: 1,
    },
    {
      question: "Which statement can be used to handle exceptions?",
      options: ["catch-try", "try-catch", "if-catch", "error-handling"],
      correctAnswer: 1,
    },
    {
      question: "What will be the output of `'5' - 2`?",
      options: ["3", "'52'", "NaN", "'3'"],
      correctAnswer: 0,
    },
    {
      question: "Which method executes code after a specified delay?",
      options: ["setInterval()", "setTimeout()", "delay()", "timeout()"],
      correctAnswer: 1,
    },
    {
      question: "What is the output of `typeof undefined`?",
      options: ["'undefined'", "'null'", "'object'", "'void'"],
      correctAnswer: 0,
    },
    {
      question: "Which loop ensures the code executes at least once?",
      options: ["for", "while", "do...while", "foreach"],
      correctAnswer: 2,
    },
    {
      question: "Which statement creates a new instance of an object?",
      options: [
        "new Object()",
        "create Object()",
        "make Object()",
        "Object.new()",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which array method filters elements based on a condition?",
      options: ["reduce()", "map()", "filter()", "slice()"],
      correctAnswer: 2,
    },
    {
      question: "Which keyword refers to the current object in JavaScript?",
      options: ["this", "self", "that", "context"],
      correctAnswer: 0,
    },
    {
      question: "Which function executes repeatedly at a set time interval?",
      options: ["setTimeout()", "setInterval()", "delay()", "timer()"],
      correctAnswer: 1,
    },
    {
      question:
        "Which method returns the first element that matches a condition?",
      options: ["find()", "filter()", "match()", "locate()"],
      correctAnswer: 0,
    },
    {
      question: "Which array method changes the original array?",
      options: ["slice()", "map()", "filter()", "splice()"],
      correctAnswer: 3,
    },
    {
      question: "Which of the following values is falsy in JavaScript?",
      options: ["'false'", "[]", "0", "{}"],
      correctAnswer: 2,
    },
    {
      question: "Which operator is used to combine multiple conditions?",
      options: ["&", "&&", "||", "both"],
      correctAnswer: 1,
    },
    {
      question: "What is the result of `typeof function() {}`?",
      options: ["'object'", "'function'", "'method'", "'callable'"],
      correctAnswer: 1,
    },
  ],
  boostrap: [
    {
      question:
        "Which Bootstrap 5 class is used to center a block element horizontally using margin?",
      options: ["text-center", "mx-auto", "d-block", "align-center"],
      answer: 1,
    },
    {
      question:
        "What is the default flex direction in Bootstrap’s flexbox utilities?",
      options: ["column", "row", "row-reverse", "column-reverse"],
      answer: 1,
    },
    {
      question: "Which class adds a shadow to an element in Bootstrap 5?",
      options: ["shadowed", "box-shadow", "shadow", "elevate"],
      answer: 2,
    },
    {
      question:
        "What class would you use to make an element visible only on large screens?",
      options: ["d-none d-lg-block", "d-lg-none", "visible-lg", "d-lg-visible"],
      answer: 0,
    },
    {
      question:
        "Which Bootstrap 5 class adds padding on all sides of an element?",
      options: ["m-3", "p-3", "pt-3", "pl-3"],
      answer: 1,
    },
    {
      question:
        "Which of these classes makes an image responsive in Bootstrap 5?",
      options: ["img-fluid", "img-responsive", "image-fit", "w-100"],
      answer: 0,
    },
    {
      question: "What class is used to create a dark-themed navigation bar?",
      options: [
        "navbar-black",
        "navbar-dark bg-dark",
        "navbar-dark",
        "nav-dark",
      ],
      answer: 1,
    },
    {
      question:
        "Which class in Bootstrap 5 helps to vertically align items in a flex container?",
      options: [
        "align-items-center",
        "justify-content-center",
        "align-middle",
        "vertical-align-center",
      ],
      answer: 0,
    },
    {
      question:
        "What class would you use to make a button occupy the full width of its parent?",
      options: ["btn-wide", "btn-block", "w-100", "full-btn"],
      answer: 2,
    },
    {
      question: "Which class applies rounded corners to an element?",
      options: ["rounded", "radius", "cornered", "rounded-sm"],
      answer: 0,
    },
    {
      question: "What class removes the default list style from list elements?",
      options: ["no-list", "list-unstyled", "list-none", "no-bullets"],
      answer: 1,
    },
    {
      question: "Which of the following creates a responsive grid column?",
      options: ["col-xs-6", "col-6", "col-sm-6", "col-grid-6"],
      answer: 1,
    },
    {
      question: "Which Bootstrap 5 component provides dismissible alerts?",
      options: [".notify", ".toast", ".alert-dismissible", ".modal"],
      answer: 2,
    },
    {
      question: "What class applies horizontal centering in a flex container?",
      options: [
        "align-items-center",
        "justify-content-center",
        "center-block",
        "mx-auto",
      ],
      answer: 1,
    },
    {
      question: "Which of these classes adds top margin of size 5?",
      options: ["mt-5", "mb-5", "pt-5", "p-5"],
      answer: 0,
    },
    {
      question: "What Bootstrap class creates a light background for a card?",
      options: ["bg-white", "bg-light", "bg-soft", "bg-secondary"],
      answer: 1,
    },
    {
      question: "Which class is used for muted text?",
      options: ["text-muted", "text-fade", "text-gray", "text-light"],
      answer: 0,
    },
    {
      question:
        "Which class will hide an element on all devices except medium and larger?",
      options: ["d-none d-md-block", "d-md-none", "d-md-show", "d-visible-md"],
      answer: 0,
    },
    {
      question:
        "Which Bootstrap component is used for contextual feedback messages?",
      options: ["Toast", "Modal", "Alert", "Popover"],
      answer: 2,
    },
    {
      question: "Which class would create a flex container in Bootstrap 5?",
      options: ["flex", "d-flex", "flexbox", "container-flex"],
      answer: 1,
    },
    {
      question:
        "Which Bootstrap utility class provides equal-width columns in a row?",
      options: ["col-auto", "col", "col-equal", "col-6"],
      answer: 1,
    },
    {
      question: "What is the class used to display an element as inline-block?",
      options: ["d-inline", "d-block", "d-inline-block", "inline-block"],
      answer: 2,
    },
    {
      question: "How do you make a modal appear in Bootstrap 5?",
      options: [
        "$('#myModal').show()",
        "new bootstrap.Modal('#myModal').show()",
        "$('#myModal').modal('show')",
        "bootstrapModal.show('#myModal')",
      ],
      answer: 1,
    },
    {
      question: "Which class adds space between flex items?",
      options: ["gap-3", "space-3", "mg-3", "spacing-3"],
      answer: 0,
    },
    {
      question: "Which Bootstrap 5 class is used for responsive tables?",
      options: [
        "table-responsive",
        "table-fluid",
        "table-adapt",
        "table-scroll",
      ],
      answer: 0,
    },
    {
      question: "Which of the following classes makes text uppercase?",
      options: [
        "text-uppercase",
        "text-upper",
        "uppercase",
        "text-transform-upper",
      ],
      answer: 0,
    },
    {
      question: "What class adds a blue primary color to a button?",
      options: ["btn-blue", "btn-primary", "btn-main", "btn-info"],
      answer: 1,
    },
    {
      question:
        "Which utility class changes the text color to success (green)?",
      options: [
        "text-green",
        "text-success",
        "text-positive",
        "text-light-green",
      ],
      answer: 1,
    },
    {
      question:
        "Which class is used to make content scrollable within a fixed height container?",
      options: ["overflow-auto", "scrollable", "scroll-y", "auto-scroll"],
      answer: 0,
    },
    {
      question: "What class creates a dropdown menu in Bootstrap?",
      options: [
        "dropdown-menu",
        "menu-dropdown",
        "nav-dropdown",
        "dropdown-list",
      ],
      answer: 0,
    },
    {
      question:
        "Which Bootstrap 5 utility adds equal horizontal and vertical margin?",
      options: ["m-3", "mx-3", "my-3", "p-3"],
      answer: 0,
    },
    {
      question: "Which class will fix an element to the top of the viewport?",
      options: [
        "position-fixed-top",
        "fixed-top",
        "sticky-top",
        "navbar-fixed",
      ],
      answer: 1,
    },
    {
      question: "Which of the following is used to create an input group?",
      options: [
        "input-field",
        "form-control-group",
        "input-group",
        "form-group",
      ],
      answer: 2,
    },
    {
      question: "Which Bootstrap 5 class creates a small-sized button?",
      options: ["btn-xs", "btn-small", "btn-sm", "small-btn"],
      answer: 2,
    },
    {
      question: "Which of the following classes adds vertical padding?",
      options: ["py-3", "px-3", "pt-3", "pl-3"],
      answer: 0,
    },
    {
      question: "Which Bootstrap utility makes text centered?",
      options: ["text-center", "center-text", "align-center", "centered"],
      answer: 0,
    },
    {
      question: "Which of these classes is used to make a badge?",
      options: ["badge", "label", "tag", "chip"],
      answer: 0,
    },
    {
      question: "Which class adds rounded corners to a circle shape?",
      options: ["rounded-circle", "circle", "radius-circle", "rounded-50"],
      answer: 0,
    },
    {
      question: "Which of the following classes sets display to grid?",
      options: ["d-flex", "d-grid", "display-grid", "grid-display"],
      answer: 1,
    },
    {
      question:
        "Which Bootstrap 5 component provides contextual overlays for displaying lists of links?",
      options: ["Dropdown", "Popover", "Tooltip", "Toast"],
      answer: 0,
    },
    {
      question: "Which class adds a border to an element?",
      options: ["bordered", "has-border", "border", "line-border"],
      answer: 2,
    },
    {
      question: "Which Bootstrap 5 class can you use to justify text?",
      options: [
        "text-align-justify",
        "text-justify",
        "justify-text",
        "align-justify",
      ],
      answer: 1,
    },
    {
      question: "What is the default container class for a full-width layout?",
      options: [
        "container",
        "container-fluid",
        "container-full",
        "container-lg",
      ],
      answer: 1,
    },
    {
      question:
        "Which class can be used to display items in reverse order in flex?",
      options: [
        "flex-row-reverse",
        "flex-reverse",
        "row-reverse",
        "reverse-flex",
      ],
      answer: 0,
    },
    {
      question: "Which Bootstrap 5 class provides spacing between table rows?",
      options: [
        "table-gapped",
        "table-spaced",
        "table-borderless",
        "table-striped",
      ],
      answer: 2,
    },
    {
      question:
        "Which class makes an element stick to the top after scrolling?",
      options: ["sticky-top", "fixed-top", "top-sticky", "scroll-top"],
      answer: 0,
    },
    {
      question:
        "Which class is used to create equal-width nav items in Bootstrap 5?",
      options: ["nav-fill", "nav-equal", "nav-justified", "nav-even"],
      answer: 0,
    },
    {
      question: "Which class creates a large modal?",
      options: ["modal-large", "modal-lg", "modal-big", "modal-xl"],
      answer: 1,
    },
    {
      question: "Which Bootstrap 5 class sets the z-index to the top layer?",
      options: ["z-top", "z-3", "position-relative", "z-high"],
      answer: 1,
    },
    {
      question: "Which of these Bootstrap 5 classes adds animation to modals?",
      options: ["fade", "animate", "transition", "motion"],
      answer: 0,
    },
    {
      question:
        "Which Bootstrap 5 class is used to make a table without borders?",
      options: ["table-borderless", "no-border", "table-clean", "table-plain"],
      answer: 0,
    },
  ],
  tailwind: [
    {
      question: "What is Tailwind CSS primarily used for?",
      options: [
        "Creating backend APIs",
        "Writing custom CSS from scratch",
        "Utility-first styling",
        "Building databases",
      ],
      answer: 2,
    },
    {
      question: "Which class adds a margin of 4 units on all sides?",
      options: ["p-4", "m-4", "mt-4", "mx-4"],
      answer: 1,
    },
    {
      question: "What does the class `flex` do in Tailwind CSS?",
      options: [
        "Applies inline-block display",
        "Enables flexbox layout",
        "Centers text",
        "Makes container responsive",
      ],
      answer: 1,
    },
    {
      question: "How do you apply a background color of blue-500?",
      options: [
        "text-blue-500",
        "bg-blue-500",
        "border-blue-500",
        "color-blue-500",
      ],
      answer: 1,
    },
    {
      question: "Which class rounds the corners of an element completely?",
      options: ["rounded", "rounded-md", "rounded-full", "rounded-lg"],
      answer: 2,
    },
    {
      question: "What class adds horizontal padding of 6 units?",
      options: ["p-6", "px-6", "py-6", "m-6"],
      answer: 1,
    },
    {
      question: "What does `text-center` do?",
      options: [
        "Centers text horizontally",
        "Centers content vertically",
        "Aligns flex items",
        "Centers the container",
      ],
      answer: 0,
    },
    {
      question: "Which class applies a shadow to an element?",
      options: ["border", "shadow", "shadow-lg", "bg-shadow"],
      answer: 2,
    },
    {
      question: "What class makes an element display as a grid?",
      options: ["block", "flex", "grid", "inline"],
      answer: 2,
    },
    {
      question: "How do you apply bold text?",
      options: ["font-semibold", "font-bold", "font-medium", "font-extrabold"],
      answer: 1,
    },
    {
      question: "Which class sets an element’s width to 100%?",
      options: ["w-100", "w-full", "max-w-100", "width-full"],
      answer: 1,
    },
    {
      question: "What is the class for adding a red border?",
      options: ["border-red", "border-red-500", "bg-red-500", "text-red-500"],
      answer: 1,
    },
    {
      question: "How do you center items inside a flex container?",
      options: [
        "justify-center",
        "items-center",
        "text-center",
        "align-center",
      ],
      answer: 1,
    },
    {
      question: "Which directive is used to import Tailwind into a CSS file?",
      options: [
        "@import 'tailwindcss';",
        "@tailwind base;",
        "@tailwind include;",
        "@apply base;",
      ],
      answer: 1,
    },
    {
      question: "Which Tailwind directive is used to include custom styles?",
      options: ["@apply", "@custom", "@layer", "@theme"],
      answer: 2,
    },
    {
      question: "What does `justify-between` do?",
      options: [
        "Distributes space evenly between items",
        "Aligns items to center",
        "Pushes items to start",
        "Adds space around items",
      ],
      answer: 0,
    },
    {
      question: "Which class makes text italic?",
      options: ["text-italic", "italic", "font-italic", "style-italic"],
      answer: 1,
    },
    {
      question: "Which class is used to hide an element?",
      options: ["hidden", "invisible", "none", "d-none"],
      answer: 0,
    },
    {
      question: "What is the correct syntax for responsive breakpoints?",
      options: [
        "@sm:bg-red-500",
        "sm:bg-red-500",
        "bg-red-500@sm",
        "@screen sm:bg-red-500",
      ],
      answer: 1,
    },
    {
      question: "Which file contains Tailwind’s configuration?",
      options: [
        "tailwind.config.js",
        "postcss.config.js",
        "config.tailwind.js",
        "app.config.js",
      ],
      answer: 0,
    },
    {
      question: "How do you add hover styles in Tailwind?",
      options: [
        "hover:bg-blue-500",
        "@hover:bg-blue-500",
        "bg-hover-blue-500",
        "hover::bg-blue-500",
      ],
      answer: 0,
    },
    {
      question: "What class applies equal height and width?",
      options: ["size-10", "w-10 h-10", "equal-10", "hw-10"],
      answer: 0,
    },
    {
      question: "What class adds an underline to text?",
      options: ["underline", "decoration-line", "text-underline", "border-b"],
      answer: 0,
    },
    {
      question: "Which plugin allows custom scrollbar styling?",
      options: [
        "@tailwind-scrollbar",
        "@scrollbar-plugin",
        "scrollbar",
        "scrollbar-hide",
      ],
      answer: 0,
    },
    {
      question: "What class makes text uppercase?",
      options: ["uppercase", "text-upper", "capitalize", "font-uppercase"],
      answer: 0,
    },
    {
      question: "How do you apply a gradient background?",
      options: [
        "bg-gradient",
        "bg-gradient-to-r",
        "background-gradient",
        "gradient-bg",
      ],
      answer: 1,
    },
    {
      question: "Which class changes the font size to 2xl?",
      options: ["text-2xl", "font-2xl", "size-2xl", "text-large"],
      answer: 0,
    },
    {
      question: "Which class sets the z-index to 50?",
      options: ["z-50", "zIndex-50", "zi-50", "z-index-50"],
      answer: 0,
    },
    {
      question: "What class applies display: none; on small screens only?",
      options: ["sm:hidden", "hidden:sm", "hidden-sm", "@sm:hidden"],
      answer: 0,
    },
    {
      question: "Which class adds a border radius of medium size?",
      options: ["rounded-md", "rounded", "rounded-lg", "rounded-sm"],
      answer: 0,
    },
    {
      question: "How do you define custom colors in Tailwind?",
      options: [
        "theme.extend.colors",
        "addColors()",
        "custom.colors",
        "theme.colors",
      ],
      answer: 0,
    },
    {
      question: "What is the class for flexbox direction column?",
      options: ["flex-row", "flex-column", "flex-col", "flex-vertical"],
      answer: 2,
    },
    {
      question: "Which class adds shadow to text?",
      options: ["shadow", "text-shadow", "drop-shadow", "font-shadow"],
      answer: 2,
    },
    {
      question: "Which Tailwind utility controls letter spacing?",
      options: ["tracking", "space-x", "leading", "font-space"],
      answer: 0,
    },
    {
      question: "Which class sets a max width of 4xl?",
      options: ["max-w-4xl", "w-max-4xl", "mw-4xl", "maxwidth-4xl"],
      answer: 0,
    },
    {
      question: "How do you apply dark mode styles in Tailwind?",
      options: [
        "dark:bg-black",
        "@dark:bg-black",
        "bg-dark-black",
        "if-dark:bg-black",
      ],
      answer: 0,
    },
    {
      question: "What is the default Tailwind color palette based on?",
      options: [
        "Flat UI",
        "Material Design",
        "HSL values",
        "Custom color naming",
      ],
      answer: 1,
    },
    {
      question: "Which class applies spacing between grid columns?",
      options: ["gap-x-4", "grid-gap-4", "col-gap-4", "space-x-4"],
      answer: 0,
    },
    {
      question: "What directive is used to add Tailwind utilities?",
      options: [
        "@tailwind utilities;",
        "@apply utilities;",
        "@layer utilities;",
        "@tailwind apply;",
      ],
      answer: 0,
    },
    {
      question: "Which file specifies paths to your content files?",
      options: ["content", "theme", "purge", "paths"],
      answer: 0,
    },
    {
      question: "Which class changes opacity to 50%?",
      options: ["opacity-50", "opacity-half", "alpha-50", "transparent-50"],
      answer: 0,
    },
    {
      question:
        "Which Tailwind directive applies a group of utilities to a selector?",
      options: ["@apply", "@mixin", "@utility", "@style"],
      answer: 0,
    },
    {
      question: "Which plugin helps manage form input styling?",
      options: [
        "@tailwindcss/forms",
        "@tailwind-forms",
        "@formify",
        "@tailwind/input",
      ],
      answer: 0,
    },
    {
      question: "Which class aligns flex items to the end vertically?",
      options: ["items-end", "justify-end", "align-bottom", "flex-end"],
      answer: 0,
    },
    {
      question: "How do you customize spacing scale in Tailwind?",
      options: [
        "theme.extend.spacing",
        "theme.spacing",
        "addSpacing()",
        "spacing.scale",
      ],
      answer: 0,
    },
    {
      question: "What class sets grid columns to 3?",
      options: ["grid-cols-3", "col-3", "columns-3", "grid-3"],
      answer: 0,
    },
    {
      question: "Which class adds a top margin of 8 units?",
      options: ["m-8", "mt-8", "my-8", "mx-8"],
      answer: 1,
    },
    {
      question: "Which Tailwind version introduced JIT mode as default?",
      options: ["v2", "v3", "v4", "v1"],
      answer: 2,
    },
    {
      question: "Which property is managed by the `leading-` utility?",
      options: ["line-height", "letter-spacing", "font-size", "font-weight"],
      answer: 0,
    },
    {
      question: "Which directive includes Tailwind’s base styles?",
      options: [
        "@tailwind base;",
        "@apply base;",
        "@layer base;",
        "@import base;",
      ],
      answer: 0,
    },
    {
      question: "What command initializes Tailwind config file?",
      options: [
        "npx tailwindcss init",
        "npm init tailwind",
        "yarn tailwind create",
        "npx init tailwind",
      ],
      answer: 0,
    },
  ],
  react: [
    {
      question: "What is React primarily used for?",
      options: [
        "Backend development",
        "Building user interfaces",
        "Database management",
        "Styling web pages",
      ],
      answer: 1,
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript Extension",
        "Java Syntax Extension",
        "JavaScript XML",
        "JSON XML",
      ],
      answer: 2,
    },
    {
      question: "Which company developed React?",
      options: ["Google", "Facebook", "Microsoft", "Amazon"],
      answer: 1,
    },
    {
      question: "What is the correct syntax to create a functional component?",
      options: [
        "function MyComponent() {}",
        "class MyComponent {}",
        "new MyComponent()",
        "create MyComponent()",
      ],
      answer: 0,
    },
    {
      question: "What is the purpose of the useState hook?",
      options: [
        "To manage local component state",
        "To handle side effects",
        "To fetch data",
        "To access context",
      ],
      answer: 0,
    },
    {
      question: "Which hook is used to perform side effects in React?",
      options: ["useEffect", "useState", "useContext", "useRef"],
      answer: 0,
    },
    {
      question: "What is the default port for a React app?",
      options: ["3000", "5000", "8080", "4000"],
      answer: 0,
    },
    {
      question: "How do you pass data from a parent to a child component?",
      options: ["Props", "State", "Context", "Reducers"],
      answer: 0,
    },
    {
      question: "Which method is used to render React elements into the DOM?",
      options: [
        "ReactDOM.render()",
        "renderDOM()",
        "createRoot()",
        "React.render()",
      ],
      answer: 0,
    },
    {
      question: "In React 18+, what replaces ReactDOM.render?",
      options: [
        "ReactDOM.createRoot",
        "React.render",
        "ReactRoot.create",
        "renderApp",
      ],
      answer: 0,
    },
    {
      question: "What does the virtual DOM do?",
      options: [
        "Directly manipulates the real DOM",
        "Keeps a lightweight copy of the DOM",
        "Replaces the real DOM",
        "Stores browser cache",
      ],
      answer: 1,
    },
    {
      question: "Which hook is used to access context values?",
      options: ["useContext", "useState", "useReducer", "useMemo"],
      answer: 0,
    },
    {
      question: "What will happen if you call setState() directly in render()?",
      options: [
        "Nothing",
        "Re-render loop",
        "Error thrown",
        "Performance boost",
      ],
      answer: 1,
    },
    {
      question: "How do you conditionally render elements in React?",
      options: [
        "Using if-else",
        "Using ternary operator",
        "Using &&",
        "All of the above",
      ],
      answer: 3,
    },
    {
      question: "What is React Fragment used for?",
      options: [
        "Grouping elements without extra nodes",
        "Creating arrays",
        "Applying styles",
        "Handling events",
      ],
      answer: 0,
    },
    {
      question: "What does the key prop do in lists?",
      options: [
        "Helps React identify items",
        "Sets priority",
        "Adds animation",
        "Defines styling",
      ],
      answer: 0,
    },
    {
      question: "Which of the following is true about React components?",
      options: [
        "They must return multiple root elements",
        "They can be class or functional",
        "They cannot accept props",
        "They must extend Component",
      ],
      answer: 1,
    },
    {
      question:
        "Which hook is used to store mutable values that do not trigger a re-render?",
      options: ["useRef", "useMemo", "useCallback", "useEffect"],
      answer: 0,
    },
    {
      question: "What is the purpose of React.memo?",
      options: [
        "Prevent re-rendering if props don’t change",
        "Store data persistently",
        "Trigger effects",
        "Create context",
      ],
      answer: 0,
    },
    {
      question: "What is the purpose of the useCallback hook?",
      options: [
        "Memoizes functions",
        "Memoizes components",
        "Stores DOM refs",
        "Handles events",
      ],
      answer: 0,
    },
    {
      question: "What will happen if you forget to provide a key in a list?",
      options: [
        "React will crash",
        "React will throw an error",
        "React will log a warning",
        "Nothing happens",
      ],
      answer: 2,
    },
    {
      question: "What is the correct syntax for a React event handler?",
      options: [
        "onclick='handleClick()'",
        "onClick={handleClick}",
        "onClick='handleClick'",
        "click={handleClick}",
      ],
      answer: 1,
    },
    {
      question:
        "Which lifecycle method is used for cleanup in class components?",
      options: [
        "componentWillUnmount",
        "componentDidMount",
        "componentDidUpdate",
        "componentDidRender",
      ],
      answer: 0,
    },
    {
      question: "What is the use of the useReducer hook?",
      options: [
        "Manages complex state logic",
        "Replaces useEffect",
        "Renders lists",
        "Fetches data",
      ],
      answer: 0,
    },
    {
      question: "What does React.StrictMode do?",
      options: [
        "Checks potential issues in components",
        "Improves performance",
        "Prevents rendering",
        "Handles routing",
      ],
      answer: 0,
    },
    {
      question: "Which package is required for routing in React?",
      options: [
        "react-router-dom",
        "react-navigation",
        "react-route",
        "router-react",
      ],
      answer: 0,
    },
    {
      question:
        "How do you share data across all components without prop drilling?",
      options: ["Context API", "State lifting", "Hooks", "Reducers"],
      answer: 0,
    },
    {
      question: "What does the useEffect cleanup function do?",
      options: [
        "Resets the component",
        "Prevents memory leaks",
        "Stops rendering",
        "Deletes props",
      ],
      answer: 1,
    },
    {
      question: "Which hook runs only once after the component mounts?",
      options: [
        "useEffect with []",
        "useMemo",
        "useLayoutEffect",
        "useReducer",
      ],
      answer: 0,
    },
    {
      question:
        "How do you prevent a component from re-rendering unnecessarily?",
      options: ["useMemo", "useCallback", "React.memo", "All of the above"],
      answer: 3,
    },
    {
      question: "What is lazy loading in React?",
      options: [
        "Loading components only when needed",
        "Preloading all data",
        "Server-side rendering",
        "Automatic state updates",
      ],
      answer: 0,
    },
    {
      question: "Which function is used for code-splitting in React?",
      options: [
        "React.lazy()",
        "React.split()",
        "React.dynamic()",
        "React.defer()",
      ],
      answer: 0,
    },
    {
      question: "Which hook gives access to previous state values?",
      options: ["useRef", "usePrevious", "useState", "useMemo"],
      answer: 1,
    },
    {
      question: "What does ReactDOM.createPortal() do?",
      options: [
        "Renders elements outside parent hierarchy",
        "Creates nested DOM trees",
        "Caches components",
        "Handles routing",
      ],
      answer: 0,
    },
    {
      question: "How can you optimize performance for large lists in React?",
      options: [
        "Use React.memo",
        "Use virtualization",
        "Use lazy state",
        "Use static props",
      ],
      answer: 1,
    },
    {
      question: "Which React hook is used to memoize computed values?",
      options: ["useMemo", "useCallback", "useState", "useEffect"],
      answer: 0,
    },
    {
      question: "What is the difference between useMemo and useCallback?",
      options: [
        "useMemo memoizes values, useCallback memoizes functions",
        "They are the same",
        "useCallback is faster",
        "useMemo handles async tasks",
      ],
      answer: 0,
    },
    {
      question: "What is the purpose of the key prop in a list?",
      options: [
        "To help React identify which items changed",
        "To style items",
        "To mark items as unique visually",
        "To define component IDs",
      ],
      answer: 0,
    },
    {
      question: "How can you update the state in a class component?",
      options: ["this.setState()", "useState()", "setState()", "updateState()"],
      answer: 0,
    },
    {
      question:
        "What is the default behavior of useEffect without a dependency array?",
      options: [
        "Runs on every render",
        "Runs only once",
        "Never runs",
        "Runs only on unmount",
      ],
      answer: 0,
    },
    {
      question: "Which React hook allows referencing DOM elements?",
      options: ["useRef", "useMemo", "useEffect", "useContext"],
      answer: 0,
    },
    {
      question: "What does React.StrictMode warn against?",
      options: [
        "Unsafe lifecycle methods",
        "Performance issues",
        "Type errors",
        "Memory leaks only",
      ],
      answer: 0,
    },
    {
      question: "What does the Context API solve?",
      options: [
        "Prop drilling",
        "Async loading",
        "Component rendering",
        "Routing issues",
      ],
      answer: 0,
    },
    {
      question:
        "What is the default behavior of React components when props change?",
      options: ["Re-render", "Unmount", "Stay same", "Ignore update"],
      answer: 0,
    },
    {
      question: "What is the purpose of React.Suspense?",
      options: [
        "To handle loading states for lazy components",
        "To delay rendering",
        "To optimize performance",
        "To group components",
      ],
      answer: 0,
    },
    {
      question: "Which React feature enables concurrent rendering?",
      options: [
        "React 18 concurrent mode",
        "React Fiber",
        "useTransition",
        "All of the above",
      ],
      answer: 3,
    },
    {
      question: "How do you define default props for a component?",
      options: [
        "Component.defaultProps",
        "props.default",
        "setDefaultProps()",
        "useDefaultProps()",
      ],
      answer: 0,
    },
    {
      question:
        "Which React hook allows you to transition between states smoothly?",
      options: ["useTransition", "useMemo", "useDeferredValue", "useEffect"],
      answer: 0,
    },
    {
      question: "How do you memoize a component?",
      options: [
        "React.memo(Component)",
        "useMemo(Component)",
        "memoize(Component)",
        "PureComponent(Component)",
      ],
      answer: 0,
    },
    {
      question: "What is the purpose of useDeferredValue?",
      options: [
        "Defers expensive renders for better performance",
        "Creates lazy components",
        "Schedules updates",
        "Delays state changes",
      ],
      answer: 0,
    },
    {
      question: "Which React version introduced hooks?",
      options: ["v16.8", "v15.6", "v17.0", "v18.0"],
      answer: 0,
    },
  ],

  database: [
    // ---------- SQL QUESTIONS ----------
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Simple Query Language",
        "Sequential Query Language",
        "System Query Language",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which SQL statement is used to extract data from a database?",
      options: ["GET", "EXTRACT", "SELECT", "FETCH"],
      correctAnswer: 2,
    },
    {
      question: "Which SQL keyword is used to sort the result set?",
      options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"],
      correctAnswer: 1,
    },
    {
      question: "Which SQL clause is used to filter records?",
      options: ["WHERE", "ORDER", "HAVING", "FILTER"],
      correctAnswer: 0,
    },
    {
      question:
        "Which command is used to delete all rows from a table without removing the table structure?",
      options: ["DROP", "DELETE", "REMOVE", "TRUNCATE"],
      correctAnswer: 3,
    },
    {
      question:
        "Which SQL keyword is used to combine rows from two or more tables?",
      options: ["CONNECT", "JOIN", "LINK", "BIND"],
      correctAnswer: 1,
    },
    {
      question: "What does the PRIMARY KEY constraint do?",
      options: [
        "Allows duplicate values",
        "Uniquely identifies each record in a table",
        "Defines foreign relations",
        "Ensures referential integrity",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which of the following is NOT a SQL aggregate function?",
      options: ["SUM()", "AVG()", "COUNT()", "ROUND()"],
      correctAnswer: 3,
    },
    {
      question: "What is the default sorting order of ORDER BY?",
      options: ["DESC", "RANDOM", "ASC", "NONE"],
      correctAnswer: 2,
    },
    {
      question: "Which SQL statement is used to modify existing records?",
      options: ["INSERT", "UPDATE", "CHANGE", "ALTER"],
      correctAnswer: 1,
    },
    {
      question: "Which operator is used with WHERE to search for a pattern?",
      options: ["IN", "LIKE", "MATCH", "PATTERN"],
      correctAnswer: 1,
    },
    {
      question:
        "Which SQL constraint ensures that all values in a column are different?",
      options: ["UNIQUE", "PRIMARY KEY", "CHECK", "NOT NULL"],
      correctAnswer: 0,
    },
    {
      question: "Which SQL function returns the current date and time?",
      options: ["CURRENT()", "NOW()", "SYSDATE()", "DATE()"],
      correctAnswer: 1,
    },
    {
      question: "How do you rename a column in SQL?",
      options: [
        "ALTER TABLE table RENAME column",
        "ALTER TABLE table CHANGE old_name new_name datatype",
        "UPDATE COLUMN old_name TO new_name",
        "MODIFY COLUMN new_name",
      ],
      correctAnswer: 1,
    },
    {
      question: "What does the HAVING clause do in SQL?",
      options: [
        "Filters groups of data after aggregation",
        "Filters rows before grouping",
        "Defines sorting rules",
        "Specifies columns in output",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is a foreign key used for?",
      options: [
        "To link records between two tables",
        "To ensure unique values in a column",
        "To create database indexes",
        "To store sensitive data",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is true about a SQL view?",
      options: [
        "It stores physical data",
        "It is a virtual table based on a query",
        "It cannot be queried",
        "It requires a primary key",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is normalization in databases?",
      options: [
        "Organizing data to reduce redundancy",
        "Creating duplicate tables",
        "Backing up databases",
        "Sorting data alphabetically",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which normal form removes transitive dependency?",
      options: ["1NF", "2NF", "3NF", "BCNF"],
      correctAnswer: 2,
    },
    {
      question: "What does the DISTINCT keyword do?",
      options: [
        "Removes duplicate values from results",
        "Sorts records",
        "Filters null values",
        "Displays top results only",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which SQL statement is used to add a new column to a table?",
      options: [
        "ADD COLUMN",
        "ALTER TABLE ADD COLUMN",
        "MODIFY COLUMN",
        "INSERT COLUMN",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which SQL operator combines multiple conditions?",
      options: ["WHERE", "AND/OR", "IN", "UNION"],
      correctAnswer: 1,
    },
    {
      question: "Which SQL command removes a table from the database?",
      options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "CLEAR TABLE"],
      correctAnswer: 1,
    },
    {
      question: "What is a subquery in SQL?",
      options: [
        "A query inside another query",
        "A query that modifies schema",
        "A backup query",
        "A temporary query",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which function returns the number of rows in a table?",
      options: ["SUM()", "COUNT()", "ROWS()", "TOTAL()"],
      correctAnswer: 1,
    },

    // ---------- MONGODB / NOSQL QUESTIONS ----------
    {
      question: "What does NoSQL stand for?",
      options: [
        "Not Only SQL",
        "Non-Sequential Query Language",
        "Non-Structured Query Language",
        "New SQL",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is a document-based NoSQL database?",
      options: ["Redis", "MongoDB", "Cassandra", "Neo4j"],
      correctAnswer: 1,
    },
    {
      question: "In MongoDB, data is stored in:",
      options: ["Tables", "Collections", "Documents", "Schemas"],
      correctAnswer: 2,
    },
    {
      question: "Which data format does MongoDB use?",
      options: ["CSV", "JSON", "BSON", "XML"],
      correctAnswer: 2,
    },
    {
      question: "Which command is used to insert data in MongoDB?",
      options: ["insertOne()", "add()", "create()", "push()"],
      correctAnswer: 0,
    },
    {
      question: "What is the equivalent of a table in MongoDB?",
      options: ["Schema", "Collection", "Row", "Document"],
      correctAnswer: 1,
    },
    {
      question: "Which command retrieves documents in MongoDB?",
      options: ["find()", "get()", "query()", "select()"],
      correctAnswer: 0,
    },
    {
      question: "How do you limit the number of documents returned?",
      options: ["limit()", "max()", "reduce()", "range()"],
      correctAnswer: 0,
    },
    {
      question: "Which method updates a document in MongoDB?",
      options: ["update()", "updateOne()", "modify()", "change()"],
      correctAnswer: 1,
    },
    {
      question: "What is the default primary key field in MongoDB documents?",
      options: ["id", "_id", "primary", "uuid"],
      correctAnswer: 1,
    },
    {
      question: "Which method is used to delete documents?",
      options: ["remove()", "delete()", "deleteOne()", "drop()"],
      correctAnswer: 2,
    },
    {
      question: "Which command lists all collections in a database?",
      options: [
        "show collections",
        "list collections",
        "db.collections()",
        "getCollections()",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which method creates an index in MongoDB?",
      options: ["index()", "createIndex()", "setIndex()", "addIndex()"],
      correctAnswer: 1,
    },
    {
      question: "Which aggregation operator is used to group documents?",
      options: ["$group", "$match", "$sum", "$project"],
      correctAnswer: 0,
    },
    {
      question: "What is sharding in MongoDB?",
      options: [
        "Splitting data across multiple servers",
        "Encrypting documents",
        "Creating indexes",
        "Joining data from two collections",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which method returns the first matching document?",
      options: ["find()", "findOne()", "getFirst()", "fetch()"],
      correctAnswer: 1,
    },
    {
      question: "Which operator filters documents by greater than a value?",
      options: ["$lt", "$lte", "$gt", "$eq"],
      correctAnswer: 2,
    },
    {
      question: "What does the $match stage do in aggregation?",
      options: [
        "Filters documents based on a condition",
        "Groups documents",
        "Sorts results",
        "Projects specific fields",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which function deletes an entire collection?",
      options: ["deleteCollection()", "drop()", "removeAll()", "deleteMany()"],
      correctAnswer: 1,
    },
    {
      question: "Which operator performs logical OR in MongoDB queries?",
      options: ["$and", "$or", "$not", "$nor"],
      correctAnswer: 1,
    },
    {
      question: "What does db.stats() return?",
      options: [
        "Database statistics",
        "System configuration",
        "Index data only",
        "Server logs",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which command switches to a database in MongoDB shell?",
      options: [
        "switch db",
        "use <dbname>",
        "connect <dbname>",
        "open <dbname>",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which MongoDB feature provides high availability?",
      options: ["Replication", "Sharding", "Indexes", "Backups"],
      correctAnswer: 0,
    },
    {
      question: "Which operator checks if a field exists?",
      options: ["$exists", "$has", "$in", "$eq"],
      correctAnswer: 0,
    },
    {
      question: "Which data type is supported by MongoDB for arrays?",
      options: ["List", "Array", "Embedded documents", "All of the above"],
      correctAnswer: 3,
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
