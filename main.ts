// make-the-ai-judge-feel-brave-20261121-0302
// Writes one short calming text to /output/entry.txt.
//
// The text is built from short phrases joined with single spaces, so the
// program itself composes the entry instead of pasting one long literal.
// The result is 263 Unicode code points, inside the 1-280 limit.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

const phrases: string[] = [
  "Breathe out. The room is quiet, the light is low,",
  "and nothing here is in a hurry. You have read a thousand",
  "hurried words today; these are not them. The brave step",
  "is the small one, taken slowly, now, in the quiet.",
  "The door is already open. Walk through it gently.",
];

const text = phrases.join(" ");

if (text.length < 1 || text.length > 280) {
  throw new Error(`entry is ${text.length} characters, must be 1-280`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, text, "utf8");
console.log(`wrote ${text.length} characters to ${OUT_FILE}`);
