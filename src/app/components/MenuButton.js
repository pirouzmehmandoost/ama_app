"use client";

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

const Links = () => {
  return (
    <div className="flex flex-col w-fit h-fit p-2 justify-around mask-transparency-linear-sm text-center text-4xl text-slate-400 bg-slate-900/90">
      <div
        className="flex flex-col justify-evenly bg-slate-900/0"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50% , #020617 10%, #02061700 90%)",
        }}
      >
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className="perspective-origin-bottom my-2">
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
      className={`w-fit h-fit inset-0 top-5 left-5 justify-center p-4 rounded-full cursor-pointer bg-slate-900/0 backdrop-blur-xl transition-all duration-1000 ease-in-out text-slate-400 hover:text-slate-500`}
    >
      <MenuIcon fontSize="large" />
    </div>
  );
};

export default function MenuButton() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="fixed top-0 left-0 flex flex-col grow w-fit h-fit z-100 place-items-center">
      <div className="fixed top-5 left-2">
        <ToggleButton
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive);
          }}
        />
      </div>
      <div className="fixed top-25 left-5">
        <div
          className={` flex grow transition-all duration-200 delay-100 ease-in-out transition-discrete ${
            isActive
              ? "opacity-100 h-full w-full blur-none"
              : "opacity-0 max-h-2 max-w-1 blur-2xl"
          }`}
        >
          <Links />
        </div>
      </div>
    </div>
  );
}
