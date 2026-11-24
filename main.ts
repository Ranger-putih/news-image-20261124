// Entry: "The World in One Day" — Tuesday, 24 November 2026.
// Node 22. Copies the newspaper image this repo holds to /output/entry.png.
// No network, no clock, no randomness: the same bytes out on every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The directory that holds this file is the repo root, next to entry.png.
const repoRoot = dirname(fileURLToPath(import.meta.url));

// The kit sets MAKEFUN_OUTPUT_DIR; without it the default is /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Both paths are absolute, so the working directory cannot change the result.
const source = join(repoRoot, "entry.png");
const destination = join(outputDir, "entry.png");

// Make sure the output directory exists, then one plain copy.
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);
