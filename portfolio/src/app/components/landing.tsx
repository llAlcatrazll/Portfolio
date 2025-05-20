import React from "react";
import "../globals.css";
export default function Landing() {
  return (
    <div>
      <div
        className="w-full h-screen flex flex-col"
        style={{
          backgroundImage: `url('/assets/greenlanding.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full flex justify-center items-center text-center gap-10 py-2 special_padding ">
          {/* flex align-content-center justify-content-center text-center */}
          {/* flex justify-center items-center text-center gap-8 py-2 */}
          <p className="topnavtext applefont">About</p>
          <p className="topnavtext applefont">Experience</p>
          <p className="topnavtext applefont">Projects</p>
          <p className="topnavtext applefont">Education</p>
          <p className="topnavtext applefont">Contact</p>
        </div>
        <div className=" w-full flex-1 flex flex-col justify-center items-center text-center">
          {/* to give 100% height give parent flex flex-col and give child flex-1 */}
          <p
            className="hellometext applefont text-white font-extrabold text-5xl"
            style={{ color: "#DDF6FF" }}
          >
            Hi, I`m Alexis P. Magaway Jr.
          </p>
          <p className="text-white applefont font-extrabold text-3xl fullstack_margin">
            A Full-Stack Developer
          </p>
          <div className="flex gap-5 fullstack_margin">
            <button className="landing_button applefont projects">
              Projects
            </button>
            <button className="landing_button applefont contact">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <div
        className="bg-red-50 h-auto min-h-screen"
        style={{ backgroundColor: "#070F1A" }}
      >
        <h1>hello world</h1>
        <div className="w-full h-screen text-center text-white grid grid-cols-2">
          <div className=" h-full flex flex-col justify-center items-center">
            <p
              className="italic text-8xl font-bold"
              style={{ color: "#41B3B7" }}
            >
              ABOUT
            </p>
            <p
              className="italic text-9xl font-extrabold text-transparent me_neg_margin"
              style={{
                WebkitTextStroke: "2px white", // for better stroke than text-shadow
              }}
            >
              ME
            </p>
            <div className="flex gap-10">
              <li className="ion--logo-github aboutmeIcons"></li>
              <li className="devicon-plain--linkedin aboutmeIcons"></li>
              <li className="mdi--gmail aboutmeIcons"></li>
            </div>
            <div className="flex gap-5" style={{ padding: "23px 0" }}>
              <button className="aboutme_button projects flex items-center gap-3">
                Download CV{" "}
                <span className="line-md--file-download-filled"></span>
              </button>
              <button className="aboutme_button contact flex items-center gap-3">
                View Projects <span className="fluent--code-24-regular"></span>
              </button>
            </div>
          </div>
          <div className="h-full flex justify-start items-center">
            <div className="applefont text-xl text-left max-w-xl">
              I am a software engineer with more than four years of experience.
              Recognized as a practical and effective developer, I specialize in
              creating inspiring UI designs and engaging user experiences to
              bring imaginative ideas to life.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
