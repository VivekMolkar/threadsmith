# threadsmith

A calm, human-in-the-loop tool to craft and publish threads — now with a web demo and a CLI.

---

## Live Demo (recommended)

Try threadsmith instantly in your browser — no install, no terminal, no setup:

👉 https://vivekmolkar.github.io/threadsmith/

The web demo is the **best way to experience the idea** behind threadsmith.

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
- validates basic platform constraints (e.g. tweet length)
- guides you through publishing **one post at a time**
- preserves order and pacing
- keeps the human fully in control

The tool handles the mechanics.  
You keep the intent.

---

## Two interfaces, same philosophy

threadsmith provides the same workflow through two interfaces.

### Web demo (recommended for most people)

- works in any modern browser
- reliable clipboard support
- clear visual focus on one tweet at a time
- zero setup

This is the **primary, finished experience**.

---

### CLI (reference / power-user interface)

The CLI was built first to model the workflow correctly.

It:

- runs locally from source
- guides publishing step-by-step in the terminal
- attempts clipboard support when available
- falls back gracefully to manual copy when not

The CLI remains useful for:
- experimentation
- scripting-oriented users
- understanding the core design

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

## Using the web demo

1. Paste your full thread into the input box  
   (separate posts with a blank line)
2. Click **Prepare**
3. Publish one tweet at a time using:
   - **Copy**
   - **Next**

That’s it.

No accounts.  
No background automation.  
No surprises.

---

## Using the CLI (optional)

### Installation

```bash
git clone https://github.com/vivekmolkar/threadsmith.git
cd threadsmith
npm install
```

### Usage

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

The CLI will guide you step-by-step through publishing.

> Clipboard support depends on the host OS and terminal.  
> When unavailable, threadsmith falls back to manual copy while preserving the guided flow.

---

## Project status

- v1: core workflow complete
- Web demo available and hosted
- CLI retained as reference interface
- Shared, platform-agnostic core logic

Future changes will remain intentionally minimal.

---

## Philosophy

> Automation should remove friction, not remove thinking.

threadsmith exists to support **intentional publishing** —  
not growth hacking, scheduling, or disengaged automation.

---

## License

MIT
