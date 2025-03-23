"use client";

import Chat from "./components/Chat";
import Header from "./components/Header";

export default function Home() {
  return (
    <main
      className={`flex w-full h-dvh items-center justify-items-center place-content-center`}
      style={{
        background:
          "radial-gradient(at 3% 3%, #080c4a 0px, transparent 50%), radial-gradient(at 72% 0%, #000233 0px, transparent 50%), radial-gradient(at 81% 87%, #133163 0px, transparent 50%), radial-gradient(at 92% 1%, #001e94 0px, transparent 50%), radial-gradient(at 0% 100%, #03000a 0px, transparent 50%), radial-gradient(at 87% 28%, #000000 0px, transparent 50%), radial-gradient(at 52% 60%, #0d024b 0px, transparent 50%), url(https://grainy-gradients.vercel.app/noise.svg)",
        filter: "contrast(120%) brightness(100%)",
        mixBlendMode: "add",
      }}
    >
      <Header />
      <Chat />
    </main>
  );
}
