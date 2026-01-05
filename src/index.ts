#!/usr/bin/env node

import { runPrepare } from './cli/prepare';

const args = process.argv.slice(2);

const command = args[0];

if (command === 'prepare') {
  runPrepare(args.slice(1));
} else {
  console.log('Unknown command.');
  console.log('Usage: threadsmith prepare <file>');
}
