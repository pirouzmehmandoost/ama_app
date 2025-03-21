"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
const variants = {
  links: {
    initial: {
      filter: "blur(100px)",
      opacity: 1,
      rotateX: 90,
      translateX: -20,
      translateY: 80,
    },
    enter: (i) => ({
      filter: "blur(0px)",
      opacity: 1,
      rotateX: 0,
      translateX: 0,
      translateY: 0,
      transition: {
        duration: 0.65,
        delay: 0.5 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
        opacity: { duration: 0.35 },
      },
    }),
    exit: (i) => ({
      filter: "blur(100px)",
      opacity: 1,
      rotateX: 0,
      translateX: 0,
      translateY: 0,
      transition: {
        duration: 0.65,
        delay: 0.5 - i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
        opacity: { duration: 0.35 },
      },
    }),
  },
  menu: {
    open: {
      filter: "blur(0px)",
      opacity: 1,
      width: "10vw",
      height: "10vh",
      transition: {
        duration: 0.75,
        type: "easeInOut",
        ease: [0.76, 0, 0.24, 1],
        opacity: { delay: 0.5 },
      },
    },
    closed: {
      filter: "blur(100px)",
      opacity: 0,
      width: "1vw",
      height: "1vh",
      transition: {
        delay: 0.5,
        duration: 0.75,
        type: "easeInOut",
        ease: [0.76, 0, 0.24, 1],
        opacity: { delay: 0.5 },
      },
    },
  },
};

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
    <div className="flex flex-col w-fit h-fit justify-around text-center text-4xl uppercase text-slate-400 bg-slate-400/0">
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
              <motion.div
                custom={i}
                variants={variants.top}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                  href={href}
                >
                  {title}
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ToggleButton = ({ isActive, toggleMenu }) => {
  return (
    <div
      onClick={() => toggleMenu()}
      className={`w-fit h-fit inset-0 top-5 left-5 justify-center p-4 rounded-full cursor-pointer bg-slate-900/0 backdrop-blur-xl transition-all duration-1000 ease-in-out text-slate-400 hover:text-slate-500`}
    >
      <MenuIcon fontSize="large" />
    </div>
  );
};

export default function Menu() {
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
        <motion.div
          variants={variants.menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          {isActive && <Links />}
          {/* <AnimatePresence>{isActive && <Links />}</AnimatePresence> */}
        </motion.div>
      </div>
    </div>
  );
}
