export const service = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "Designing and developing visually appealing, user-friendly web interfaces tailored to client needs.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Development",
    desc: "Providing secure, efficient, and scalable server-side solutions to support application functionality.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];


export const counters = [
  { value: 650, label: "Problems Solved", suffix: "+" },
  { value: 280, label: "Day Streak", suffix: "+" },
  { value: 1908, label: "Contest Rating", suffix: "" },
  { value: 10, label: "Top Percentile", suffix: "%" },
];

interface ProjectType {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  demoLink: string;
  githubLink: string;
  tags: string[];
  date: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Real-Time Chat Application",
    description:
      "A modern chat application with real-time messaging capabilities.",
    longDescription:
      "Developed a real-time chat app with Socket.io & JWT for instant messaging, secure authentication, and authorization. Integrated online user status, efficient global state management with Zustand, a modern and responsive UI using TailwindCSS & DaisyUI, robust client-server error handling, and seamless public deployment.",
    image:
      "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://realtime-chat-app-d3sw.onrender.com/",
    githubLink: "https://github.com/amitgupta7061/Realtime-Chat-App",
    tags: [
      "React.js",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "JWT",
      "TailwindCSS",
      "DaisyUI",
      "Zustand",
    ],
    date: "Jan 2025",
  },
  {
    id: 2,
    title: "Doctor Appointment Booking System",
    description:
      "A full-stack MERN application for booking medical appointments.",
    longDescription:
      "The Doctor Appointment Booking System is a full-stack web application. This system enables patients to book appointments with doctors, while doctors and admins can manage schedules and profiles. It features three levels of authentication—Patients, Doctors, and Admins. Additionally, integrates an online payment gateway for transactions.",
    image:
      "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://prescripto-eh9m.onrender.com/",
    githubLink: "https://github.com/amitgupta7061/prescripto",
    tags: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Multer",
    ],
    date: "Oct 2024",
  },
  {
    id: 3,
    title: "BiteRush",
    description: "A Full stack responsive food delivery website with modern UI.",
    longDescription:
      "Architected and developed responsive food delivery website using React.js and advanced web technologies. Implemented core components including a navigation bar, multi-page layout, React Router setup, website header, menu items, food list, footer, and user authentication (Sign In/Sign Up), with responsive UI ensuring compatibility across all devices.",
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://biterush-e5jv.onrender.com/",
    githubLink: "https://github.com/amitgupta7061/Food-App",
    tags: [
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "React Router",
      "PHP",
      "MySQL",
    ],
    date: "June 2024",
  },
  {
    id: 4,
    title: "AI Based Learning Platform",
    description:
      "Full-stack platform offering AI-personalized courses, secure access, and interactive video learning.",
    longDescription:
      "Designed and developed a full-stack AI-powered e-learning platform that delivers personalized course content and learning experiences. The platform features secure user authentication via Clerk, premium subscription handling through Stripe, and AI-driven content generation for tailored lessons. Key features include interactive video learning via YouTube API, real-time student progress tracking, and dynamic dashboards for a seamless educational journey.",
    image:
      "https://cdn.leverageedu.com/blog/wp-content/uploads/2020/03/24185535/Online-Learning.png",
    demoLink: "https://online-learning-omega.vercel.app/",
    githubLink: "https://github.com/amitgupta7061/online-learning",
    tags: [
      "Next.js", "React.js", "Tailwind CSS", "Typescript", "Prisma ORM", "PostgreSQL", "Clerk", "Stripe", "OpenAI API"
    ],
    date: "Apr 2025",
  },
  {
    id: 5,
    title: "Document Analyzer",
    description:
      "AI-powered platform to analyze, summarize, and chat with documents.",
    longDescription:
      "Developed a full-stack document analysis platform using Next.js and Gemini API to enable intelligent summarization, question answering, and contextual understanding of uploaded documents. Integrated JWT-based authentication, modern UI components with TailwindCSS and ShadCN, and state management using Zustand. Features include document upload, parsing, semantic interaction, and a responsive user dashboard.",
    image:
      "https://th.bing.com/th/id/OIP.2BG60_JTC3DwpJB4VyGogQHaEc?rs=1&pid=ImgDetMain",
    demoLink: "https://docuq.vercel.app/",
    githubLink: "https://github.com/amitgupta7061/Docuq",
    tags: [
      "Next.js",
      "React.js",
      "Node.js",
      "Gemini API",
      "PostgreSQL",
      "JWT",
      "TailwindCSS",
      "ShadCN",
      "Zustand"
    ],
    date: "May 2025"
  },
  {
    id: 6,
    title: "GrooveStream Music App",
    description:
      "Modern music streaming app with playlist, search, and playback features.",
    longDescription:
      "Built a responsive and feature-rich music streaming application using React.js. Users can search songs, create playlists, and enjoy seamless audio playback with real-time player controls. Integrated third-party music APIs for dynamic content, managed state efficiently with Zustand, and styled the UI with TailwindCSS and ShadCN for a clean and modern experience.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/0681be113301571.6024efc1a4d55.png",
    demoLink: "https://amitt.vercel.app",
    githubLink: "https://github.com/amitgupta7061/Spotify-clone",
    tags: [
      "React.js",
      "TailwindCSS",
      "ShadCN",
      "Zustand",
      "Music API",
      "Audio Player",
      "PostgreSQL",
      "Clerk",
      "Prisma"
    ],
    date: "Feb 2025"
  }
];

interface Skill {
  name: string;
  percentage: number;
  color: string;
}
