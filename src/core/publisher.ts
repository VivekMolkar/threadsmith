import readline from 'readline';
import clipboard from 'clipboardy';
import { Thread } from './types';

export async function publishThread(thread: Thread): Promise<void> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  for (const tweet of thread.tweets) {
    let clipboardAvailable = true;

    try {
      clipboard.writeSync(tweet.content);
    } catch {
      clipboardAvailable = false;
    }

    console.log('');

    if (clipboardAvailable) {
      console.log(`[${tweet.index}/${thread.total}] copied to clipboard`);
    } else {
      console.log(
        `[${tweet.index}/${thread.total}] clipboard unavailable — copy manually`
      );
    }

    console.log('----------------------------------------');
    console.log(tweet.content);
    console.log('----------------------------------------');
    console.log('→ Paste this tweet and post it.');
    console.log('→ Press ENTER to continue.');

    await waitForEnter(rl);
  }

  rl.close();

  console.log('');
  console.log('✅ Thread complete. All tweets published.');
}

function waitForEnter(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    rl.question('', () => resolve());
  });
}
