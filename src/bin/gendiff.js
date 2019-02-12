#!/usr/bin/env node
import genDiff from '..';
import program from 'commander';

export default genDiff;

program
  .version('1.1.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig>  <secondConfig>')
  .action((firstConfig, secondConfig) => genDiff(firstConfig, secondConfig))
  .parse(process.argv);
