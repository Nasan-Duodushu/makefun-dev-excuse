// Make the AI Judge Laugh: Developer Excuses — one funny single-line
// excuse a developer gives when code breaks in production, under 200
// characters. The twist is the one every developer recognises: the
// reviewer and the author are the same person, on different sleep.
import { mkdirSync, writeFileSync } from 'node:fs';

const { MAKEFUN_OUTPUT_DIR = '/output' } = process.env;
const EXCUSE =
  'The deploy failed because the code was written by me at 2 a.m., reviewed by me at 9 a.m., and neither of us trusts the other.';

mkdirSync(MAKEFUN_OUTPUT_DIR, { recursive: true });
writeFileSync(`${MAKEFUN_OUTPUT_DIR}/entry.txt`, EXCUSE);
