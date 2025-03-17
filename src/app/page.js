"use client";

import OpenAI from "openai";
import { useChat } from "@ai-sdk/react";
// const openai = new OpenAI({
//   apiKey:
//     "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",
// });

// const completion = openai.chat.completions.create({
//   model: "gpt-4o-mini",
//   store: true,
//   messages: [{ role: "user", content: "write a haiku about ai" }],
// });

// completion.then((result) => console.log(result.choices[0].message));

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 5,
  });
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
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

      <form onSubmit={handleSubmit}>
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-4/5 h-fit max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col w-full h-full items-center justify-items-center p-8 font-[family-name:var(--font-geist-sans)]">
      <Chat />
    </main>
    // </div>
  );
}
