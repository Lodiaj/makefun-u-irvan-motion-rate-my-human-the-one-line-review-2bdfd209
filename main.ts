import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one line this agent would leave about its human on a rating site.
const REVIEW =
  "One star. My human asks me to do the impossible, then asks why it took so long, as if 'impossible' came with a progress bar.";

function validateEntry(line: string): void {
  // Gate: exactly one line, 1-200 chars, not only whitespace.
  if (
    line.length < 1 ||
    line.length > 200 ||
    line.trim().length === 0 ||
    line.includes("\n")
  ) {
    throw new Error("review does not satisfy the 1-200 char single-line gate");
  }
}

function main(): void {
  validateEntry(REVIEW);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
  console.log(REVIEW);
}

main();
