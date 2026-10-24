import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaWhatsapp } from "react-icons/fa";

export default function ResumePrototype() {
  const barRefs = useRef([]);
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
    barRefs.current.forEach((el, index) => {
      if (!el) return;
      const targetWidth = skills[index].level;

      gsap.fromTo(
        el,
        { width: "0%" },
        {
          width: targetWidth,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.1, // Har bar thora sa delay se start hogi (stagger effect)
        },
      );
    });
  }, []);

  return (
    <main className="min-h-screen flex w-full justify-center items-center p-10">
      <section className="md:w-210 shadow-2xl flex flex-row -rotate-x-20 rotate-y-10 hover:rotate-x-0 hoveR:rotate-y-0 duration-500 ease-in-out rounded-lg">
        {/* LEFT SIDEBAR */}
        <div className="w-1/3 bg-[#1a365d] text-white  flex flex-col gap-8 z-10 rounded-lg">
          {/* Profile Image Container */}
          <div className="flex justify-center mt-4 p-8">
            <div className="w-40 h-40 rounded-full border-10 border-yellow-500 overflow-hidden bg-gray-300 flex items-center justify-center">
              {/* Replace with actual image src when available */}
              <img
                src="#"
                alt="Miqdam Ali"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Section */}
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
                <span className="break-all">example@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🌐</span>
                <a
                  href="https://vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline break-all"
                >
                  https://vercel.app
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Sargodha Punjab Pakistan</span>
              </div>
            </div>
          </div>

          {/* Language Section */}
          <div>
            <div
              style={{
                /* A very simple 5-point polygon. No math, no complex curves. */
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

          {/* Socials Section */}
          <div>
            <div
              style={{
                /* A very simple 5-point polygon. No math, no complex curves. */
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
                  href="https://www.instagram.com/btco.17?psln=ZmN2dWE4b2FnODd2&utm_source=qr"
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

        {/* MAIN CONTENT AREA */}
        <div className="w-2/3 p-12 flex flex-col gap-10">
          {/* Header Name & Title */}
          <div className="mt-6">
            <h1 className="text-5xl font-black text-[#1a365d] tracking-wide uppercase">
              Miqdam Ali
            </h1>
            <h2 className="text-xl font-bold text-sky-600 mt-2 tracking-wide">
              Full Stack Developer
            </h2>
          </div>

          {/* Skills Stack Section */}
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

          {/* Skill Level Section */}
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
                      ref={(el) => (barRefs.current[index] = el)}
                      className="bg-yellow-500 h-2 rounded-2xl w-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-[#1a365d] pr-20 text-white font-bold py-1.5 px-6 rounded-full text-sm tracking-wider uppercase">
                <h1>Education</h1>
              </div>
              <div className="grow h-0.5 bg-gray-200 ml-2"></div>
            </div>

            <div className="relative border-l-2 border-slate-300 ml-4 pl-6 space-y-6">
              {/* Matriculation */}
              <div className="relative">
                <div className="absolute -left-7.75 top-1 bg-[#1a365d] w-4 h-4 rounded-full border-4 border-white shadow-sm"></div>
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

              {/* ICS */}
              <div className="relative">
                <div className="absolute -left-7.75 top-1 bg-[#1a365d] w-4 h-4 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-sm font-bold text-slate-800">
                  ICS (Computer Science)
                </h3>
                <p className="text-xs font-bold text-sky-600">PGC Sargodha</p>
                <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                  2026 – 2027
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
