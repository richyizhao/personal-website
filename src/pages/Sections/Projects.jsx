import SkillTag from "../Components/SkillTag";

import { Code, ExternalLink } from "react-feather";
import placeholderImage from "/project-images/no-image-placeholder.jpg";

import Figma from "/icons/Figma.svg"              // Project 1 Icons. Construction Tool Lender {Website}
import Tailwind from "/icons/Tailwind.svg";
import React from "/icons/React.svg";
import TypeScript from "/icons/TypeScript.svg";
import Node from "/icons/Node.svg";
import Express from "/icons/Express.svg";
import MySQL from "/icons/MySQL.svg";
import Auth0 from "/icons/Auth0.svg";
import Stripe from "/icons/Stripe.svg";
import Jest from "/icons/Jest.svg";
import PlayWright from "/icons/PlayWright.svg";
import Docker from "/icons/Docker.svg";
import AWS from "/icons/AWS.svg";

import ASPNET from "/icons/ASPNET.svg";           // Project 2 Icons. Stock Manager {Website}
import SQLServer from "/icons/SQLServer.svg";
import Azure from "/icons/Azure.svg";

import Expo from "/icons/Expo.svg";               // Project 3 Icons. Appliance Energy Scanner {App}
import Pytest from "/icons/Pytest.svg";
import FastAPI from "/icons/FastAPI.svg";
import Supabase from "/icons/Supabase.svg";
import PostgreSQL from "/icons/PostgreSQL.svg";
import PlayStore from "/icons/PlayStore.svg";
import AppStore from "/icons/AppStore.svg";

import Python from "/icons/Python.svg";         // Project 4 Icons. VGG Model Classifier For Rubbish {AI}
import Pytorch from "/icons/Pytorch.svg";
import GoogleColaboratory from "/icons/GoogleColaboratory.svg";

