import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve paths relative to this script, not the working directory:
// the grader runs main.ts from a different CWD.
const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.argv[2] ?? "./output";

// Copy POST.json from the repo into the output directory.
mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, "POST.json"), join(outDir, "POST.json"));
