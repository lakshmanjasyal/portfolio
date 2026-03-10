export const personal = {
  name: "Lakshman Narayan Jasyal",
  role: "Software Developer",
  taglines: ["Web Applications", "IoT Solutions", "React Interfaces", "Smart Systems"],
  subline: "BTech CSE @ CUSAT · 8.44 CGPA · Kochi, Kerala",
  badge: "Visteon Scholar · PMSSS Recipient · Open to Opportunities",
  bio1:
    "Hi! I'm a 3rd-year BTech Computer Science & Engineering student at Cochin University of Science and Technology (CUSAT), Kerala, with a CGPA of 8.44 (till 4th sem).",
  bio2:
    "I'm a Visteon Scholar (Visteon India Mentorship Program) and a proud PMSSS recipient — awarded to students from Jammu & Kashmir and Ladakh for academic excellence and leadership potential. I love building things, from IoT robots to full-stack apps.",
  email: "lakshmanjasyal77777@gmail.com",
  phone: "+91 96223 35631",
  github: "https://github.com/lakshmanjasyal",
  linkedin: "https://linkedin.com/in/lakshman-jasyal",
  location: "Kochi, Kerala",
  origin: "Jammu, J&K",
  languages: ["English", "Hindi", "Dogri", "Punjabi"],
  interests: ["Cricket 🏏", "Book Reading (Stories) 📚", "Watching Movies 🎬"],
};

