// This file contains local data to replace Firebase functionality

// Sample projects data
export const projects = [
  {
    id: "1",
    Title: "Autonomous Robot Simulation with Isaac Sim",
    Description: "A comprehensive framework for developing autonomous robotic systems using NVIDIA's Isaac Sim. This project implements agile development methodologies for robotics, featuring navigation, perception, manipulation, and human-robot interaction capabilities in simulated environments.",
    Img: "/project-images/IsaacSim.png",
    TechStack: ["Isaac Sim", "ROS2", "Python", "URDF", "State Machines"],
    Link: "https://github.com/pallaviaithalnarayan/Agile-development-AST/blob/main/IsaacSim/robile_isaacSim.mp4",
    Github: "https://github.com/pallaviaithalnarayan/Agile-development-AST.git",
    Features: ["Simulation Environment", "Robot Navigation", "Object Manipulation", "Obstacle Avoidance", "Human-Robot Interaction", "Task Assignment"]
  },
  {
    id: "2",
    Title: "Direct Base Controller",
    Description: "A ROS2-based controller that enables a youbot to move towards a target pose by synchronizing linear and angular velocities. Includes obstacle detection and node lifecycle implementation.",
    Img: "/project-images/Youbot.png",
    TechStack: ["C++", "ROS2", "Gazebo", "Python"],
    Link: "https://github.com/HBRS-SDP/ws23-direct-base-controller",
    Github: "https://github.com/HBRS-SDP/ws23-direct-base-controller",
    Features: ["Node Lifecycle", "Dynamic Variable Configuration", "Synchronized Motion", "Obstacle Detection"]
  },
  {
    id: "3",
    Title: "Bolt Detection and Tool Selection System",
    Description: "A computer vision application that detects bolts in images and suggests appropriate tools for maintenance. The system runs on mobile phones, making it portable for field use.",
    Img: "/project-images/bolt.jpg",
    TechStack: ["Python", "OpenCV", "Machine Learning", "Mobile Development"],
    Link: "https://github.com/Arnold-Dsouza/Bolt_detection_and_tool_selection_system_using_phone.git",
    Github: "https://github.com/Arnold-Dsouza/Bolt_detection_and_tool_selection_system_using_phone.git",
    Features: ["Bolt detection", "Tool recommendation", "Mobile compatibility", "Image processing"]
  },
  {
    id: "4",
    Title: "Behavior Trees for Autonomous Navigation",
    Description: "Implementation of behavior trees for autonomous mobile robot navigation using ROS. The project enables robust decision-making and task execution for robots in dynamic environments.",
    Img: "/project-images/robile.jpg",
    TechStack: ["ROS", "C++", "Python", "Behavior Trees"],
    Link: "https://github.com/HBRS-AMR/ss23_assignment_behavior_trees-3",
    Github: "https://github.com/HBRS-AMR/ss23_assignment_behavior_trees-3",
    Features: ["Autonomous Navigation", "Dynamic Obstacle Avoidance", "Task Sequencing", "Fallback Behaviors"]
  },
  {
    id: "5",
    Title: "Studentenwohnheim Virtual Agent",
    Description: "A virtual agent inspired by the Pepper robot, designed to assist students in finding accommodation using face recognition and conversational AI. The system remembers users by their faces and provides personalized housing search assistance.",
    Img: "/project-images/HCIR.png",
    TechStack: ["Python", "Rasa", "OpenCV", "Face Recognition"],
    Link: "https://github.com/Arnold-Dsouza/Human-centered-interaction-in-robotics",
    Github: "https://github.com/Arnold-Dsouza/Human-centered-interaction-in-robotics",
    Features: ["Face Recognition", "Personalized Interaction", "Accommodation Search", "Conversational AI"]
  },
  {
    id: "6",
    Title: "WebCrafter",
    Description: "An AI-powered web development tool that generates HTML, CSS, and JavaScript code from natural language descriptions. Perfect for quickly prototyping web components or learning web development.",
    Img: "/project-images/Webcrafter.png",
    TechStack: ["React", "TypeScript", "Tailwind CSS", "Firebase", "AI Integration"],
    Link: "https://web-crafter-arnold-dsouzas-projects.vercel.app/",
    Github: "https://github.com/Arnold-Dsouza/WebCrafter.git",
    Features: ["AI-Powered Code Generation", "Multi-Language Output", "Instant Preview", "Download Options", "Dark/Light Theme", "Mobile Responsive"]
  },
  {
    id: "7",
    Title: "Personal Portfolio",
    Description: "A responsive personal portfolio website showcasing skills, projects, and contact information.",
    Img: "/project-images/portfolio.jpg",
    TechStack: ["React", "TailwindCSS", "Vite"],
    Link: "https://ekizr.github.io",
    Github: "https://github.com/EkiZR/portfolio",
    Features: ["Responsive design", "Dark mode", "Contact form"]
  }
];

// Sample certificates data
export const certificates = [
    {
    id: "1",
    Title: "Bolt tool Project",
    Img: "/certificate-images/bolt.jpg",
    Issuer: "Web Development Institute",
    Date: "December 2023",
    Link: "https://example.com/certificate/advanced-development"
  },
  {
    id: "2",
    Title: "Python Programming Certification",
    Img: "/certificate-images/python.jpg",
    Issuer: "Python Institute",
    Date: "July 2023",
    Link: "https://example.com/certificate/python"
  },
  {
    id: "3",
    Title: "Research Certification",
    Img: "/certificate-images/Research.jpg",
    Issuer: "Research Institute",
    Date: "August 2023",
    Link: "https://example.com/certificate/research"
  },
  {
    id: "4",
    Title: "Face Recognition Technology",
    Img: "/certificate-images/Face.png",
    Issuer: "AI Institute",
    Date: "September 2023",
    Link: "https://example.com/certificate/face-recognition"
  },
  {
    id: "5",
    Title: "IIT Advanced Programming",
    Img: "/certificate-images/iit.jpg",
    Issuer: "IIT",
    Date: "October 2023",
    Link: "https://example.com/certificate/iit-programming"
  },
  {
    id: "6",
    Title: "Taj Project Certification",
    Img: "/certificate-images/taj.jpg",
    Issuer: "Heritage Institute",
    Date: "November 2023",
    Link: "https://example.com/certificate/taj-project"
  }
];

// Helper functions to mimic Firebase functionality
export const getProjects = () => {
  return Promise.resolve(projects);
};

export const getCertificates = () => {
  return Promise.resolve(certificates);
};

// Local storage helpers
export const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key, defaultValue = []) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};