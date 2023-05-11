import React from "react";
import PersonalDetails from "./PersonalDetails";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Blogs from "./Blogs";

const App = () => {
  // Personal details data
  const personalDetailsData = {
    myAvatar: "./img/avatar.jpg",
    name: "Cassie",
    jobTitle: "Front-end Developer",
    email: "cassie@example.com",
    phone: "123-456-7890",
    selfIntro:
      "I am a passionate developer with experience in front-end technologies.",
  };

  // Hobbies data
  const hobbiesData = [
    {
      id: 1,
      picture: "img/cooking.jpg",
      title: "Cooking",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dignissimos.",
    },
    {
      id: 2,
      picture: "img/biking.jpg",
      title: "Biking",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dignissimos.",
    },
    {
      id: 3,
      picture: "/img/cities.jpg",
      title: "Explore cities",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dignissimos.",
    },
  ];

  // Skills data
  const skillsData = [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "javascript" },
  ];

  // Projects data
  const projectsData = [
    {
      id: 1,
      picture: "/img/p1.jpg",
      skills: "#HTML  #CSS  #responsive",
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      demoLink: "https://github.com/project1",
      githubLink: "https://github.com/project1",
    },
    {
      id: 2,
      picture: "/img/p2.jpg",
      skills: "#HTML  #CSS  #responsive",
      title: "Project 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      demoLink: "https://github.com/project1",
      githubLink: "https://github.com/project2",
    },
    {
      id: 3,
      picture: "/img/p3.jpg",
      skills: "#HTML  #CSS  #responsive",
      title: "Project 3",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      demoLink: "https://github.com/project1",
      githubLink: "https://github.com/project2",
    },
  ];

  // Experiences data
  const experiencesData = [
    {
      id: 1,
      companyLogo: "company 1",
      date: "Feb 2017 - Current",
      companyName: "companyName 1",
      jobTitle: "front-end developer",
      workDetails: [
        {
          id: 1,
          detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit....",
        },
        {
          id: 2,
          detail:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          detail:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
        },
      ],
    },
    {
      id: 2,
      companyLogo: "company 2",
      date: "Aug 2016 - Feb 2018",
      companyName: "companyName 2",
      jobTitle: "front-end developer",
      workDetails: [
        {
          id: 1,
          detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit....",
        },
        {
          id: 2,
          detail:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          detail:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
        },
      ],
    },
  ];

  // Blogs data
  const blogsData = [
    {
      id: 1,
      title: "Blog Title 1",
      picture: "./img/blog.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit....",
      blogLink: "#",
    },
    {
      id: 2,
      title: "Blog Title 2",
      picture: "./img/cities.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit....",
      blogLink: "#",
    },
  ];

  return (
    <div className="App">
      <PersonalDetails {...personalDetailsData} />
      <Skills skills={skillsData} />
      <Hobbies hobbies={hobbiesData} />
      <Projects projects={projectsData} />
      <Experiences experiences={experiencesData} />
      <Blogs blogs={blogsData} />
    </div>
  );
};

export default App;
