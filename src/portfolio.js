
// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yetnayet Lakew Aramde",
  title: "Hi all, I'm Yetnayet",
  subTitle: emoji(
    "Software Engineering BSc. student at Addis Ababa Science and Technology University, passionate about backend and mobile development, with experience in React.js, Next.js, Flutter, and more."
  ),
  resumeLink: "src/containers/greeting/resume.pdf", // Resume download button will be enabled by local PDF file
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/infangle",
  linkedin: "https://www.linkedin.com/in/yetnayet-lakew-417441256",
  gmail: "saadpasta70@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/share/1L8fgsYXbP/?mibextid=LQQJ4d",
  medium: "",
  stackoverflow: "",
  instagram: "https://www.instagram.com/yetia26?igsh=MTlwYmllazl1Y2pjZQ%3D%3D&utm_source=qr",
  twitter: "http://twitter.com/LakewYetnayet",
  hackerrank: "https://www.hackerrank.com/profile/lakewyetnayet93",
  codeforces: "https://codeforces.com/profile/YetiA",
  leetcode: "https://leetcode.com/YetiA/",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle: "Programming languages, frameworks, and tools I am proficient in",
  skills: [
    emoji("⚡ Python, C++, Java, C#, JavaScript, Dart, Typescript"),
    emoji("⚡ Next.js, React.js, Jest, MySQL, Figma, Flutter, Firebase, Git, Github")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Addis Ababa Science and Technology University (AASTU)",
      logo: "", // No logo provided
      subHeader: "BSc. Software Engineering",
      duration: "Mar 2022 – Jul 2026",
      desc: "Dean's List (May 2024)",
      descBullets: [
        "Relevant Coursework: Data Structures & Algorithms, Software Design & Architecture, Operating Systems, Computer Networks, Artificial Intelligence, Machine Learning, Distributed Systems, Computer Security"
      ]
    },
    {
      schoolName: "Africa to Silicon Valley (A2SV)",
      logo: "",
      subHeader: "Advanced Algorithms & Data Structures Fellowship",
      duration: "Nov 2023 – Nov 2024",
      desc: "Mastered advanced Data Structures & Algorithms and Competitive Programming, achieving 90% in rigorous evaluations.",
      descBullets: [
        "Designed and iterated on a responsive e-banking UI (React.js, Next.js, Tailwind CSS), collaborating cross-functionally to align with backend APIs and user stories."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Backend and Mobile Developer",
      company: "Lion Green Solutions",
      companylogo: "", // No logo provided
      date: "Feb 2025 – Jun 2025",
      desc: "Designed and implemented scalable database schemas for web backend using MongoDB, improving data retrieval speeds by 40% and reducing server response times by 150 milliseconds.",
      descBullets: [
        "Single-handedly architected the mobile app's user interface, receiving commendation from the CTO for the app's intuitive design and contributing findings to fix the three biggest causes of crashes.",
        "Collaborated cross-functionally with backend and admin portal developers, ensuring seamless integration and a cohesive user experience."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "eskalate.io",
      companylogo: "",
      date: "Jul 2024 – Oct 2024",
      desc: "Built a modular blog interface using React.js, Next.js, and Tailwind CSS, improving first-render load speed from ~1.2s to ~700ms.",
      descBullets: [
        "Orchestrated global state management with Redux, improved UI consistency across 6+ routes.",
        "Facilitated deployment of a full-stack web app in a team of 5, managing version control and code reviews via Git/GitHub.",
        "Reviewed 10+ pull requests with 100% CI pass rate, ensuring clean, testable code and maintaining team standards."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some projects I have worked on",
  projects: [
    {
      image: "", // No image provided
      projectName: "Class Scheduling System",
      projectDesc: "Led a team of 6 to build an Automated Class Scheduling System for AASTU, orchestrating full-stack integration (Java backend, React frontend, MySQL). Reduced scheduling conflicts by over 50% by designing and applying conflict resolution algorithms.",
      footerLink: []
    },
    {
      image: "",
      projectName: "ProLink",
      projectDesc: "Architected ProLink, a real-time mobile application (Flutter) for project collaboration and skill-sharing. Integrated a job search & project marketplace leveraging Firebase, enabling students to monetize projects and find opportunities. Secured 3rd Place at AASTU Tech Fest.",
      footerLink: []
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Leadership 🏆"),
  subtitle: "Awards and leadership roles I have earned and held",
  achievementsCards: [
    {
      title: "Top 8 Innovator",
      subtitle: "Ranked among the top 8 semifinalists out of 40+ teams for pioneering a creative and effective solution at A2SV internal Hackathon.",
      image: "",
      imageAlt: "",
      footerLink: []
    },
    {
      title: "Cohort Lead",
      subtitle: "Led a cohort of 50+ students in a game development bootcamp.",
      image: "",
      imageAlt: "",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "lakewyetnayet93@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
