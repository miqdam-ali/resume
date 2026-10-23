"use client";
import { Contact, MessageCircle, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Resume() {
  const skill = [
    { id: 1, skill: "Next.js 16" },
    { id: 2, skill: "Tailwind Css" },
    { id: 3, skill: "JavaScript XML" },
    { id: 4, skill: "Css" },
    { id: 5, skill: "Gsap Animation" },
    { id: 6, skill: "Supabase" },
    { id: 7, skill: "Node.js" },
    { id: 8, skill: "Python" },
  ];

  // Skill levels ke liye data array
  const skillLevels = [
    { name: "Next.js", percentage: "87%", width: "w-[87%]" },
    { name: "Tailwind Css", percentage: "90%", width: "w-[90%]" },
    { name: "JavaScript", percentage: "85%", width: "w-[85%]" },
    { name: "CSS", percentage: "92%", width: "w-[92%]" },
    { name: "GSAP Animation", percentage: "75%", width: "w-[75%]" },
    { name: "Supabase", percentage: "75%", width: "w-[75%]" },
    { name: "Node.js", percentage: "78%", width: "w-[78%]" },
    { name: "Python", percentage: "62%", width: "w-[62%]" },
  ];

  return (
    <main className="min-h-screen flex justify-center items-center p-10 bg-slate-950 ">
      <section className="w-175 bg-white/20 rounded-2xl shadow-xs shadow-white/40 relative p-3">
        {/*Header*/}
        <div className="p-8 flex flex-col">
          <h1 className="text-5xl flex flex-row text-yellow-500 tracking-[0.2em] gap-10">
            MIQDAM ALI
            <span>
              <Contact color="gray" size={50} />
            </span>
          </h1>
          <p className="flex flex-row items-center gap-3">
            <span className="h-2 w-2 bg-yellow-500 rounded-full" /> Full Stack
            Developer
          </p>
        </div>

        {/* COntact and Basic Skill */}
        <div className="w-full flex flex-row">
          <div className="w-1/2 rounded-2xl p-3 flex flex-col gap-2">
            {/* Email Link */}
            <a
              href="mailto:miqdamalifounder@gmail.com"
              className="group block cursor-pointer"
            >
              <h1 className="text-yellow-500 pt-2 flex flex-row items-center gap-1 group-hover:underline">
                <Mail color="white" /> Email
              </h1>
              <p className="text-sm text-slate-300 group-hover:text-white">
                miqdamalifounder@gmail.com
              </p>
            </a>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/923707158959"
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer"
            >
              <h1 className="text-yellow-500 pt-2 flex flex-row items-center gap-1 group-hover:underline">
                <MessageCircle color="white" /> Whatsapp
              </h1>
              <p className="text-sm text-slate-300 group-hover:text-white">
                +92XXXXXXXXX
              </p>
            </a>

            {/* GitHub Link */}
            <a
              href="https://github.com/miqdam-ali"
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer"
            >
              <h1 className="text-yellow-500 pt-2 flex flex-row items-center gap-1 group-hover:underline">
                <FaGithub color="white" /> Github
              </h1>
              <p className="text-sm text-slate-300 group-hover:text-white">
                https://github.com/miqdam-ali
              </p>
            </a>
          </div>
          {/*SKill Section */}
          <section className="w-full border border-white/20 p-4">
            <div>
              <h1 className="text-center pt-2 pb-4 tracking-widest text-yellow-500 font-bold">
                Core Skill Grid
              </h1>
            </div>

            <div className="flex flex-row flex-wrap gap-2 justify-center">
              {skill.map((item) => (
                <div
                  key={item.id}
                  className="bg-yellow-500 text-black font-medium px-3 py-1.5 rounded-2xl text-xs shadow-md"
                >
                  <p>{item.skill}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/*Skill Level */}
        <div className="w-full grid grid-cols-2 gap-4 p-3 mt-4">
          {skillLevels.map((lvl, index) => (
            <div key={index} className="p-2">
              <h1 className="flex flex-row items-center justify-between text-sm font-medium mb-1">
                {lvl.name}
                <span>{lvl.percentage}</span>
              </h1>
              <div className="w-full rounded-2xl bg-white/20 h-2">
                <div className={`bg-yellow-500 ${lvl.width} h-2 rounded-2xl`} />
              </div>
            </div>
          ))}
        </div>
        {/*Projects*/}
        <div>
          <div className="flex w-full justify-center items-center border-t border-white/20 p-5">
            <div className="w-1/2">
              <h1 className="text-xl text-yellow-500 tracking-[0.2em]">
                VAUXIN
              </h1>
              <p>Task Management Web Application</p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <a
                href="https://vauxin.vercel.app/"
                className="bg-yellow-500 text-black rounded-lg py-1 px-4"
              >
                Open Live Project
              </a>
            </div>
          </div>

          <div className="flex w-full justify-center items-center border-white/20 p-5">
            <div className="w-1/2">
              <h1 className="text-xl text-yellow-500 tracking-[0.2em]">MSM</h1>
              <p>E-Commerce Platform</p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <a
                href="https://github.com/miqdam-ali/store.git"
                className="bg-yellow-500 text-black rounded-lg py-1 px-4"
              >
                Open Repo
              </a>
            </div>
          </div>
            <div className="flex w-full justify-center items-center border-white/20 p-5">
            <div className="w-1/2">
              <h1 className="text-xl text-yellow-500 tracking-[0.2em]">Technical Content</h1>
              <p>Generated 230K+ Organic Reach On Socail</p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <a
                href="https://www.instagram.com/btco.17?psln=ZmN2dWE4b2FnODd2&utm_source=qr"
                className="bg-yellow-500 text-black rounded-lg py-1 px-4"
              >
                Open Insta
              </a>
            </div>
          </div>
        </div>

        {/*Edu */}
        <div className="w-full border-t border-white/20 p-5 flex flex-row">
         <div className="w-1/2">
             <h1 className="text-xl text-yellow-500 uppercase tracking-widest">
              Eductaion
             </h1>
             <p>
               
               ICS <span className="text-yellow-600">(COMPUTER SCIENCE)</span>
             </p>
         </div>
         <div className="w-1/2 flex justify-center items-center ">
            <button
            className="bg-yellow-500 rounded-lg px-8 py-2 text-black"
            >
              <p>
                Download PDF
              </p>
            </button>
         </div>
        </div>
      </section>
    </main>
  );
}
