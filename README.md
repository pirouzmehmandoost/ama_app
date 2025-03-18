This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is a function AI assistant with a barebones UI. Please read the TO-DO list below to review limitations!

## Deloyed with Vercel

Visit: https://ama-app-nu.vercel.app/

## Running locally

To run locally the development server, you must provide your own OpenAI API key in a .env file. Add your key to .env as OPENAI_API_KEY="..."

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tools Used

- Frameworks

  - [Next.js 15](https://nextjs.org/docs)
    - Using App Router pattern for routing for navigation, React Server Components for performant server-side rendering
  - [Vercel](https://vercel.com/) - for rapid deployment, analytics, and seamless integration with Next.js
  - [React v19](https://react.dev/blog/2024/12/05/react-19)

- AI

  - [Vercel AI SDK](https://sdk.vercel.ai/docs) - Extensive toolkit for supporting various AI SDK Providers.
  - [OpenAI](https://platform.openai.com/docs/overview) - Provider, language model support for OpenAI API's (completion, responses, chat, embeddings).
    - Current language model in use: GPT-4o-mini

- Styling

  - [Tailwind CSS v4](https://tailwindcss.com)
  - [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font)

- Data Persistence
  - [Vercel Blob](https://vercel.com/storage/blob) - For efficient file storage.
  - [Vercel Postgres powered by Neon](https://vercel.com/storage/postgres) - For saving chat history and metadata
  - [Neon](https://neon.tech) -[Neon pgvector extension](https://neon.tech/docs/extensions/pgvector) - LLM Embeddings can be stored in databases which support vectors. Postgres can be configured as a vector store with Neon's pgvector extension.

## Notes:

## State of the app as of Saturday, 10:24PM PST

- Users can chat and the agent will recall aforementioned prompts and response data.

## State of the app as of Sunday, 10:24PM PST

- Enabled tool calls- LLM can now leverage tools to handle discrete tasks (such as math, data fetching and formatting).

## State of the app as of Monday, 10:00PM PST

- Enabled multi-step tool calls which allow LLM to operate on results of prior calls.
- Set up Postgres database with Neon integration
- Added Neon pgvector extension enabling Postgres to store embeddings
- Set up Vercel Blob integration to store files

## To-dos:

## Write RAG chatbot logic-

Write logic to generate embeddings. Currently the LLM cannot be trained on new data, which is key to being a RAG assistant.

## Write logic to allow interactions with database.

Embeddings can be stored in databases which support vectors. Postgres can be configured as a vector store with Neon's pgvector extension.

## Enable file uploading-

Allow for users to upload CSV files and to migrate db on which RAG may train.

## Generate environmental report-

The asistant should prompt the user to either define the following list items, such as the title, or to generate based on uploaded content.

1.) Define the Purpose: Determine the specific focus of the report (e.g., climate change, pollution, biodiversity).

2.) Gather Data: Collect relevant data and statistics from credible sources. This may include scientific studies, government reports, and environmental organizations.

3.) Outline the Report- provide a chat message or file upload from which to generate the following:

- Title
- Introduction: Briefl introduction of the topic, its significance.
- Background Information: Provide context and relevant background data.
- Current Situation: Discuss the current state of the environment related to title.
- Impact Analysis: Analyze the effects of the current situation on ecosystems, human health, etc.
- Recommendations: Suggest actionable steps to address the issues.
- Conclusion: Summarize the key points and emphasize the importance of action.
- Bibliography

## generated environmental report-

Allow for file size formatting, downloading, messaging, email.

## Refine UI-

- Each numbered section noted above will be generatively added during interaction with the assistant.
- Generated elements such as text fields can be manually edited or revised by the assistant.
- Elements may be drag/dropped onto a grid layout.
- Tooltips and warnings should guide user during report generation.

I've placed this task as last on my list as the others require more time to learn new skillsets.
