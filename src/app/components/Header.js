"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed flex flex-row items-center justify-between inset-x-0 z-1 top-0 w-full h-fit p-5">
      <div className="text-center text-slate-400 text-4xl">
        <h1 className="ml-4">Chat</h1>
      </div>
      <div className="mr-4 rounded-full overflow-hidden bg-black p-1 drop-shadow-2xl shadow-md shadow-slate-950/30 ">
        <Image width={70} height={70} src={"/ama-logo.png"} alt={""} />
      </div>
    </div>
  );
}
