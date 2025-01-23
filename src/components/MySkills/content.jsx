import { FaHtml5, FaGolang, FaJs, FaPhp } from "react-icons/fa6";
import {
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiLinux,
  SiGit,
  SiRabbitmq,
  SiApachekafka,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiReact,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiLaravel,
} from "react-icons/si";

const data = [
  {
    tag: "Backend Development",
    skills: [
      {
        name: "Go",
        icon: <FaGolang />,
        color: "bg-sky-400",
      },
      {
        name: "TYPESCRIPT",
        icon: <SiTypescript />,
        color: "bg-sky-700",
      },
      {
        name: "EXPRESSJS",
        icon: <SiExpress />,
        color: "bg-gray-600",
      },
      {
        name: "NESTJS",
        icon: <SiNestjs />,
        color: "bg-red-600",
      },
      {
        name: "NODE.JS",
        icon: <SiNodedotjs />,
        color: "bg-green-500",
      },
      {
        name: "PHP",
        icon: <FaPhp />,
        color: "bg-violet-300",
      },
      {
        name: "LARAVEL",
        icon: <SiLaravel />,
        color: "bg-red-600",
      },
    ],
  },
  {
    tag: "Front End Development",
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        color: "bg-orange-400",
      },
      {
        name: "CSS3",
        icon: <SiCss3 />,
        color: "bg-sky-400",
      },
      {
        name: "BOOTSTRAP",
        icon: <SiBootstrap />,
        color: "bg-violet-400",
      },
      {
        name: "TAILWINDCSS",
        icon: <SiTailwindcss />,
        color: "bg-teal-400",
      },
      {
        name: "JAVASCRIPT",
        icon: <FaJs />,
        color: "bg-yellow-300",
      },
      {
        name: "REACTJS",
        icon: <SiReact />,
        color: "bg-blue-900",
      },
    ],
  },
  {
    tag: "Database Management",
    skills: [
      {
        name: "MYSQL",
        icon: <SiMysql />,
        color: "bg-black",
      },
      {
        name: "POSTGRESQL",
        icon: <SiPostgresql />,
        color: "bg-sky-900",
      },
      {
        name: "MONGODB",
        icon: <SiMongodb />,
        color: "bg-green-600",
      },
      {
        name: "REDIS",
        icon: <SiRedis />,
        color: "bg-red-800",
      },
    ],
  },
  {
    tag: "Tools And Technologies",
    skills: [
      {
        name: "LINUX",
        icon: <SiLinux />,
        color: "bg-yellow-400",
      },
      {
        name: "GIT",
        icon: <SiGit />,
        color: "bg-orange-500",
      },
      {
        name: "RABBITMQ",
        icon: <SiRabbitmq />,
        color: "bg-orange-600",
      },
      {
        name: "APACHE KAFKA",
        icon: <SiApachekafka />,
        color: "bg-black",
      },
      {
        name: "DOCKER",
        icon: <SiDocker />,
        color: "bg-blue-500",
      },
      {
        name: "K8s",
        icon: <SiKubernetes />,
        color: "bg-blue-400",
      },
    ],
  },
];

export default data;
