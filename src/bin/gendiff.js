#!/usr/bin/env node


const program = require('commander');

program
  .version('1.0.3')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig>  <secondConfig>')
  .parse(process.argv);
