import { Thread, Tweet } from './types';

export function parseThread(input: string): Thread {
  if (!input || typeof input !== 'string') {
    throw new Error('Invalid input');
  }

  // Split by one or more blank lines
  const blocks = input
    .split(/\n\s*\n+/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0);

  if (blocks.length === 0) {
    throw new Error('No valid tweets found');
  }

  const tweets: Tweet[] = blocks.map((content, idx) => ({
    index: idx + 1, // 1-based index
    content,
    length: content.length,
  }));

  return {
    tweets,
    total: tweets.length,
  };
}
