"use client";

export default function Header() {
  return (
    <div className="fixed flex flex-row inset-x-0 z-1 top-0 w-full h-fit bg-linear-to-r from-blue-950/10 from-50% to-transparent to-60% p-4  backdrop-blur-2xl backdrop-opacity-100  drop-shadow-3xl shadow-2xl text-4xl text-slate-300">
      <div className="basis-1/3 text-center">
        <h1 className="ml-20">Chat</h1>
      </div>
    </div>
  );
}
