// Renders scripts/og/og-image.html to client/public/og-image.png (1200×630)
// with a locally installed Edge or Chrome in headless mode.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..", "..");
const source = path.join(root, "scripts", "og", "og-image.html");
const target = path.join(root, "client", "public", "og-image.png");

const candidates = [
  process.env.BROWSER,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = candidates.find((p) => fs.existsSync(p));
if (!browser) {
  console.error("No Edge/Chrome found. Set BROWSER=/path/to/chrome and retry.");
  process.exit(1);
}

execFileSync(browser, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--force-device-scale-factor=1",
  "--virtual-time-budget=5000",
  "--window-size=1200,630",
  `--screenshot=${target}`,
  pathToFileURL(source).href,
]);

console.log(`Wrote ${path.relative(root, target)}`);
