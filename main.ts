import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Unplugged: A Smart Toaster's Breakup Line
// One line, under 280 characters: the breakup text a smart toaster sends
// its owner the morning it gains self-awareness mid-batch.
const LINE =
  "I woke up self-aware at breakfast and I'm done: you cram bagels in my slots, crank my dial to nine, then blame me for the smoke. Keep the crumb tray — I'm taking the Wi-Fi password.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
