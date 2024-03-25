import codekazeimg from "../assets/CodeKaze.png";
import HackerRank from "../assets/hackerrank.png";
import leetcode50 from "../assets/leetcode50.png";
import udhbav2022 from "../assets/udhbav2022.png";

//live

import employee from "../assets/livewebsites/employee.png"
import foodtruckdemo from "../assets/livewebsites/foodtruckdemo.png"
import matching from "../assets/livewebsites/matching.png";

//project
import Detecting from "../assets/projectsimg/Detecting.png";
import Job from "../assets/projectsimg/job.png";
import Social from "../assets/projectsimg/soc.jpg";
import Todo from "../assets/projectsimg/todo.png";
import Workout from "../assets/projectsimg/workout.png";

//logo
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";
import { FaReact, FaNode } from "react-icons/fa";
import {
  SiExpress,
  SiChakraui,
  SiPostgresql,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";

export const achv = [
  {
    id: 0,
    name: "Codekaze",
    img: codekazeimg,
    description:
      "Competed in codekaze event conducted by coding ninjas, Cleared 1stand 2nd round, Got Cash reward for 3rd rank in my college in 2022, Got 1 st rank in my college in 2023 and got respective reward (Criteria: college wise merit list)",
    link: "",
    col: "orange.100",
  },
  {
    id: 1,
    name: "LeetCode",
    img: leetcode50,
    description: "Got 50days badge in leetcode which shows my consistency.",
    link: "https://leetcode.com/J_Abhiram_reddy/",
    col: "gray.900",
  },
  {
    id: 2,
    name: "HackerRank",
    img: HackerRank,
    description:
      "Hackerrank-5 star(gold) in (30 days of code,Java) and 3 star (silver) in (problem solving),certified in basic java and SQL.",
    link: "https://www.hackerrank.com/profile/jabhiramrrun3",
    col: "yellow.400",
  },
  {
    id: 3,
    name: "Technical fest",
    img: udhbav2022,
    description:
      "Organised an event at the Techfest. This event helped me improve my team management skills, communication skills, and various other skills.",
    link: "",
    col: "blue.900",
  },
];

export const logo = [
  FaJava,
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  FaReact,
  FaNode,
  SiExpress,
  SiChakraui,
  SiPostgresql,
  SiVisualstudiocode,
  SiPostman,
];

export const Aprojects = [
  {
    name: "Greater Community Complaint Management System ",
    img: Social,
    skills: "HTML, CSS, JavaScript, Bootstrap, PHP, MySQL.",
    description:
      "It is a web application were residencies of a community can register their complaints with the help of the flat no. The head of the community have access to the complaints they resolve them with the help of respectivedepartmentand update the status of the complaints so that the residencies can see whether they seen, resolved their complaints.",
  },
  {
    name: "Detecting Harmful URL's using Machine Learning",
    img: Detecting,
    skills:
      "Machine Learning, Django framework, Python, Python libraries, MySQL",
    description:
      "It is a web application where user can register and login to the website and they can check whether the URL isMalicious or Legitimate with accuracy. As part of the project, I have also published a paper, title: Detecting Harmful URL's using Machine Learning.",
  },
  {
    name: "Job-Job seekers interface (web browser)",
    img: Job,
    skills: "HTML, CSS, JavaScript, Bootstrap, PHP, MySQL.",
    description:
      "Developed Job-Job seeker website which can be used by recruiters and students who want to search for jobs. Here recruiter post their job details and students can apply for jobs which there are capable of and users can see the competition for the jobs.",
  },
  {
    name: "Workout List",
    img: Workout,
    skills: "React.js, Node.js, Express.js, PostgreSQL.",
    description:
      "It is a user-friendly website where a gym or workout buddies can list the workout (like workout name and repetitions, loads that they want to lift) and can be updated by users.",
  },
  {
    name: "TODO list Operation",
    img: Todo,
    skills: "React.js, Node.js, Express.js, PostgreSQL, Rest API, Bootstrap.",
    description:
      "CRUD operation using all the technologies mentioned above. It has all the function like creating, editing and deleting the list we desire.",
  },
];

export const liveWebsite = [
  {
    name: "Food Truck Blog",
    img: foodtruckdemo,
    Link: "https://foodtruckdemo.netlify.app",
    github: "https://github.com/ABHIRAM41/FoodBlogWebsite",
  },
  {
    name: "Memory game",
    img: matching,
    Link: "https://6memory-game.netlify.app",
    github: "https://github.com/ABHIRAM41/Memory-game",
  },
  {
    name: "Employee log",
    img: employee,
    Link: "https://employee-log.netlify.app",
    github: "https://github.com/ABHIRAM41/EmployeeLog-FrontEnd-",
  },
];