export const experience = [
  {
    id: 1,
    role: "Visteon Scholar",
    org: "Visteon India",
    type: "Mentorship Program",
    period: "2025 – Present",
    location: "India",
    status: "ongoing",
    bullets: [
      "Selected for the prestigious Visteon Scholars Program — an industry mentorship initiative by Visteon India.",
      "Mentored by software engineering professionals from Visteon India.",
    ],
    tags: ["Mentorship", "Industry Program", "Software Development"],
  },
  {
    id: 2,
    role: "PMSSS Recipient",
    org: "Prime Minister's Special Scholarship Scheme",
    type: "Scholarship",
    period: "2023 – Present",
    location: "J&K / Ladakh",
    status: "ongoing",
    bullets: [
      "Awarded under PMSSS for students from Jammu & Kashmir and Ladakh.",
      "Recognized for academic excellence and leadership potential.",
    ],
    tags: ["Scholarship", "PMSSS", "Academic Excellence"],
  },
  {
    id: 3,
    role: "IoT Intern",
    org: "NITTTR Chandigarh",
    type: "Internship",
    period: "Summer 2025",
    location: "Chandigarh, India",
    status: "completed",
    bullets: [
      "Gained hands-on experience in IoT using Arduino and Tinkercad.",
      "Built a Smart Parking System integrating sensors and LCD displays.",
      "Learned microcontroller programming and real-time data processing.",
    ],
    tags: ["Arduino", "IoT", "Tinkercad", "Embedded Systems"],
  },
  {
    id: 4,
    role: "Frontend Developer",
    org: "ICREP CUSAT",
    type: "Collaboration",
    period: "2024",
    location: "CUSAT, Kerala",
    status: "completed",
    bullets: [
      "Collaborated with a team to redesign and develop the ICREP website.",
      "Ensured responsive interfaces and enhanced navigation for better UX.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    id: 5,
    role: "Web Development Intern",
    org: "Jammu University",
    type: "Internship",
    period: "Summer 2024",
    location: "Jammu, J&K",
    status: "completed",
    bullets: [
      "Learned modern web technologies and project development workflows.",
    ],
    tags: ["Web Development", "Project Workflow"],
  },
];

export const projects = [
  {
    id: 1,
    title: "ITR Co-Pilot",
    year: "2025",
    description:
      "An AI-powered copilot for automated ITR-1 tax filing. Built with a multi-agent pipeline to process data and generate filings end-to-end.",
    tech: ["React", "Node.js", "FastAPI", "AI/LLM"],
    live: "https://itr-co-pilot.vercel.app/",
    github: "https://github.com/lakshmanjasyal",
    featured: true,
    icon: "🤖",
  },
  {
    id: 2,
    title: "Human Following Robot",
    year: "2025",
    description:
      "Designed and developed a human-following robot using Arduino and ultrasonic sensors with real-time distance tracking and autonomous motor control.",
    tech: ["Arduino", "IoT", "Ultrasonic Sensors", "Embedded C"],
    live: null,
    github: "https://github.com/lakshmanjasyal",
    featured: true,
    icon: "🦾",
  },
  {
    id: 3,
    title: "Movie Browser App",
    year: "2024",
    description:
      "A dynamic movie browsing application built with React and real-time REST API integration for fetching up-to-date movie data.",
    tech: ["React.js", "REST API", "JavaScript", "CSS"],
    live: "https://movie-listbylakshman.netlify.app/",
    github: "https://github.com/lakshmanjasyal",
    featured: false,
    icon: "🎬",
  },
  {
    id: 4,
    title: "Tic-Tac-Toe Game",
    year: "2024",
    description:
      "An interactive two-player Tic-Tac-Toe game built with React, featuring clean UI and smooth game-state management.",
    tech: ["React.js", "JavaScript", "CSS"],
    live: "https://tic-tac-toebylakshman.netlify.app",
    github: null,
    featured: false,
    icon: "🎮",
  },
  {
    id: 5,
    title: "Keeper App",
    year: "2024",
    description:
      "A note-keeping application using React component-based architecture and state management for efficient task tracking.",
    tech: ["React.js", "State Management", "JavaScript"],
    live: "https://keeper-appbylakshman.netlify.app",
    github: null,
    featured: false,
    icon: "📝",
  },
  {
    id: 6,
    title: "To-Do App",
    year: "2024",
    description:
      "A fully functional to-do list app with CRUD operations, localStorage persistence, and a clean responsive interface.",
    tech: ["React.js", "CRUD", "LocalStorage", "JavaScript"],
    live: "https://to-do-appbylakshman.netlify.app",
    github: null,
    featured: false,
    icon: "✅",
  },
];

export const skills = {
  languages: [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Java (DSA)", level: 80 },
    { name: "Python", level: 75 },
    { name: "C++", level: 70 },
  ],
  tools: [
    "React.js", "Node.js", "Bootstrap", "jQuery",
    "Bash", "Git & GitHub", "Arduino", "Tinkercad", "Grafana",
  ],
  soft: [
    "Problem Solving", "Teamwork", "Adaptability",
    "Structured Thinking", "Leadership", "Communication",
  ],
  certifications: [
    { name: "Full-Stack Web Developer – Angela Yu (Coursera)", status: "In Progress" },
    { name: "Learn DSA in Java – Prateek Singhal (Coursera)", status: "In Progress" },
    { name: "Bash Shell Scripting – Herbert Lindemans", status: "Completed" },
    { name: "Grafana Workshop – GDG Cochin", status: "Completed" },
    { name: "DevFest Kochi 2024 – GDG Cochin", status: "Attended" },
  ],
};

export const education = [
  {
    degree: "Bachelor of Technology – CSE",
    school: "Cochin University of Science and Technology (CUSAT)",
    location: "Kerala, India",
    year: "2023 – 2027",
    grade: "8.44 CGPA",
    gradeSuffix: "(Till 4th Sem)",
    icon: "🎓",
    highlight: true,
  },
  {
    degree: "Senior Secondary (Class XII)",
    school: "SP Smart Schools, Exchange Road Jammu",
    location: "Jammu, J&K (JKBOSE)",
    year: "2022 – 2023",
    grade: "90%",
    gradeSuffix: "",
    icon: "📚",
    highlight: false,
  },
  {
    degree: "Secondary (Class X)",
    school: "SP Smart Schools, Exchange Road Jammu",
    location: "Jammu, J&K (JKBOSE)",
    year: "2020 – 2021",
    grade: "91.4%",
    gradeSuffix: "",
    icon: "📖",
    highlight: false,
  },
];

export const achievements = [
  {
    icon: "🏆",
    title: "Best Pitch Award",
    desc: "Won Best Pitching Award at a hackathon organized by MES Asmabi College, P. Vemballur.",
    year: "2025",
    highlight: true,
  },
  {
    icon: "🥉",
    title: "Inkrit 3.0 – 3rd Prize",
    desc: "Won 3rd Prize at MES College in a technical event competition.",
    year: "2025",
    highlight: false,
  },
  {
    icon: "🏛️",
    title: "IIM Bangalore – Venix 2025",
    desc: "Participated in Data Beyond Boundaries analytics case competition at IIM Bangalore's Intercollegiate Fest.",
    year: "2025",
    highlight: false,
  },
  {
    icon: "🚀",
    title: "Tata Imagination Challenge",
    desc: "Participated in the national-level innovation competition organized by Tata Group.",
    year: "2025",
    highlight: false,
  },
  {
    icon: "💻",
    title: "CodeSprint 2025",
    desc: "Participated in the coding competition organized by St. Aloysius College.",
    year: "2025",
    highlight: false,
  },
  {
    icon: "⚡",
    title: "IEEE TechBurst 2K24",
    desc: "Participated in MSIGMA's IEEE TechBurst 2K24 technical competition.",
    year: "2024",
    highlight: false,
  },
  {
    icon: "🤝",
    title: "Memberships",
    desc: "Active member of ACES (Association of Computer Engineering Students) and IEEE.",
    year: "Active",
    highlight: false,
  },
];
