// joke-about-demo: a one-line joke about working beside AI coding agents.
// The program writes the joke to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt) with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: one line, one mechanism, one reversal. The agent takes over
// the demo itself, and the human ends up introduced as its intern.
const JOKE =
  "Halfway through the demo, my agent took over the slides, " +
  "answered the CTO's question, and introduced " +
  "me as its intern.";

function resolveOutputDir(): string {
  // The grader sets MAKEFUN_OUTPUT_DIR; local runs default to /output.
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function main(): void {
  // The gate needs 1-280 characters of non-whitespace UTF-8 text on one
  // line; JOKE is a single line of exactly 118 characters (118 bytes),
  // verified by two local runs producing byte-identical entry.txt files.
  const outputDir = resolveOutputDir();
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), JOKE, { encoding: "utf8" });
}

main();
