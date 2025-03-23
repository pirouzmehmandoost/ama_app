"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const links = [
  {
    href: "/about",
    title: "About",
  },
  {
    href: "https://github.com/pirouzmehmandoost/ama_app",
    title: "Github",
  },
];

const Links = (isActive) => {
  return (
    <div
      className={`flex flex-col grow w-full max-h-full justify-center mask-transparency-linear-sm

    `}
    >
      <div className="flex flex-row h-fit justify-evenly bg-slate-900/0 text-center">
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div
              key={`b_${i}`}
              className="perspective-origin-bottom mask-transparency-radial-xs text-3xl text-slate-400"
            >
              <div>
                <Link
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                  href={href}
                >
                  {title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ToggleButton = ({ toggleMenu }) => {
  return (
    <div
      onClick={() => toggleMenu()}
      className={`w-fit h-fit p-3 rounded-full cursor-pointer bg-black backdrop-blur-xl transition-all duration-1000 ease-in-out text-slate-400 hover:text-slate-500`}
    >
      <MenuIcon fontSize="large" />
    </div>
  );
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-1 flex flex-col grow w-full h-fit p-4 bg-linear-to-b from-slate-900 from-50% to-slate-900/80 drop-shadow shadow-2xl shadow-slate-950/80">
      <div className="flex flex-row w-full h-fit items-center justify-between">
        <div>
          <ToggleButton toggleMenu={() => setIsActive(!isActive)} />
        </div>

        <div className="text-slate-400 text-4xl">
          <h1>AI Chatbot</h1>
        </div>
        <div className="mr-4 rounded-full overflow-hidden bg-black p-1">
          <Image width={70} height={70} src={"/ama-logo.png"} alt={""} />
        </div>
      </div>
      <div
        className={`flex max-w-full grow transition-all duration-200 delay-100 ease-in-out transition-discrete
          ${
            isActive
              ? "opacity-100 max-h-20 blur-none"
              : "opacity-0 max-h-0 blur-2xl"
          }
        `}
      >
        <Links {...isActive} />
      </div>
    </div>
  );
}
