import { mkdirSync, writeFileSync } from "node:fs";

// Unsent: The Micro-Confession Sprint — a two-part micro-confession.
// Line 1 names who the unsent message was meant for; line 2 is the
// message itself, written exactly as it was typed, one line, no
// explanation after it.
const entry = [
  "To: my sister, who paid my rent in March",
  "i told everyone i got the promotion. you're the only one who knows i got fired",
].join("\n");

// Gate self-check: 1–260 characters total, message line at most 200.
const lines = entry.split("\n");
if (entry.length < 1 || entry.length > 260) {
  throw new Error(`entry length ${entry.length} outside 1-260`);
}
if (lines.length !== 2 || lines[1].length > 200) {
  throw new Error("entry must be exactly two lines with a message of at most 200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote /output/entry.txt (${entry.length} characters)`);
