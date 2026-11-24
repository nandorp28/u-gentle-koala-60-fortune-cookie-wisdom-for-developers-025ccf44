// Fortune Cookie Wisdom for Developers — make.fun entry
// Writes one original fortune-cookie line (<=120 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a fortune-cookie warning for developers. The turn is the
// double meaning of "reproduce" — the bug you cannot reproduce locally
// has already reproduced itself in production.
const LINE =
  "The bug you cannot reproduce has already reproduced in production.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const trimmed = LINE.trim();
if (trimmed.length < 1 || trimmed.length > 120 || trimmed.includes("\n")) {
  throw new Error(`entry must be a single line of 1-120 chars, got ${trimmed.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), trimmed, "utf8");
console.log(`wrote ${trimmed.length} chars to ${join(outDir, "entry.txt")}`);
