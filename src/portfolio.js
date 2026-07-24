/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Disable splash screen to show the redesigned homepage.
};

//SEO Related settings
const seo = {
  title: "Abdul Subhan Portfolio",
  description:
    "Energetic Full Stack Werb developerwith 5+ year of professional experience focusing on React-based applications.Proficient with JavaScript, TypeScript, and Git. Developed over 10 user-centered React applications.Looking forward to adding value through my passion and expertise.",
  og: {
    title: "Abdul Subhan Portfolio",
    type: "website",
    url: "https://abdulsubhan.com/",
  },
};

//Home Page
const greeting = {
  title: "Abdul Subhan",
  logo_name: "Abdul Subhan",
  subTitle:
    "Full-Stack Web Developer crafting scalable web applications, AI-powered platforms, modern interfaces, and cloud-ready products for ambitious teams.",
  resumeLink:
    "https://drive.google.com/file/d/1-L9ddZRjDWaa2eVg1EIX0VJOV63iQdef/view?usp=drive_link",
  resumeDownloadLink:
    "https://drive.google.com/file/d/1-L9ddZRjDWaa2eVg1EIX0VJOV63iQdef/view?usp=drive_link",
  portfolio_repository: "https://github.com/subhan8799/abdul-subhan-portfolio",
  githubProfile: "https://github.com/subhan8799",
};

const heroHighlights = [
  {
    title: "Full-Stack Development",
    description: "Building complete web products from polished interfaces to scalable backend systems with clean engineering practices.",
  },
  {
    title: "AI-Powered Platforms",
    description: "Designing intelligent solutions that blend UX, automation, and modern AI capabilities into real-world products.",
  },
  {
    title: "Cloud-Ready Delivery",
    description: "Creating high-performance applications with reliable APIs, databases, secure architecture, and deployment readiness.",
  },
];

