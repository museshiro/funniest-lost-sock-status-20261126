import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Lost Sock Status Update — one status update, max 120 chars,
// in the voice of a lost sock that ended up somewhere it should not be.
const LINE =
  "Update: I'm lining a bowling shoe now. Four hundred strangers' feet a week. The dryer was a spa compared to this.";

// The gate allows 1-120 characters; refuse to write anything over it
// rather than silently submitting an invalid entry.
if (LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-120 chars, got ${LINE.length}`);
}

// The entry writes ONLY to /output/entry.txt. No relative file writes:
// the grader sandbox runs with a read-only working directory, so a
// relative write would throw and fail the run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
