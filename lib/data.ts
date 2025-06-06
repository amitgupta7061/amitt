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
];

interface Skill {
  name: string;
  percentage: number;
  color: string;
}
