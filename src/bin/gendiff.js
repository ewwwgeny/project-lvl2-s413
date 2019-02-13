#!/usr/bin/env node
import genDiff from '..';
import program from 'commander';

program
  .version('1.3.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig>  <secondConfig>')
  .action((firstConfig, secondConfig) => console.log(genDiff(firstConfig, secondConfig)))
  .parse(process.argv);
