import fs from 'fs';
import genDiff from '../src/bin/gendiff';

const relCfgPath1 = '__tests__/__fixtures__/before.json';
const relCfgPath2 = '__tests__/__fixtures__/after.json';
const relCfgPath3 = '__tests__/__fixtures__/before.yaml';
const relCfgPath4 = '__tests__/__fixtures__/after.yml';

const absCfgPath1 = '/home/user/hexlet/projects/2-lvl/__tests__/__fixtures__/before.json';
const absCfgPath2 = '/home/user//hexlet/projects/2-lvl/__tests__/__fixtures__/after.json';
const absCfgPath3 = '/home/user/hexlet/projects/2-lvl/__tests__/__fixtures__/before.yaml';
const absCfgPath4 = '/home/user//hexlet/projects/2-lvl/__tests__/__fixtures__/after.yml';

const pathToExpected = '__tests__/__fixtures__/expected';

test('relative paths, JSON', () => {
  expect(genDiff(relCfgPath1, relCfgPath2))
    .toEqual(fs.readFileSync(pathToExpected, 'utf-8'));
});

test('absolute paths, JSON', () => {
  expect(genDiff(absCfgPath1, absCfgPath2))
    .toEqual(fs.readFileSync(pathToExpected, 'utf-8'));
});

test('relative paths, YAML', () => {
  expect(genDiff(relCfgPath3, relCfgPath4))
    .toEqual(fs.readFileSync(pathToExpected, 'utf-8'));
});

test('absolute paths, YAML', () => {
  expect(genDiff(absCfgPath3, absCfgPath4))
    .toEqual(fs.readFileSync(pathToExpected, 'utf-8'));
});

/* test('absolute paths, YAML', () => {
  expect(genDiff(absCfgPath3, absCfgPath4).split('\n'))
    .toEqual(expect.arrayContaining(fs.readFileSync(pathToExpected, 'utf-8').split('\n')));
}); */
