import React from "react";
import { createRoot } from "react-dom/client";
import "@unocss/reset/tailwind-compat.css";
import "virtual:uno.css";
import "../node_modules/@empirica/core/dist/player.css";
import App from "./App";
import "./index.css";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://269679b764a48cc621b10a138afa4d8e@o4506525893853184.ingest.sentry.io/4506526324424704",
  integrations: [
    new Sentry.BrowserTracing({
        tracePropagationTargets: ["147.182.195.234:3000"],
    }),
    new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
   tracesSampleRate: 1.0,
   replaysSessionSampleRate: 0.1,
   replaysOnErrorSampleRate: 1.0,
 });

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

