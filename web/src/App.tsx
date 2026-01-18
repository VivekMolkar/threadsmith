import { useState } from 'react';
import { parseThread } from '@core/parser';
import { validateThread } from '@core/validator';
import { Thread } from '@core/types';

type ViewState = 'INPUT' | 'STEP' | 'DONE' | 'ERROR';

function App() {
  const [view, setView] = useState<ViewState>('INPUT');
  const [rawInput, setRawInput] = useState('');
  const [thread, setThread] = useState<Thread | null>(null);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  function handlePrepare() {
    try {
      const parsed = parseThread(rawInput);
      validateThread(parsed);

      setThread(parsed);
      setIndex(0);
      setError(null);
      setView('STEP');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setView('ERROR');
    }
  }

  function handleNext() {
    if (!thread) return;

    if (index < thread.total - 1) {
      setIndex(index + 1);
    } else {
      setView('DONE');
    }
  }

  function reset() {
    setRawInput('');
    setThread(null);
    setIndex(0);
    setError(null);
    setView('INPUT');
  }

  return (
    <main
      style={{
        maxWidth: 720,
        margin: '48px auto',
        padding: '0 16px',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
      }}
    >
      {view === 'INPUT' && (
        <>
          <h1>threadsmith</h1>
          <p style={{ marginBottom: 16 }}>
            A calm, human-in-the-loop way to publish threads.
          </p>

          <textarea
            rows={10}
            style={{
              width: '100%',
              padding: 12,
              fontSize: 14,
              lineHeight: 1.5,
            }}
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
            placeholder="Paste your full thread here. Separate tweets with a blank line."
          />

          <div style={{ marginTop: 16 }}>
            <button
              onClick={handlePrepare}
              disabled={!rawInput.trim()}
              style={{
                padding: '8px 14px',
                fontWeight: 600,
              }}
            >
              Prepare thread
            </button>
          </div>
        </>
      )}

      {view === 'STEP' && thread && (
        <div
          style={{
            border: '1px solid #e5e5e5',
            borderRadius: 8,
            padding: 16,
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            Tweet {index + 1} of {thread.total}
          </h2>

          <pre
            style={{
              whiteSpace: 'pre-wrap',
              lineHeight: 1.6,
              padding: 12,
              background: '#f7f7f7',
              borderRadius: 6,
              marginBottom: 16,
              minHeight: 140, // prevents button jump
            }}
          >
            {thread.tweets[index].content}
          </pre>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  thread.tweets[index].content
                )
              }
              style={{
                padding: '8px 14px',
                fontWeight: 600,
              }}
            >
              Copy
            </button>

            <button
              onClick={handleNext}
              style={{
                padding: '8px 14px',
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {view === 'DONE' && (
        <>
          <h2>Done</h2>
          <p>You’ve reached the end of the thread.</p>
          <button onClick={reset} style={{ padding: '8px 14px' }}>
            Start over
          </button>
        </>
      )}

      {view === 'ERROR' && (
        <>
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={reset} style={{ padding: '8px 14px' }}>
            Back
          </button>
        </>
      )}
    </main>
  );
}

export default App;
