"use client";

import Image from "next/image";
export default function Header() {
  return (
    <div className="fixed flex flex-row items-center justify-between inset-x-0 z-1 top-0 w-full h-fit p-3">
      <div className="text-slate-400 text-4xl ml-25">
        <h1> AI Chatbot </h1>
      </div>
      <div className="mr-4 rounded-full overflow-hidden bg-black p-1 drop-shadow-2xl shadow-md shadow-slate-950/30 ">
        <Image width={70} height={70} src={"/ama-logo.png"} alt={""} />
      </div>
    </div>
  );
}
