import fs from 'fs';
import path from 'path';

import { parseThread } from '../core/parser';
import { validateThread } from '../core/validator';
import { publishThread } from '../core/publisher';

export async function runPrepare(args: string[]): Promise<void> {
  const filePath = args[0];

  if (!filePath) {
    console.error('Please provide a thread file.');
    process.exit(1);
  }

  const absolutePath = path.resolve(process.cwd(), filePath);

  if (!fs.existsSync(absolutePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const input = fs.readFileSync(absolutePath, 'utf-8');

  try {
    const thread = parseThread(input);
    validateThread(thread);

    await publishThread(thread);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unknown error while preparing thread.');
    }
    process.exit(1);
  }
}
