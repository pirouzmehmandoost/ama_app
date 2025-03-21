"use client";

import Link from "next/link";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full h-full mt-10">
      <div className="flex flex-row w-full h-fit justify-center my-10 ">
        <Link href="/" rel="noopener noreferrer">
          <div className="cursor-pointer rounded-full w-fit h-fit p-6 text-slate-600 bg-slate-900/40 transition-all duration-500 ease-in-out hover:bg-slate-800/20">
            <ArrowBackIosNewIcon fontSize="large" />
          </div>
        </Link>
      </div>
      <div
        className={`flex flex-col w-full h-full place-items-center text-center text-slate-400 uppercase text-3xl`}
      >
        <div className="flex flex-col justify-between h-full w-4/5">
          <p className="mt-4">
            Hey! The app is built with the latest versions of Next.JS, Tailwind
            CSS, React, OpenAI API, and Vercel AI SDK. It leverages the GTP-4
            model, with tooling to allow the model to conduct web searches.
          </p>
          <div>
            <div className="mt-4">
              WIP, Read my latest notes in the
              <Link
                href="https://github.com/pirouzmehmandoost/ama_app"
                className="border-transparent"
                rel="noopener noreferrer"
                target="blank"
              >
                <span
                  className={`pl-1 cursor-pointer text-slate-500 italic transition-colors ease-in-out duration-300 hover:text-slate-400`}
                >
                  Github repo
                </span>
                <span className="italic">!</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
