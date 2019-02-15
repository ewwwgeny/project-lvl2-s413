#!/usr/bin/env node
import genDiff from '..';
import program from 'commander';

program
  .version('1.5.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format', 'tree')
  .arguments('<firstConfig>  <secondConfig>')
  .action((firstConfig, secondConfig) => (
    console.log(genDiff(firstConfig, secondConfig, program.format))
  ))
  .parse(process.argv);
