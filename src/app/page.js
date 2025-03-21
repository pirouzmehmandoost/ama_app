"use client";
import { useChat } from "@ai-sdk/react";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 5,
  });
  return (
    <div className="w-dvw h-fit max-h-3/5 overflow-y-scroll mt-18 ">
      <div className="flex flex-col w-full max-w-md stretch min-h-0 max-h-3/5 px-4 py-14 mx-auto bg-blue-950/50 drop-shadow-xl text-indigo-150 rounded-b-xl">
        {messages.map((message) => (
          <div key={message.id} className="whitespace-pre-wrap">
            {message.role === "user" ? "User: " : "AI: "}
            {message.parts.map((part, i) => {
              switch (part.type) {
                case "text":
                  return <div key={`${message.id}-${i}`}>{part.text}</div>;
                case "tool-invocation":
                  return (
                    <pre key={`${message.id}-${i}`}>
                      {JSON.stringify(part.toolInvocation, null, 2)}
                    </pre>
                  );
              }
            })}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-10 inset-x-0 w-full max-w-md h-fit mx-auto p-2 bg-blue-950/50 rounded-xl shadow-xl shadow-stone-950/60 text-white"
          value={input}
          placeholder="Send a message"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

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
      <div className="fixed inset-x-0 z-1 top-0 w-full h-fit bg-blue-900/10 p-4 drop-shadow-2xl shadow-2xl backdrop-blur-2xl backdrop-opacity-40 text-4xl text-white text-center">
        <h1>CHAT</h1>
      </div>
      <div className="w-fit min-w-2/5 h-full ">
        <Chat />
      </div>
    </main>
  );
}
