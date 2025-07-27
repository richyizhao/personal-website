import SkillTag from "../Components/SkillTag";

import Figma from "/icons/Figma.svg";             // Skill 1 icons. Frontend & Design
import Html from "/icons/HTML.svg";
import Css from "/icons/CSS.svg";
import Tailwind from "/icons/Tailwind.svg";
import JavaScript from "/icons/JavaScript.svg";
import React from "/icons/React.svg";
import TypeScript from "/icons/TypeScript.svg";
import Expo from "/icons/Expo.svg";

import Node from "/icons/Node.svg";               // Skill 2 icons. Backend & Database
import Express from "/icons/Express.svg";
import ASPNET from "/icons/ASPNET.svg";
import FastAPI from "/icons/FastAPI.svg";
import Supabase from "/icons/Supabase.svg";
import MySQL from "/icons/MySQL.svg";
import SQLServer from "/icons/SQLServer.svg";
import PostgreSQL from "/icons/PostgreSQL.svg";
import Auth0 from "/icons/Auth0.svg";
import Stripe from "/icons/Stripe.svg";

import Jest from "/icons/Jest.svg";               // Skill 3 icons. DevOps & Hosting
import PlayWright from "/icons/PlayWright.svg";
import Pytest from "/icons/Pytest.svg";
import Docker from "/icons/Docker.svg";
import AWS from "/icons/AWS.svg";
import Azure from "/icons/Azure.svg";
import PlayStore from "/icons/PlayStore.svg";
import AppStore from "/icons/AppStore.svg";

import Python from "/icons/Python.svg";           // Skill 4 icons. AI & Miscellaneous
import Pytorch from "/icons/Pytorch.svg";
import GoogleColaboratory from "/icons/GoogleColaboratory.svg";
import VScode from "/icons/VScode.svg";
import VStudio from "/icons/VStudio.svg";
import Git from "/icons/Git.svg";
import Postman from "/icons/Postman.svg";

function Skills() {
  const skillsData = [
    {
      title: "Frontend & Design",
      description: "I have crafted responsive designs for web & mobile applications to enhance user interactivity and improve the overall user experience.",
      technologies: [
        { name: "Figma", icon: Figma, textColor: "text-green-500", backgroundColor: "bg-green-500 bg-opacity-30" },
        { name: "Tailwind", icon: Tailwind, textColor: "text-sky-500", backgroundColor: "bg-sky-500 bg-opacity-30" },
        { name: "React.js", icon: React, textColor: "text-sky-500", backgroundColor: "bg-sky-500 bg-opacity-30" },
        /*
        { name: "React Native", icon: React, textColor: "text-sky-500", backgroundColor: "bg-sky-500 bg-opacity-30" },
        */
        { name: "TypeScript.js", icon: TypeScript, textColor: "text-blue-500", backgroundColor: "bg-blue-500 bg-opacity-30" },
        /*
        { name: "Expo", icon: Expo, textColor: "text-indigo-500", backgroundColor: "bg-indigo-500 bg-opacity-30" },
        */
      ],
    },
    {
      title: "Backend & Database",
      description: "I have utilized secure user authentication authorization system. And constructed numerous APIs for scalable web & mobile applications.",
      technologies: [
        /*
        { name: "Node.js", icon: Node, textColor: "text-green-500", backgroundColor: "bg-green-500 bg-opacity-30" },
        { name: "Express.js", icon: Express, textColor: "text-indigo-500", backgroundColor: "bg-indigo-500 bg-opacity-30" },
        { name: "ASP.NET", icon: ASPNET, textColor: "text-blue-500", backgroundColor: "bg-blue-500 bg-opacity-30" },
        { name: "FastAPI", icon: FastAPI, textColor: "text-green-500", backgroundColor: "bg-green-500 bg-opacity-30" },
        { name: "Supabase", icon: Supabase, textColor: "text-green-500", backgroundColor: "bg-green-500 bg-opacity-30" },
        { name: "MySQL", icon: MySQL, textColor: "text-yellow-500", backgroundColor: "bg-yellow-500 bg-opacity-30" },
        { name: "SQL Server", icon: SQLServer, textColor: "text-red-500", backgroundColor: "bg-red-500 bg-opacity-30" },
        { name: "PostgreSQL", icon: PostgreSQL, textColor: "text-blue-500", backgroundColor: "bg-blue-500 bg-opacity-30" },
        { name: "Auth0", icon: Auth0, textColor: "text-orange-500", backgroundColor: "bg-orange-500 bg-opacity-30" },
        { name: "Stripe", icon: Stripe, textColor: "text-indigo-500", backgroundColor: "bg-indigo-500 bg-opacity-30" },
        */
      ],
    },
    {
      title: "DevOps & Hosting",
      description: "I have experience in unit testing, intergration testing, end to end testing. And leveraged many cloud solutions for web & mobile applications.",
      technologies: [
        { name: "Jest", icon: Jest, textColor: "text-red-500", backgroundColor: "bg-red-500 bg-opacity-30" },
        { name: "PlayWright", icon: PlayWright, textColor: "text-green-500", backgroundColor: "bg-green-500 bg-opacity-30" },
        /*
        { name: "Pytest", icon: Pytest, textColor: "text-yellow-500", backgroundColor: "bg-yellow-500 bg-opacity-30" },
        { name: "Docker", icon: Docker, textColor: "text-sky-500", backgroundColor: "bg-sky-500 bg-opacity-30" },
        { name: "AWS", icon: AWS, textColor: "text-yellow-500", backgroundColor: "bg-yellow-500 bg-opacity-30" },
        { name: "Azure", icon: Azure, textColor: "text-sky-500", backgroundColor: "bg-sky-500 bg-opacity-30" },
        */
      ],
    },
    {
      title: "AI & Miscellaneous",
      description: "I have worked with AI models for web applications. And have developed deep machine learning models.",
      technologies: [
        { name: "Google Colaboratory", icon: GoogleColaboratory, textColor: "text-orange-500", backgroundColor: "bg-orange-500 bg-opacity-30" },
        { name: "Python", icon: Python, textColor: "text-yellow-500", backgroundColor: "bg-yellow-500 bg-opacity-30" },
        { name: "Pytorch", icon: Pytorch, textColor: "text-red-500", backgroundColor: "bg-red-500 bg-opacity-30" },
        { name: "VS Code", icon: VScode, textColor: "text-sky-500", backgroundColor: "bg-sky-500 bg-opacity-30" },
        /*
        { name: "Visual Studio", icon: VStudio, textColor: "text-indigo-500", backgroundColor: "bg-indigo-500 bg-opacity-30" },
        */
      ],
    },
  ];
  
  return (
    <section id="skills">
      <h2 className="section__title">SKILLS</h2>
      <div className="skills__card__containers">
        {skillsData.map((skillCategory) => (
          <div className="skills__card" key={skillCategory.title}>
            <h3>{skillCategory.title}</h3>
            <p>{skillCategory.description}</p>
            <div className="technologies__container">
              {skillCategory.technologies.map((tech) => (
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
        ))}
      </div>
    </section>
  );
}

export default Skills;