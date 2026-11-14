// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. A person asks the agent to write an apology
// to an estranged brother; the perfect draft is worthless because it is not
// theirs, so they delete it and write three crooked lines of their own.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'At two in the morning the agent wrote it for me,',
  'the apology, perfect, every word in place,',
  'the years folded neatly, the blame apportioned,',
  'no sentence longer than it had to be.',
  '',
  'I read it twice. It was flawless. It was nothing.',
  'It sounded like a man who had never once',
  'raised his voice in a kitchen, never left',
  'a door to close itself behind him.',
  '',
  'So I deleted it, and wrote it wrong:',
  'three lines, one of them starting over,',
  'his name spelled wrong, the way I spelled it',
  'when we were boys.',
  '',
  'Forgive me. I was wrong. Come back',
  'to the table, the porch light, the argument',
  'we never finished.',
  '',
  'He wrote back before the coffee cooled.',
  "Not 'it's fine.' Not 'all is forgiven.'",
  "He wrote: the porch light's on.",
  'I cried. Then I went out and stood under it.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
