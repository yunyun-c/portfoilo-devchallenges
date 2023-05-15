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
      "Self-motivated developer, who is willing to learn and create outstanding UI applications. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ",
  };

  // Hobbies data
  const hobbiesData = [
    {
      id: 1,
      picture: "./img/cooking.jpg",
      title: "Cooking",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dignissimos.",
    },
    {
      id: 2,
      picture: "./img/biking.jpg",
      title: "Biking",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dignissimos.",
    },
    {
      id: 3,
      picture: "./img/cities.jpg",
      title: "Explore cities",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dignissimos.",
    },
  ];

  // Skills data
  const skillsData = [
    { name: "HTML", icon: "fa-brands fa-html5" },
    { name: "CSS", icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "node.js", icon: "fa-brands fa-node" },
    { name: "react.js", icon: "fa-brands fa-react" },
    { name: "sass", icon: "fa-brands fa-sass" },
  ];

  // Projects data
  const projectsData = [
    {
      id: 1,
      picture: "./img/p1.png",
      skills: "#HTML  #CSS  #responsive",
      title: "My Gallery",
      description:
        "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with instagram profile page. The design is from devchallenge.io",
      demoLink: "https://my-gallery-project-devchallenge.netlify.app/",
      githubLink: "https://github.com/yunyun-c/my-gallery",
    },
    {
      id: 2,
      picture: "./img/p2.png",
      skills: "#HTML  #CSS  #responsive",
      title: "Edie homepage",
      description:
        "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with instagram profile page. The design is from devchallenge.io",
      demoLink: "https://edie-homepage-from-devchallenges.netlify.app/",
      githubLink: "https://github.com/yunyun-c/edie-homepage",
    },
    {
      id: 3,
      picture: "./img/p3.png",
      skills: "#HTML  #CSS  #responsive",
      title: "Checkout Page",
      description:
        "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with instagram profile page. The design is from devchallenge.io",
      demoLink: "https://checkout-page-project.netlify.app/",
      githubLink: "https://github.com/yunyun-c/checkout-page",
    },
  ];

  // Experiences data
  const experiencesData = [
    {
      id: 1,
      companyLogo: "./img/company1.jpg",
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
      companyLogo: "./img/company2.jpg",
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
      title: "How to organize your CSS",
      picture: "./img/blog.jpg",
      content:
        "In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      blogLink: "https://github.com/yunyun-c",
    },
    {
      id: 2,
      title: "How to manage your time effectively",
      picture: "./img/cities.jpg",
      content:
        "In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      blogLink: "https://github.com/yunyun-c",
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
