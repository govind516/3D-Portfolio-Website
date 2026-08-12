import React from "react";
import { renderToString } from "react-dom/server";
import { readFile, writeFile, rm } from "node:fs/promises";

const { default: App } = await import("../dist-ssr/App.js");

try {
  const appHtml = renderToString(React.createElement(App));

  const file = await readFile("dist/index.html", "utf8");
  const output = file.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  await writeFile("dist/index.html", output);

  console.log("Pre-rendered app markup into dist/index.html");
} finally {
  await rm("dist-ssr", { recursive: true, force: true });
}