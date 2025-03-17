This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Tools Used

- Frameworks

  - [Next.js](https://nextjs.org/docs)
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
  <!-- - [NextAuth.js](https://github.com/nextauthjs/next-auth) -->

## Notes:

## State of the app as of Saturday, 10:24PM PST

- Users can chat and the agent will recall afforementioned prompts and response data.

## State of the app as of Sunday, 10:24PM PST

- Enabled tool calls- LLM can now leverage tools to handle discrete tasks (such as math, data fetching and formatting).
- Enabled multi-step tool calls which allow LLM to operate on results of prior calls.

## How I'm currently structuring a generated environmental report-

1.) Define the Purpose: Determine the specific focus of the report (e.g., climate change, pollution, biodiversity).

2.) Gather Data: Collect relevant data and statistics from credible sources. This may include scientific studies, government reports, and environmental organizations.

3.) Outline the Report- provide the following:

- Title: A clear and concise title.
- Introduction: Briefly introduce the topic and its importance.
- Background Information: Provide context and relevant background data.
- Current Situation: Discuss the current state of the environment related to your topic.
- Impact Analysis: Analyze the effects of the current situation on ecosystems, human health, etc.
- Recommendations: Suggest actionable steps to address the issues.
- Conclusion: Summarize the key points and emphasize the importance of action.

  4.) Use GPT for Content Generation:
  You can prompt GPT to generate sections of the report based on your outline. For example:

- "Write an introduction about the impact of climate change on polar bears."
- "Summarize the current pollution levels in urban areas."

  5.) Edit and Refine: Review the generated content for accuracy, coherence, and flow. Make necessary adjustments to ensure it aligns with your objectives.

  6.) Cite Sources: Ensure that all data and claims are backed by credible sources, and include a bibliography if necessary.

  7.) Format the Report: Organize the content into a professional format, including headings, subheadings, and visuals if applicable.