function Projects() {
  const projectsData = [
    {
      title: "Construction Tool Lender",
      description: "Can lend their tools to others to earn money.",
      technologies: [
        { name: "Figma", icon: Figma, textColor: "text-green-500", backgroundColor: "bg-green-500 bg-opacity-30" },
        { name: "Tailwind", icon: Tailwind, textColor: "text-sky-500", backgroundColor: "bg-sky-500 bg-opacity-30" },
        { name: "React.js", icon: React, textColor: "text-sky-500", backgroundColor: "bg-sky-500 bg-opacity-30" },
        { name: "TypeScript.js", icon: TypeScript, textColor: "text-blue-500", backgroundColor: "bg-blue-500 bg-opacity-30" },
        { name: "Node.js", icon: Node, textColor: "text-green-500", backgroundColor: "bg-green-500 bg-opacity-30" },
        { name: "Express.js", icon: Express, textColor: "text-indigo-500", backgroundColor: "bg-indigo-500 bg-opacity-30"},
        { name: "MySQL", icon: MySQL, textColor: "text-yellow-500", backgroundColor: "bg-yellow-500 bg-opacity-30"},
        { name: "Auth0", icon: Auth0, textColor: "text-indigo-500", backgroundColor: "bg-indigo-500 bg-opacity-30"},
        { name: "Stripe", icon: Stripe, textColor: "text-indigo-500", backgroundColor: "bg-indigo-500 bg-opacity-30"},
        { name: "Jest", icon: Jest, textColor: "text-red-500", backgroundColor: "bg-red-500 bg-opacity-30"},
        { name: "PlayWright", icon: PlayWright, textColor: "text-green-500", backgroundColor: "bg-green-500 bg-opacity-30"},
        { name: "Docker", icon: Docker, textColor: "text-blue-500", backgroundColor: "bg-blue-500 bg-opacity-30" },
        { name: "AWS", icon: AWS, textColor: "text-yellow-500", backgroundColor: "bg-yellow-500 bg-opacity-30" },
      ],
      image: placeholderImage,
      codeLink: "https://github.com/richyizhao",
      demoLink: "https://www.youtube.com/",
    },
    {
      title: "Stock Manager",
      description: "Helps workers to manage storage inventory.",
      technologies: [
        { name: "Figma", icon: Figma, textColor: "text-green-500", backgroundColor: "bg-green-500 bg-opacity-30" },
        { name: "Tailwind", icon: Tailwind, textColor: "text-sky-500", backgroundColor: "bg-sky-500 bg-opacity-30" },
        { name: "React.js", icon: React, textColor: "text-sky-500", backgroundColor: "bg-sky-500 bg-opacity-30" },
        { name: "TypeScript.js", icon: TypeScript, textColor: "text-blue-500", backgroundColor: "bg-blue-500 bg-opacity-30" },
        { name: "ASP.NET", icon: ASPNET, textColor: "text-blue-500", backgroundColor: "bg-blue-500 bg-opacity-30" },
        { name: "SQL Server", icon: SQLServer, textColor: "text-red-500", backgroundColor: "bg-red-500 bg-opacity-30" },
        { name: "Jest", icon: Jest, textColor: "text-red-500", backgroundColor: "bg-red-500 bg-opacity-30"},
        { name: "PlayWright", icon: PlayWright, textColor: "text-green-500", backgroundColor: "bg-green-500 bg-opacity-30"},
        { name: "Docker", icon: Docker, textColor: "text-blue-500", backgroundColor: "bg-blue-500 bg-opacity-30" },
        { name: "Azure", icon: Azure, textColor: "text-blue-500", backgroundColor: "bg-blue-500 bg-opacity-30" },
      ],
      image: placeholderImage,
      codeLink: "https://github.com/richyizhao",
      demoLink: "https://www.youtube.com/",
    },
    {
      title: "Appliance Energy Scanner",
      description: "Batch scan images for solar energy needs.",
      technologies: [
        { name: "Figma", icon: Figma, textColor: "text-green-500", backgroundColor: "bg-green-500 bg-opacity-30" },
        { name: "React Native", icon: React, textColor: "text-sky-500", backgroundColor: "bg-sky-500 bg-opacity-30" },
        { name: "TypeScript.js", icon: TypeScript, textColor: "text-blue-500", backgroundColor: "bg-blue-500 bg-opacity-30" },
        { name: "Expo", icon: Expo, textColor: "text-indigo-500", backgroundColor: "bg-indigo-500 bg-opacity-30" },
        { name: "FastAPI", icon: FastAPI, textColor: "text-green-500", backgroundColor: "bg-green-500 bg-opacity-30"},
        { name: "Supabase", icon: Supabase, textColor: "text-green-500", backgroundColor: "bg-green-500 bg-opacity-30"},
        { name: "PostgreSQL", icon: PostgreSQL, textColor: "text-blue-500", backgroundColor: "bg-blue-500 bg-opacity-30"},
        { name: "Jest", icon: Jest, textColor: "text-red-500", backgroundColor: "bg-red-500 bg-opacity-30"},
        { name: "Pytest", icon: Pytest, textColor: "text-yellow-500", backgroundColor: "bg-yellow-500 bg-opacity-30"},
        { name: "PlayStore", icon: PlayStore, textColor: "text-yellow-500", backgroundColor: "bg-yellow-500 bg-opacity-30"},
        { name: "AppStore", icon: AppStore, textColor: "text-sky-500", backgroundColor: "bg-sky-500 bg-opacity-30"},

      ],
      image: placeholderImage,
      codeLink: "https://github.com/richyizhao",
      demoLink: "https://www.youtube.com/",
    },
    {
      title: "VGG Model Rubbish Classifier",
      description: "Batch scan images for rubbish classification.",
      technologies: [
        { name: "Python", icon: Python, textColor: "text-yellow-500", backgroundColor: "bg-yellow-500 bg-opacity-30" },
        { name: "Pytorch", icon: Pytorch, textColor: "text-red-500", backgroundColor: "bg-red-500 bg-opacity-30" },
        { name: "GoogleColaboratory", icon: GoogleColaboratory, textColor: "text-yellow-500", backgroundColor: "bg-yellow-500 bg-opacity-30" },
      ],
      image: placeholderImage,
      codeLink: "https://github.com/richyizhao",
      demoLink: "https://www.youtube.com/",
    },
  ];

  return (
    <section id="projects">
      <h2 className="section__title">PROJECTS</h2>
      <div className="projects__card__containers">
        {projectsData.map((projectCategory) => (
          <div className="projects__card" key={projectCategory.title}>
            <div className="projects__card__info">
              <h3>{projectCategory.title}</h3>
              <p>{projectCategory.description}</p>
              <div className="technologies__container">
                {projectCategory.technologies.map((tech) => (
                  <SkillTag
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    textColor={tech.textColor}
                    backgroundColor={tech.backgroundColor}
                  />
                ))}
              </div>
            </div>
            <div className="projects__card__img">
              <img src={projectCategory.image} alt="placeholder image" />
              <div className="projects__card__img__links">
                <a href={projectCategory.codeLink} target="_blank">
                  <span>Code</span>
                  <Code />
                </a>
                <a href={projectCategory.demoLink} target="_blank">
                  <span>Demo</span>
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;