#!/usr/bin/env node

import { program } from 'commander';
import init from './commands/init/index';

program.name('snack-cli').description('CLI').version('0.0.1');

program
  .command('init <name>')
  .description('init project')
  .option('-f, --force', 'force init')
  .action(init);

program.parse();
