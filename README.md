# threadsmith

A CLI tool to craft and publish threads with a guided, human-in-the-loop workflow.

---

## Why threadsmith exists

Writing thoughtful content is hard.  
Publishing it as a thread shouldn’t be.

Creating threads today often means:

- manually splitting content into tweets
- keeping track of order (1/n)
- repeated copy–paste
- replying to the correct previous tweet
- worrying about character limits

This adds unnecessary cognitive load and breaks flow.

**threadsmith removes that friction — without automating posting.**

---

## What threadsmith does

threadsmith helps you **publish threads calmly and correctly**.

It:

- takes a thread written as multiple blocks of text
- validates platform constraints (e.g. tweet length)
- guides you through publishing **one tweet at a time**
- copies each tweet to the clipboard (when available)
- degrades gracefully in headless environments

You stay in control.  
The tool handles the mechanics.

---

## What threadsmith does NOT do

threadsmith deliberately does **not**:

- auto-post to X or any platform
- handle authentication or APIs
- schedule content
- generate content
- optimize for reach or growth

This is a **workflow tool**, not a bot.

---

## Installation

```bash
git clone https://github.com/<your-username>/threadsmith.git
cd threadsmith
npm install
```

(For now, threadsmith is intended to be run locally from source.)

---

## Usage

Prepare a thread file where **each tweet is separated by a blank line**.

Example `thread.txt`:

```
Most apps don’t fail because of bad code.
They fail when users grow.

System design starts when traffic, failures,
and scale enter the picture.

Automation should remove friction,
not thinking.
```

Run:

```bash
npm run dev -- prepare thread.txt
```

---

## What happens next

threadsmith will:

1. Parse and validate the thread
2. For each tweet:
   - copy it to the clipboard (if available)
   - print it clearly in the terminal
   - wait for you to press **ENTER**
3. Move to the next tweet
4. Finish cleanly when done

In headless environments (containers, SSH), clipboard access is skipped and the tool falls back to manual copy.

---

## Supported environments

- macOS (clipboard supported)
- Linux desktop (clipboard supported)
- Linux containers / SSH (manual copy fallback)
- Windows (clipboard supported)

The behavior is explicit and predictable across environments.

---

## Project status

- v0: core workflow implemented
- CLI-first
- platform-agnostic thread model

Future improvements will remain intentionally minimal.

---

## Philosophy

> Automation should remove friction, not remove thinking.

threadsmith exists to support careful writing and intentional publishing — not to replace it.

---

## License

MIT
