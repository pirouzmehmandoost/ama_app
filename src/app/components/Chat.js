"use client";
import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 5,
  });

  return (
    <div className="w-fit min-w-2/5 h-full ">
      <div className="w-dvw min-h-0 max-h-2/3 overflow-y-scroll mt-18 ">
        <div className="flex flex-col w-full max-w-md stretch min-h-0 max-h-3/5 px-4 py-14 mx-auto bg-blue-950/50 drop-shadow-xl text-slate-400 rounded-b-xl">
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
            className="fixed bottom-10 inset-x-0 w-full max-w-md h-fit mx-auto p-2 bg-blue-950/50 rounded-xl shadow-xl shadow-stone-950/60 text-indigo-50"
            value={input}
            placeholder="Send a message"
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}
