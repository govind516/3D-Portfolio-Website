import { createServer } from "vite";
import React from "react";
import { renderToString } from "react-dom/server";
import { readFile, writeFile } from "node:fs/promises";

const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const appHtml = renderToString(React.createElement(App));

  const file = await readFile("dist/index.html", "utf8");
  const output = file.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  await writeFile("dist/index.html", output);

  console.log("Pre-rendered app markup into dist/index.html");
} finally {
  await server.close();
}