export const service = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Development",
    desc: "Built and maintained scalable backend services using Node.js, Express, and MongoDB.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg", // you can update the image if needed
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const counters = [
  { value: 500, label: "Problems Solved", suffix: "+" },
  { value: 200, label: "Day Streak", suffix: "+" },
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
    description: "A responsive food delivery website with modern UI.",
    longDescription:
      "Architected and developed responsive food delivery website using React.js and advanced web technologies. Implemented core components including a navigation bar, multi-page layout, React Router setup, website header, menu items, food list, footer, and user authentication (Sign In/Sign Up), with responsive UI ensuring compatibility across all devices.",
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://euphonious-heliotrope-4bb0bc.netlify.app/",
    githubLink: "https://github.com/amitgupta7061/BiteRush",
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
];

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

export const frontendSkills: Skill[] = [
  { name: "HTML/CSS", percentage: 95, color: "from-orange-500 to-red-500" },
  { name: "JavaScript", percentage: 90, color: "from-yellow-400 to-amber-600" },
  { name: "TypeScript", percentage: 85, color: "from-blue-400 to-blue-600" },
  { name: "React.js", percentage: 90, color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", percentage: 88, color: "from-gray-700 to-gray-900" },
  { name: "Tailwind CSS", percentage: 92, color: "from-cyan-400 to-sky-500" },
];

export const backendSkills: Skill[] = [
  { name: "Node.js", percentage: 85, color: "from-green-500 to-emerald-600" },
  { name: "Express.js", percentage: 88, color: "from-gray-500 to-gray-700" },
  { name: "MongoDB", percentage: 80, color: "from-green-600 to-green-800" },
  { name: "MySQL", percentage: 82, color: "from-blue-600 to-indigo-800" },
  { name: "REST API", percentage: 85, color: "from-indigo-400 to-indigo-600" },
  { name: "Socket.IO", percentage: 75, color: "from-yellow-500 to-amber-600" },
];

export const otherSkills: Skill[] = [
  { name: "C++", percentage: 85, color: "from-blue-600 to-blue-800" },
  { name: "Java", percentage: 80, color: "from-red-600 to-red-800" },
  { name: "PHP", percentage: 70, color: "from-purple-500 to-purple-700" },
  { name: "Git/GitHub", percentage: 88, color: "from-gray-600 to-gray-800" },
  {
    name: "Data Structures",
    percentage: 90,
    color: "from-green-500 to-green-700",
  },
  { name: "Algorithms", percentage: 90, color: "from-orange-600 to-red-600" },
];
