import React from "react";
// import "../globals.css";
import "../globals.css";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiFilament } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";
import { CgFigma } from "react-icons/cg";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
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
              style={{ color: "#53D9DE" }}
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
          <div className="h-full flex flex-col justify-start items-start ">
            <div className="applefont text-xl text-left max-w-xl mb-10">
              I am a software engineer with more than four years of experience.
              Recognized as a practical and effective developer, I specialize in
              creating inspiring UI designs and engaging user experiences to
              bring imaginative ideas to life.
            </div>
            <div className="">
              <div className="techstack_title ml-10 text-left">EDUCATION</div>
              <div className="flex ">
                {/* Timeline Column */}
                <div className="flex flex-col items-center">
                  {/* First Circle */}
                  <div
                    className="w-8 h-8 rounded-full "
                    style={{ border: "solid #53D9DE 4px" }}
                  ></div>
                  {/* Vertical Line */}
                  <div
                    className="w-1 flex-1"
                    style={{ backgroundColor: "#53D9DE" }}
                  ></div>
                </div>

                {/* Content Column */}
                <div className="ml-4 space-y-8 text-left">
                  {/* Timeline Item 1 */}
                  <div>
                    <p className="text-white ml-5 techstack_subheader">
                      Software Developer
                    </p>
                    <p className="text-cyan-400 font-semibold ml-5 techstack_subheader">
                      @DSSC - COR JESU COLLEGE | 2023 - 2025
                    </p>
                    {/* <ul
                      className="list-disc text-white space-y-1"
                      style={{
                        paddingLeft: "1.2em",
                        textIndent: "-0.4em",
                        margin: 0,
                      }}
                    >
                      <li>
                        Main developer and designer for of the project Axion a
                        school facility booking system
                      </li>
                      <li>
                        Designed and developed multiple dashboard for different
                        user types along with a public event view only for
                        students using school wifi
                      </li>
                    </ul> */}
                  </div>

                  {/* Timeline Item 2 */}
                  {/* <div>
                <h3 className="font-bold italic text-white text-lg ml-5">
                  EDUCATION
                </h3>
                <p className="text-white">
                  Bachelor of Science in Computer Science (BSCS)
                </p>
                <p className="text-cyan-400 font-semibold">
                  COR JESU COLLEGE | 2021 - 2025
                </p>
              </div> */}
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            {/*  */}
            <div className="" style={{ maxWidth: "60%" }}>
              <div className="techstack_title ml-10 text-left">EXPERIENCE</div>
              <div className="flex ">
                {/* Timeline Column */}
                <div className="flex flex-col items-center">
                  {/* First Circle */}
                  <div
                    className="w-8 h-8 rounded-full "
                    style={{ border: "solid #53D9DE 4px" }}
                  ></div>
                  {/* Vertical Line */}
                  <div
                    className="w-1 flex-1"
                    style={{ backgroundColor: "#53D9DE" }}
                  ></div>
                </div>

                {/* Content Column */}
                <div className="ml-4 space-y-8 text-left mb-7">
                  {/* Timeline Item 1 */}
                  <div>
                    <p className="text-white ml-7 techstack_subheader">
                      Bachelor of Science in Computer Science (BSCS)
                    </p>
                    <p className="text-cyan-400 font-semibold ml-7 techstack_subheader">
                      COR JESU COLLEGE | 2021 - 2025
                    </p>
                    <ul
                      className="list-disc text-white space-y-1"
                      style={{
                        paddingLeft: "1.2em",
                        textIndent: "-0.6em",
                        margin: 0,
                      }}
                    >
                      <li>
                        Main developer and designer for of the project Axion a
                        school facility booking system
                      </li>
                      <li>
                        Designed and developed multiple dashboard for different
                        user types along with a public event view only for
                        students using school wifi
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex ">
                {/* Timeline Column */}
                <div className="flex flex-col items-center">
                  {/* First Circle */}
                  <div
                    className="w-8 h-8 rounded-full "
                    style={{ border: "solid #53D9DE 4px" }}
                  ></div>
                  {/* Vertical Line */}
                  <div
                    className="w-1 flex-1"
                    style={{ backgroundColor: "#53D9DE" }}
                  ></div>
                </div>

                {/* Content Column */}
                <div className="ml-4 space-y-8 text-left mb-7">
                  {/* Timeline Item 1 */}
                  <div>
                    <p className="text-white ml-7 techstack_subheader">
                      Game Developer
                    </p>
                    <p className="text-cyan-400 font-semibold ml-7 techstack_subheader">
                      @Numgebra - Masteral Commission | 2023 - 2024
                    </p>
                    <ul
                      className="list-disc text-white space-y-1"
                      style={{
                        paddingLeft: "1.2em",
                        textIndent: "-0.6em",
                        margin: 0,
                      }}
                    >
                      <li>
                        Solo developer of the mobile unity game for education
                        for high school students
                      </li>
                      <li>
                        Designed and developed 35 different stages consisting on
                        unique game modes and interactions
                      </li>
                      <li>
                        Built for all platforms and optimized for low end phones
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex ">
                {/* Timeline Column */}
                <div className="flex flex-col items-center">
                  {/* First Circle */}
                  <div
                    className="w-8 h-8 rounded-full "
                    style={{ border: "solid #53D9DE 4px" }}
                  ></div>
                  {/* Vertical Line */}
                  <div
                    className="w-1 flex-1"
                    style={{ backgroundColor: "#53D9DE" }}
                  ></div>
                </div>

                {/* Content Column */}
                <div className="ml-4 space-y-8 text-left">
                  {/* Timeline Item 1 */}
                  <div>
                    <p className="text-white ml-7 techstack_subheader">
                      On the Job Experience - Web Developer
                    </p>
                    <p className="text-cyan-400 font-semibold ml-7 techstack_subheader">
                      @Capitol - PICTO | Summer 2024
                    </p>
                    <ul
                      className="list-disc text-white space-y-1"
                      style={{
                        paddingLeft: "1.2em",
                        textIndent: "-0.6em",
                        margin: 0,
                      }}
                    >
                      <li>
                        Co-Developer of the government ticketing system for IT
                        Helpdesk
                      </li>
                      <li>
                        Scalable for other offices and inquiries of the Capitol
                        Government building`s other offices
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            {/*  */}
          </div>
        </div>
      </div>
      <div
        className="h-screen w-full text-center grid grid-cols-2"
        style={{ backgroundColor: "#070F1A" }}
      >
        <div className="w-full h-screen flex flex-col justify-center items-center">
          {/*  */}
          {/*  */}
          <div>
            <div className="flex ">
              {/* Timeline Column */}
              <div className="flex flex-col items-center">
                {/* First Circle */}
                <div
                  className="w-8 h-8 rounded-full "
                  style={{ border: "solid #53D9DE 4px" }}
                ></div>
                {/* Vertical Line */}
                <div
                  className="w-1 flex-1"
                  style={{ backgroundColor: "#53D9DE" }}
                ></div>
              </div>

              {/* Content Column */}
              <div className=" space-y-8 text-left">
                {/* Timeline Item 1 */}
                <div>
                  <div className="techstack_title ml-10 text-left">
                    FRONT END
                  </div>

                  <p className="text-white ml-5 techstack_subheader">
                    Focused on Web development and Game Development
                  </p>
                  <div className="flex gap-5 ml-10">
                    <IoLogoJavascript className="techstack_logos" />
                    <SiTypescript className="techstack_logos" />
                    <TbBrandCSharp className="techstack_logos" />
                    <FaReact className="techstack_logos" />
                    <SiFilament className="techstack_logos" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex ">
              {/* Timeline Column */}
              <div className="flex flex-col items-center">
                {/* First Circle */}
                <div
                  className="w-8 h-8 rounded-full "
                  style={{ border: "solid #53D9DE 4px" }}
                ></div>
                {/* Vertical Line */}
                <div
                  className="w-1 flex-1"
                  style={{ backgroundColor: "#53D9DE" }}
                ></div>
              </div>

              {/* Content Column */}
              <div className=" space-y-8 text-left">
                {/* Timeline Item 1 */}
                <div>
                  <div className="techstack_title ml-10 text-left">
                    BACK END
                  </div>

                  <p className="text-white ml-5 techstack_subheader">
                    Focused on Web development and Game Development
                  </p>
                  <div className="flex gap-5 ml-10">
                    <FaNodeJs className="techstack_logos" />
                    <SiPhp className="techstack_logos" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          <div>
            <div className="flex ">
              {/* Timeline Column */}
              <div className="flex flex-col items-center">
                {/* First Circle */}
                <div
                  className="w-8 h-8 rounded-full "
                  style={{ border: "solid #53D9DE 4px" }}
                ></div>
                {/* Vertical Line */}
                <div
                  className="w-1 flex-1"
                  style={{ backgroundColor: "#53D9DE" }}
                ></div>
              </div>

              {/* Content Column */}
              <div className=" space-y-8 text-left">
                {/* Timeline Item 1 */}
                <div>
                  <div className="techstack_title ml-10 text-left">
                    DATABASE
                  </div>
                  <p className="text-white ml-5 techstack_subheader">
                    Focused on Web development and Game Development
                  </p>
                  <div className="flex gap-5 ml-10">
                    <IoLogoFirebase className="techstack_logos" />
                    <SiMysql className="techstack_logos" />
                    <BiLogoPostgresql className="techstack_logos" />
                    <RiSupabaseFill className="techstack_logos" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          <div>
            <div className="flex ">
              {/* Timeline Column */}
              <div className="flex flex-col items-center">
                {/* First Circle */}
                <div
                  className="w-8 h-8 rounded-full "
                  style={{ border: "solid #53D9DE 4px" }}
                ></div>
                {/* Vertical Line */}
                <div
                  className="w-1 flex-1"
                  style={{ backgroundColor: "#53D9DE" }}
                ></div>
              </div>

              {/* Content Column */}
              <div className=" space-y-8 text-left">
                {/* Timeline Item 1 */}
                <div>
                  <div className="techstack_title ml-10 text-left">
                    DEV TOOLS
                  </div>
                  <p className="text-white ml-5 techstack_subheader">
                    Focused on Web development and Game Development
                  </p>
                  <div className="flex gap-5 ml-10">
                    <FaDocker className="techstack_logos" />
                    <SiPostman className="techstack_logos" />
                    <FaUnity className="techstack_logos" />
                    <CgFigma className="techstack_logos" />
                    <FaGithub className="techstack_logos" />
                    <BiLogoVisualStudio className="techstack_logos" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
        </div>
        <div className="w-full -ml-40 h-screen  flex flex-col justify-center items-center">
          <p
            className="italic text-9xl font-extrabold"
            style={{ color: "#53D9DE" }}
          >
            TECH
          </p>
          <p
            className="italic text-8xl font-extrabold text-transparent stack_margin"
            style={{
              WebkitTextStroke: "2px white", // for better stroke than text-shadow
            }}
          >
            STACK
          </p>
        </div>
      </div>
    </div>
  );
}
