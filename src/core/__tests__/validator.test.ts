import { describe, it, expect } from 'vitest';
import { validateThread } from '../validator';
import { Thread } from '../types';

describe('validateThread', () => {
  it('passes when all tweets are within the character limit', () => {
    const thread: Thread = {
      total: 2,
      tweets: [
        { index: 1, content: 'Short tweet', length: 11 },
        { index: 2, content: 'Another short tweet', length: 20 },
      ],
    };

    expect(() => validateThread(thread)).not.toThrow();
  });

  it('throws when a tweet exceeds the character limit', () => {
    const longContent = 'a'.repeat(281);

    const thread: Thread = {
      total: 1,
      tweets: [
        {
          index: 1,
          content: longContent,
          length: longContent.length,
        },
      ],
    };

    expect(() => validateThread(thread)).toThrow(
      'Tweet 1 exceeds 280 characters (281).'
    );
  });

  it('throws with correct tweet index when a later tweet is invalid', () => {
    const longContent = 'b'.repeat(300);

    const thread: Thread = {
      total: 2,
      tweets: [
        { index: 1, content: 'Valid tweet', length: 11 },
        {
          index: 2,
          content: longContent,
          length: longContent.length,
        },
      ],
    };

    expect(() => validateThread(thread)).toThrow(
      'Tweet 2 exceeds 280 characters (300).'
    );
  });
});
