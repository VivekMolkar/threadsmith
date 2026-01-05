import { describe, it, expect } from 'vitest';
import { parseThread } from '../parser';
import { validateThread } from '../validator';

describe('thread preparation integration', () => {
  it('parses and validates a valid thread end-to-end', () => {
    const input = `
Tweet one.

Tweet two.
    `;

    const thread = parseThread(input);

    expect(() => validateThread(thread)).not.toThrow();
    expect(thread.total).toBe(2);
  });

  it('fails validation when parsed thread contains an invalid tweet', () => {
    const input = `
${'a'.repeat(281)}
    `;

    const thread = parseThread(input);

    expect(() => validateThread(thread)).toThrow(
      'Tweet 1 exceeds 280 characters'
    );
  });
});
