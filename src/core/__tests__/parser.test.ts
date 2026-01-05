import { describe, it, expect } from 'vitest';
import { parseThread } from '../parser';

describe('parseThread', () => {
  it('splits input into tweets by blank lines', () => {
    const input = `
Tweet one.

Tweet two.

Tweet three.
    `;

    const thread = parseThread(input);

    expect(thread.total).toBe(3);
    expect(thread.tweets[0].content).toBe('Tweet one.');
    expect(thread.tweets[1].content).toBe('Tweet two.');
    expect(thread.tweets[2].content).toBe('Tweet three.');
  });

  it('trims whitespace from each tweet', () => {
    const input = `
      Tweet one.

        Tweet two.
    `;

    const thread = parseThread(input);

    expect(thread.tweets[0].content).toBe('Tweet one.');
    expect(thread.tweets[1].content).toBe('Tweet two.');
  });

  it('throws if no valid tweets are found', () => {
    expect(() => parseThread('   \n\n   ')).toThrow();
  });
});
