import { Thread } from './types';

const MAX_TWEET_LENGTH = 280;

export function validateThread(thread: Thread): void {
  for (const tweet of thread.tweets) {
    if (tweet.length > MAX_TWEET_LENGTH) {
      throw new Error(
        `Tweet ${tweet.index} exceeds ${MAX_TWEET_LENGTH} characters (${tweet.length}).`
      );
    }
  }
}
