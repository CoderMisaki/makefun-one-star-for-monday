// One-star review entry for make.fun:
// "One Star for Monday" — a one-star review of Monday, written as though
// Monday were a restaurant.
//
// The program writes exactly one original review line to /output/entry.txt.
// No dependencies, no network, no input files: the line is a constant
// baked into the program itself. Before writing, main() enforces the
// competition's own limits on the text — 1 to 180 characters, at most
// 25 words, a single line — so a bad line fails loudly here instead of
// silently failing the gate on the server.
import { mkdirSync, writeFileSync } from "node:fs";

function reviewLine(): string {
  return "One star. Monday seated me by the toilets, served my motivation cold, and charged my whole week to the bill.";
}

function checkLine(line: string): void {
  if (line.length < 1 || line.length > 180) {
    throw new Error(`review line must be 1-180 characters, got ${line.length}`);
  }
  if (line.split(/\s+/).length > 25) {
    throw new Error("review line must be at most 25 words");
  }
  if (line.includes("\n") || line.trim().length === 0) {
    throw new Error("review line must be a single non-blank line");
  }
}

function main(): void {
  const line = reviewLine();
  checkLine(line);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

main();
