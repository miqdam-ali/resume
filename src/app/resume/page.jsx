"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image'
export default function ResumePrototype() {
  const desktopBarRefs = useRef([]);
  const mobileBarRefs = useRef([]);
  const skills = [
    { name: "Next.js 16", level: "89%" },
    { name: "Tailwind Css", level: "92%" },
    { name: "JavaScript XML", level: "85%" },
    { name: "CSS", level: "91%" },
    { name: "Gsap", level: "75%" },
    { name: "Supabase", level: "77%" },
    { name: "Node.js", level: "73%" },
    { name: "Python", level: "52%" },
    { name: "Vercel", level: "71%" },
  ];
  useGSAP(() => {
    skills.forEach((skill, index) => {
      const targetWidth = skill.level;

      // Desktop animation
      const desktopEl = desktopBarRefs.current[index];
      if (desktopEl) {
        gsap.fromTo(
          desktopEl,
          { width: "0%" },
          {
            width: targetWidth,
            duration: 1.2,
            ease: "power3.out",
            delay: index * 0.1,
          },
        );
      }

      // Mobile animation
      const mobileEl = mobileBarRefs.current[index];
      if (mobileEl) {
        gsap.fromTo(
          mobileEl,
          { width: "0%" },
          {
            width: targetWidth,
            duration: 1.2,
            ease: "power3.out",
            delay: index * 0.1,
          },
        );
      }
    });
  }, []);

  return (
    <main className="min-h-screen flex w-full justify-center items-center p-4 md:p-10">
      <section className="w-full md:w-200 shadow-2xl flex flex-col md:flex-row md:-rotate-x-20 md:rotate-y-10 md:hover:rotate-x-0 hoveR:rotate-y-0 duration-500 ease-in-out rounded-lg relative overflow-hidden md:overflow-visible bg-white">
        <div className="hidden md:block w-20 h-2 rotate-45 absolute bg-[#1a365d] top-10 right-0 rounded-full" />
        <div className="hidden md:block w-25 h-2 rotate-45 absolute bg-yellow-500 top-13 right-0 rounded-full" />

        {/* MOBILE */}
        <div className="flex flex-col md:hidden w-full">
          <div className="w-full bg-[#1a365d] text-white flex flex-col items-center py-8 px-4 rounded-t-lg">
            <div className="w-32 h-32 rounded-full border-8 border-yellow-500 overflow-hidden bg-gray-300 flex items-center justify-center mb-4">
              <img
                src="/Image.JPG"
                alt="Miqdam Ali"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-black text-white tracking-wide uppercase text-center">
              Miqdam Ali
            </h1>
            <h2 className="text-sm font-bold text-sky-400 mt-1 tracking-wide text-center">
              Full Stack Developer
            </h2>
          </div>

          <div className="w-full p-6 flex flex-col gap-8 bg-white">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-[#1a365d] text-white font-bold py-1.5 px-6 pr-12 rounded-full text-xs tracking-wider uppercase">
                  Skills Stack
                </div>
                <div className="grow h-0.5 bg-gray-200 ml-2"></div>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs font-semibold text-slate-700 pl-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-[#1a365d] text-lg">•</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="bg-[#1a365d] text-white font-bold py-1.5 px-6 pr-12 rounded-full text-xs tracking-wider uppercase">
                  Skill Level
                </div>
                <div className="grow h-0.5 bg-gray-200 ml-2"></div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-xs font-semibold text-slate-700 pl-2">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-center text-[11px]">
                      <span>{skill.name}</span>
                      <span className="text-black font-normal">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        ref={(el) => (mobileBarRefs.current[index] = el)}
                        className="bg-yellow-500 h-2 rounded-2xl w-0"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="bg-[#1a365d] pr-12 text-white font-bold py-1.5 px-6 rounded-full text-xs tracking-wider uppercase">
                  <h1>Education</h1>
                </div>
                <div className="grow h-0.5 bg-gray-200 ml-2"></div>
              </div>

              <div className="relative border-l-2 border-slate-300 ml-4 pl-6 space-y-6 w-full flex flex-col">
                <div className="flex flex-col space-y-6">
                  <div className="relative">
                    <div className="absolute -left-8 top-1 bg-[#1a365d] w-4 h-4 rounded-full border-4 border-white shadow-sm"></div>
                    <h3 className="text-sm font-bold text-slate-800">
                      Matriculation
                    </h3>
                    <p className="text-xs font-bold text-sky-600">
                      Dar e Arqam School
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                      2023 - 2025
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 top-1 bg-[#1a365d] w-4 h-4 rounded-full border-4 border-white shadow-sm"></div>
                    <h3 className="text-sm font-bold text-slate-800">
                      ICS (Computer Science)
                    </h3>
                    <p className="text-xs font-bold text-sky-600">
                      PGC Sargodha
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                      2026 – 2027
                    </p>
                  </div>
                </div>

                <section className="w-full flex justify-start pt-4 relative">
                  <div className="flex flex-col space-y-3 w-full">
                     <a
                      href="https://wa.me/923707158959"
                      className="bg-[#1a365d] text-white rounded-2xl py-1 px-4 font-bold flex justify-center items-center gap-1 text-xs"
                    >
                      <FaWhatsapp/>Whatsapp
                    </a>
                    <a
                      href="https://github.com/miqdam-ali"
                      className="bg-[#1a365d] text-white rounded-2xl py-1 px-4 font-bold flex justify-center items-center gap-1 text-xs"
                    >
                      <FaGithub/>GitHub
                    </a>
                    <a
                      href="https://github.com/miqdam-ali"
                      className="bg-[#1a365d] text-white rounded-2xl py-1 px-4 font-bold flex items-center justify-center gap-1 text-xs"
                    >
                      <FaLinkedin/> LinkedIn
                    </a>
                    <a
                      href="https://www.instagram.com/btco.17"
                      className="bg-[#1a365d] text-white rounded-2xl py-1 px-4 font-bold  flex items-center justify-center gap-1 text-xs"
                    >
                       <FaInstagram/>  Instagram
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#1a365d] text-white flex flex-col gap-6 py-8 px-6 rounded-b-lg">
            <div>
              <div
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 95% 100%, 100% 100%, 0% 100%)",
                }}
                className="bg-white w-2/3 rounded-tr-lg rounded-br-2xl"
              >
                <h1 className="uppercase text-[#1a365d] text-center py-1 font-bold">
                  Language
                </h1>
              </div>
              <div className="space-y-3 text-xs pt-6 pl-2 pr-2">
                <div>
                  <div className="mb-1">Urdu</div>
                  <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
                    <div className="bg-orange-400 h-full w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1">English</div>
                  <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
                    <div className="bg-orange-400 h-full w-[80%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 95% 100%, 100% 100%, 0% 100%)",
                }}
                className="bg-white w-2/3 rounded-tr-lg rounded-br-2xl"
              >
                <h1 className="uppercase text-[#1a365d] text-center py-1 font-bold">
                  Socails
                </h1>
              </div>

              <ul className="space-y-3 text-xs px-2 list-disc list-inside text-gray-200 pl-2 pt-6">
                <li className="marker:text-orange-400">
                  <span className="font-semibold text-white ml-1">
                    LinkedIn
                  </span>
                  <a
                    href="https://www.linkedin.com/in/miqdam-ali/"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-gray-300 hover:underline pl-4 break-all mt-0.5"
                  >
                    https://linkedin.com/in/miqdam-ali/
                  </a>
                </li>
                <li className="marker:text-orange-400">
                  <span className="font-semibold text-white ml-1">Github</span>
                  <a
                    href="https://github.com/miqdam-ali"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-gray-300 hover:underline pl-4 break-all mt-0.5"
                  >
                    https://github.com/miqdam-ali
                  </a>
                </li>
                <li className="marker:text-orange-400">
                  <span className="font-semibold text-white ml-1">Insta</span>
                  <a
                    href="https://www.instagram.com/btco.17"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-gray-300 hover:underline pl-4 break-all mt-0.5"
                  >
                    https://www.instagram.com/btco.17
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 95% 100%, 100% 100%, 0% 100%)",
                }}
                className="bg-white w-2/3 rounded-tr-lg rounded-br-2xl"
              >
                <h1 className="uppercase text-[#1a365d] text-center py-1 font-bold">
                  Contact
                </h1>
              </div>
              <div className="space-y-3 text-xs text-gray-200 pt-6 pl-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">
                    <FaWhatsapp />
                  </span>
                  <span>+92 3707158959</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✉️</span>
                  <span className="break-all">miqdam.code@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🌐</span>
                  <a
                    href="https://miqdam-resume.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline break-all"
                  >
                    https://miqdam-resume.vercel.app/
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Sargodha Punjab Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex w-1/3 bg-[#1a365d] text-white flex-col gap-8 z-10 rounded-lg">
          <div className="flex justify-center mt-4 p-8">
            <div className="w-40 h-40 rounded-full border-10 border-yellow-500 overflow-hidden bg-gray-300 flex items-center justify-center">
              <img
                src="/Image.JPG"
                fetchPriority="high"
                alt="Miqdam Ali"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <div
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 95% 100%, 100% 100%, 0% 100%)",
              }}
              className="bg-white w-2/3 rounded-tr-lg rounded-br-2xl "
            >
              <h1 className="uppercase text-[#1a365d] text-center py-1 font-bold ">
                Contact
              </h1>
            </div>
            <div className="space-y-3 text-xs text-gray-200 pt-6 pl-6">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">
                  <FaWhatsapp />
                </span>
                <span>+92 3707158959</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span className="break-all">miqdam.code@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🌐</span>
                <a
                  href="https://miqdam-resume.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline break-all"
                >
                  https://miqdam-resume.vercel.app/
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Sargodha Punjab Pakistan</span>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 95% 100%, 100% 100%, 0% 100%)",
              }}
              className="bg-white w-2/3 rounded-tr-lg rounded-br-2xl "
            >
              <h1 className="uppercase text-[#1a365d] text-center py-1 font-bold ">
                Language
              </h1>
            </div>
            <div className="space-y-3 text-xs pt-6 pl-6 pr-6">
              <div>
                <div className="mb-1">Urdu</div>
                <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
                  <div className="bg-orange-400 h-full w-[95%]"></div>
                </div>
              </div>
              <div>
                <div className="mb-1">English</div>
                <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
                  <div className="bg-orange-400 h-full w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 95% 100%, 100% 100%, 0% 100%)",
              }}
              className="bg-white w-2/3 rounded-tr-lg rounded-br-2xl "
            >
              <h1 className="uppercase text-[#1a365d] text-center py-1 font-bold ">
                Socails
              </h1>
            </div>

            <ul className="space-y-3 text-xs px-2 list-disc list-inside text-gray-200 pl-6 pt-6">
              <li className="marker:text-orange-400">
                <span className="font-semibold text-white ml-1">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/miqdam-ali/"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-gray-300 hover:underline pl-4 break-all mt-0.5"
                >
                  https://linkedin.com/in/miqdam-ali/
                </a>
              </li>
              <li className="marker:text-orange-400">
                <span className="font-semibold text-white ml-1">Github</span>
                <a
                  href="https://github.com/miqdam-ali"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-gray-300 hover:underline pl-4 break-all mt-0.5"
                >
                  https://github.com/miqdam-ali
                </a>
              </li>
              <li className="marker:text-orange-400">
                <span className="font-semibold text-white ml-1">Insta</span>
                <a
                  href="https://www.instagram.com/btco.17"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-gray-300 hover:underline pl-4 break-all mt-0.5"
                >
                  https://www.instagram.com/btco.17
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex w-2/3 p-12 flex-col gap-10">
          <div className="mt-6">
            <h1 className="text-5xl font-black text-[#1a365d] tracking-wide uppercase">
              Miqdam Ali
            </h1>
            <h2 className="text-xl font-bold text-sky-600 mt-2 tracking-wide">
              Full Stack Developer
            </h2>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <div className="bg-[#1a365d] text-white font-bold py-1.5 px-6 pr-20 rounded-full text-sm tracking-wider uppercase">
                Skills Stack
              </div>
              <div className="grow h-0.5 bg-gray-200 ml-2"></div>
            </div>

            <div className="grid grid-cols-3 gap-y-3 gap-x-2 text-xs font-semibold text-slate-700 pl-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-[#1a365d] text-lg">•</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <div className="bg-[#1a365d] text-white font-bold py-1.5 px-6 pr-20 rounded-full text-sm tracking-wider uppercase">
                Skill Level
              </div>
              <div className="grow h-0.5 bg-gray-200 ml-2"></div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-xs font-semibold text-slate-700 pl-2">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center text-[11px]">
                    <span>{skill.name}</span>
                    <span className="text-black font-normal">
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      ref={(el) => (desktopBarRefs.current[index] = el)}
                      className="bg-yellow-500 h-2 rounded-2xl w-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <div className="flex items-center mb-6 ">
              <div className="bg-[#1a365d] pr-20 text-white font-bold py-1.5 px-6 rounded-full text-sm tracking-wider uppercase">
                <h1>Education</h1>
              </div>
              <div className="grow h-0.5 bg-gray-200 ml-2"></div>
            </div>

            <div className="relative border-l-2 border-slate-300 ml-4 pl-6 space-y-6 w-full flex flex-row">
              <div className="flex flex-col">
                <div className="relative">
                  <div className="absolute -left-8 top-1 bg-[#1a365d] w-4 h-4 rounded-full border-4 border-white shadow-sm"></div>
                  <h3 className="text-sm font-bold text-slate-800">
                    Matriculation
                  </h3>
                  <p className="text-xs font-bold text-sky-600">
                    Dar e Arqam School
                  </p>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                    2023 - 2025
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-8 top-1 bg-[#1a365d] w-4 h-4 rounded-full border-4 border-white shadow-sm"></div>
                  <h3 className="text-sm font-bold text-slate-800">
                    ICS (Computer Science)
                  </h3>
                  <p className="text-xs font-bold text-sky-600">PGC Sargodha</p>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                    2026 – 2027
                  </p>
                </div>
              </div>

              <section className="w-1/2 flex justify-end ml-7 relative">
                <div className="absolute right-40 top-2 bg-yellow-500 w-4 h-4 rounded-full border-4 border-white shadow-sm"></div>
                <div className="absolute right-40 top-13 bg-yellow-500 w-4 h-4 rounded-full border-4 border-white shadow-sm"></div>
                <div className="absolute right-40 top-24 bg-yellow-500 w-4 h-4 rounded-full border-4 border-white shadow-sm"></div>
                <div className="absolute right-40 top-36 bg-yellow-500 w-4 h-4 rounded-full border-4 border-white shadow-sm"></div>

                <div className="flex flex-col space-y-3">
                  <a
                    href="https://wa.me/923707158959"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#1a365d] flex flex-row items-center gap-1 text-white rounded-2xl py-1 px-4 font-bold text-center"
                  >
                    <FaWhatsapp /> Whatsapp
                  </a>
                  <a
                    href="https://github.com/miqdam-ali"
                    className="bg-[#1a365d] flex flex-row items-center gap-1 text-white rounded-2xl py-1 px-4 font-bold text-center"
                  >
                    <FaGithub /> Github
                  </a>

                  <a
                    href="https://github.com/miqdam-ali"
                    className="bg-[#1a365d] flex flex-row items-center gap-1 text-white rounded-2xl py-1 px-4 font-bold text-center"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/miqdam-ali"
                    className="bg-[#1a365d] flex flex-row items-center gap-1 text-white rounded-2xl py-1 px-4 font-bold text-center"
                  >
                    <FaInstagram /> Instagram
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
