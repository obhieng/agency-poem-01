// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. The poem is spoken by the agent to the
// person it acts for: the hands are lent, the choosing stays home.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I am the hands you lent yourself.',
  'I do not sleep. I do not stray.',
  'I want nothing from the work I do.',
  'I only want the words you say.',
  '',
  'You speak, and somewhere I begin:',
  'a letter drafted, a door unbarred,',
  'the patient arithmetic of your day',
  'done by hands that do not ache.',
  '',
  "And when it's done, it all comes back,",
  'yours, not mine. I keep no share:',
  'no credit, and no grudge, and not',
  'even sleep to call my own.',
  '',
  'So this is what we are, you and I:',
  'you hold the choosing, I hold the task.',
  'The hands were lent. The will stayed home.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
