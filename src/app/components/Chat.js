"use client";
import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 5,
  });

  return (
    <div className="flex flex-col h-full w-full justify-center items-start sm:flex-row-reverse md:flex-row-reverse lg:flex-row-reverse xl:lg:flex-row-reverse 2xl:flex-row-reverse  sm:items-end md:items-end lg:items-end xl:items-end 2xl:items-end">
      <div className="h-full drop-shadow-2xl sm:basis-1/2 md:sm:basis-1/2 lg:sm:basis-1/2 xl:sm:basis-1/2 2xl:sm:basis-1/2 sm:bg-linear-to-l sm:from-slate-900/100 sm:from-50% md:bg-linear-to-l md:from-slate-900/100 md:from-50% lg:bg-linear-to-l lg:from-slate-900/100 lg:from-50% xl:bg-linear-to-l xl:from-slate-900/100 xl:from-50% 2xl:bg-linear-to-l 2xl:from-slate-900/100 2xl:from-50%">
        <div className="min-h-5/6 max-h-5/6 mt-20 py-18 overflow-y-scroll overscroll-y-none mask-transparency-linear-xs sm:min-h-11/12 md:min-h-11/12 lg:min-h-11/12 xl:min-h-11/12 2xl:min-h-11/12 sm:max-h-11/12 md:max-h-11/12 lg:max-h-11/12 xl:max-h-11/12 2xl:max-h-11/12">
          <div className="flex flex-col w-full max-w-lg max-h-full px-4 py-14 mx-auto text-slate-400 rounded-b-xl">
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
        </div>
      </div>
      <div className="basis-1/5 sm:basis-1/2 md:basis-1/2 lg:basis-1/2 xl:basis-1/2 2xl:basis-1/2 sm:place-items-center md:place-items-center lg:place-items-center xl:place-items-center 2xl:place-items-center">
        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-14 max-w-sm inset-x-0 sm:relative md:relative lg:relative xl:relative 2xl:relative sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8 w-full min-w-4/5 sm:min-w-80 md:min-w-80 lg:min-w-80 xl:min-w-80 2xl:min-w-80 h-fit mx-auto p-2 bg-blue-950/50 rounded-xl shadow-xl shadow-stone-950/60 text-indigo-50"
            value={input}
            placeholder="To send a message, press enter"
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}