const aboutProfile = {
  headline: "I transform ideas into scalable, user-focused digital products with modern engineering, elegant interfaces, and strong product thinking.",
  intro: `I’m a Full-Stack Web Developer focused on building high-performance applications that balance clean architecture, modern UI/UX, and practical business value. My work spans frontend development, backend systems, APIs, database design, AI integration, and cloud-based deployment for products that are both beautiful and reliable.

With an MSc in Computing and a BSc in Software Engineering, I bring a strong academic and practical foundation to product development. I enjoy turning complex requirements into elegant, maintainable software that feels effortless for users and supports long-term growth for businesses.

My experience includes building responsive web applications, AI-enhanced platforms, secure SaaS products, and data-driven experiences. I focus on delivering solutions with thoughtful engineering, maintainable code, strong performance, and a clear understanding of user needs.
`,
  points: [
    "Modern frontend experiences with React, Next.js, TypeScript, and Tailwind CSS",
    "Backend architecture and API development with Node.js, Express.js, authentication, and secure systems",
    "Database-driven applications and cloud-ready deployment for production environments",
    "AI-enhanced platforms, automation, performance optimization, and thoughtful product delivery",
  ],
};
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/subhan8799",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdul-subhan-b00b8623a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@miansubhan5345",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:mian8799@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100008053668413",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/abdul_subhan_xx1/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Learning application backend in Node, Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/subhan8799",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@subhan8799",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      university: "University of Northampton",
      logo_path: "UON-Logo.png",
      alt_name: "University of Northampton Logo",
      duration: "2025 - 2026",
      degree: "MSc Computing",
      website_link: "https://www.northampton.ac.uk/",
      description:
        "Advanced studies in intelligent systems, cloud-native applications, and AI-enhanced product engineering.",
      dissertation: {
        title: "AI Tailor Website",
        summary:
          "An AI-powered tailoring platform that delivers personalized styling, fit recommendations, and intelligent customer experiences through modern AI technologies.",
        highlights: [
          "AI-driven tailoring recommendations with personalization",
          "Adaptive fit analytics and style intelligence",
          "Cloud-native deployment and responsive frontend",
          "Research on explainable AI and interactive user experiences",
        ],
        technologies: [
          "Python",
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "AI/LLMs",
          "Machine Learning",
          "OpenAI APIs",
          "REST APIs",
          "Tailwind CSS",
          "Docker",
          "Git",
          "Cloud Technologies",
        ],
      },
      focusAreas: [
        "AI research and ML systems",
        "Full-stack architecture",
        "Cloud deployment and modern tooling",
        "Human-centered product design",
      ],
    },
    {
      university: "The Islamia University of Bahawalpur",
      logo_path: "iiitk_logo.png",
      alt_name: "The Islamia University of Bahawalpur Logo",
      duration: "2020 - 2024",
      degree: "BS Software Engineering",
      website_link: "https://www.iub.edu.pk/",
      description:
        "A comprehensive software engineering program focused on systems design, development processes, and full-stack application delivery.",
      finalYearProject: {
        title: "Smart Campus Assistant",
        summary:
          "A professional capstone project for campus coordination, attendance automation, and compact student services in a polished portal.",
        features: [
          "Smart attendance automation with alerts and scheduling",
          "Analytics-backed student dashboard for key campus services",
          "Centralized workflows for students and faculty collaboration",
        ],
        technologies: [
          "JavaScript",
          "React",
          "Node.js",
          "MongoDB",
          "REST APIs",
        ],
      },
      coursework: [
        "Data Structures & Algorithms",
        "Software Architecture",
        "Database Systems",
        "Web Development",
        "Testing & Quality Assurance"
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work And Experience",
  description:
    "I have worked with many evolving startups as React and Next.js Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "AI Tailor Website",
          company: "MSc Computing Dissertation Project",
          company_url: "https://github.com/subhan8799",
          logo_path: "ai-tailor.png",
          duration: "August 2025 - Present",
          location: "Remote / UK",
          description:
            "Actively developing an AI-powered tailoring platform that combines personalized clothing recommendations, computer vision, and full-stack product engineering into a scalable modern web application.",
          highlights: [
            "Built an AI-driven tailoring experience with personalized recommendations and fit-oriented guidance.",
            "Integrated live camera-based analysis for real-time body measurements and digital tailoring workflows.",
            "Designed product management, admin dashboards, authentication, analytics, and responsive customer journeys.",
            "Leveraged React, Next.js, TypeScript, Node.js, Express.js, MongoDB/PostgreSQL, JWT, and AI/ML tooling.",
          ],
          color: "#7c3aed",
        },
        {
          title: "Office Managment System",
          company: "Enigmatix pvt ltd.",
          company_url: "https://enigmatix.io/",
          logo_path: "enigmatix.png",
          duration: "June 2020 - May 2022",
          location: "Bahawalpur, PAK",
          description:
            "Built and maintained a workforce management platform focused on attendance, payroll visibility, and reporting workflows for operational teams.",
          highlights: [
            "Delivered attendance and reporting workflows for internal operations.",
            "Improved workforce visibility through automated reporting and analytics.",
            "Supported reliable product delivery with modern React-based interfaces.",
          ],
          color: "#000000",
        },
        {
          title: "Elevate Security",
          company: "Elevate security pvt ltd",
          company_url: "https://elevatesecurity.com/",
          logo_path: "elevate-security.png",
          duration: "May 2022 - Aug 2023",
          location: "San Francisco, CA",
          description:
            "Contributed to a security risk platform with modular front-end architecture and scalable product delivery for complex workflows.",
          highlights: [
            "Led a micro-frontend architecture to improve modular delivery.",
            "Supported a high-availability security platform with maintainable UI patterns.",
            "Collaborated on a product experience built for rapid feature rollout.",
          ],
          color: "#0879bf",
        },
        {
          title: "Waterlogic",
          company: "Enigmatix Pvt. Ltd.",
          company_url: "https://www.waterlogic.com/en-gb/",
          logo_path: "Waterlogic.png",
          duration: "May 2021 - Feb 2023",
          location: "Australia",
          description:
            "Developed an interactive product catalog experience for global drink dispensing products with filtering and product discovery features.",
          highlights: [
            "Built a dynamic catalogue interface with strong product discovery UX.",
            "Supported product exploration with clear filtering and presentation patterns.",
            "Delivered a responsive experience for a global consumer-facing product.",
          ],
          color: "#fc1f20",
        },
        {
          title: "Rent Around",
          company: "Rent Around pvt ltd",
          company_url: "https://app.rentarround.com/",
          logo_path: "fav-Icon.png",
          duration: "May 2024 - Aug 2025",
          location: "Portugal Europe",
          description:
            "Delivered a multi-role e-commerce platform for sellers, buyers, and influencers with polished onboarding and commerce flows.",
          highlights: [
            "Built tailored experiences for multiple user journeys and business roles.",
            "Improved product presentation and conversion-focused UI patterns.",
            "Supported modern web delivery with scalable front-end architecture.",
          ],
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A selection of product-minded applications built with modern frontend, backend, AI, and cloud technologies.",
  avatar_image_path: "projects_image.svg",
};

const portfolioProjects = [
  {
    title: "Office Management System",
    summary:
      "A modern workforce operations platform for attendance management, payroll transparency, and operational reporting.",
    highlight:
      "Built to streamline admin workflows and give teams cleaner visibility across daily operations.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
      "JWT",
      "Vercel",
    ],
    focus: ["Attendance workflows", "Payroll automation", "Operations reporting"],
    url: "https://www.oms.enigmatix.co/",
    badge: "Product",
  },
  {
    title: "Elevate Security",
    summary:
      "A modular security platform experience designed for risk visibility, analytics, and maintainable product delivery.",
    highlight:
      "Focused on scalable front-end architecture for a complex, multi-feature web application.",
    technologies: [
      "React",
      "TypeScript",
      "Micro-frontends",
      "WebSocket",
      "Node.js",
      "Tailwind CSS",
      "CI/CD",
    ],
    focus: ["Modular UI architecture", "Security dashboards", "Real-time data flows"],
    url: "https://elevatesecurity.com/",
    badge: "Platform",
  },
  {
    title: "Rent Around",
    summary:
      "A polished marketplace experience crafted for sellers, buyers, and influencers across multiple journeys.",
    highlight:
      "Delivered a conversion-focused product with tailored onboarding, commerce flows, and premium UX.",
    technologies: [
      "Next.js",
      "React",
      "PostgreSQL",
      "Stripe",
      "REST APIs",
      "Material UI",
      "Vercel",
    ],
    focus: ["Multi-role UX", "Marketplace flows", "Payments and onboarding"],
    url: "https://app.rentarround.com/",
    badge: "Marketplace",
  },
];

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated-subhan.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Microservices, and Web Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "United Kingdom, London, Manchester",
    locality: "Manchester",
    country: "UK",
    region: "England",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NWZeGq94Rqkx1f5k9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  heroHighlights,
  aboutProfile,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  experience,
  projectsHeader,
  portfolioProjects,
  contactPageData,
};
