"use client";

import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiDotnet,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiUnity,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiDocker,
} from "react-icons/si";

export default function Tooling() {
  const languages = [
    { text: "JavaScript", icon: <SiJavascript />, bgColor: "bg-yellow-400" },
    { text: "TypeScript", icon: <SiTypescript />, bgColor: "bg-blue-400" },
    { text: "HTML5", icon: <SiHtml5 />, bgColor: "bg-orange-500" },
    { text: "CSS3", icon: <SiCss3 />, bgColor: "bg-blue-300" },
    { text: "SQL", icon: <SiMysql />, bgColor: "bg-teal-400" },
    { text: "C#", icon: <SiDotnet />, bgColor: "bg-purple-400" },
  ];

  const frameworks = [
    { text: "React", icon: <SiReact />, bgColor: "bg-blue-400" },
    { text: "Node.js", icon: <SiNodedotjs />, bgColor: "bg-green-400" },
    { text: "TailwindCSS", icon: <SiTailwindcss />, bgColor: "bg-teal-400" },
    { text: "PostgreSQL", icon: <SiPostgresql />, bgColor: "bg-blue-500" },
    { text: "Unity", icon: <SiUnity />, bgColor: "bg-gray-400" },
  ];

  const devTools = [
    { text: "Git", icon: <SiGit />, bgColor: "bg-orange-400" },
    { text: "GitHub", icon: <SiGithub />, bgColor: "bg-gray-400" },
    { text: "Figma", icon: <SiFigma />, bgColor: "bg-pink-400" },
    { text: "Postman", icon: <SiPostman />, bgColor: "bg-orange-500" },
    { text: "Docker", icon: <SiDocker />, bgColor: "bg-blue-400" },
  ];

  return (
    <div
      style={{ backgroundColor: "#070F1A" }}
      className="w-screen min-h-screen flex flex-col items-center justify-center text-white px-4"
    >
      <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 drop-shadow-lg mb-12 overflow-hidden">
        Tooling
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Languages */}
        <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-6">Languages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center rounded-lg p-4 shadow-md w-28 h-28 ${item.bgColor}`}
              >
                <div className="text-4xl">{item.icon}</div>
                <span className="text-sm font-medium mt-2">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-6">Frameworks</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {frameworks.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center rounded-lg p-4 shadow-md w-28 h-28 ${item.bgColor}`}
              >
                <div className="text-4xl">{item.icon}</div>
                <span className="text-sm font-medium mt-2">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dev Tools */}
        <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-6">Dev Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {devTools.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center rounded-lg p-4 shadow-md w-28 h-28 ${item.bgColor}`}
              >
                <div className="text-4xl">{item.icon}</div>
                <span className="text-sm font-medium mt-2">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
