import fs from 'fs';
import genDiff from '../src';

const pathToExpected = '__tests__/__fixtures__/expected';

const relCfgPaths = [
  ['__tests__/__fixtures__/before.json', '__tests__/__fixtures__/after.json'],
  ['__tests__/__fixtures__/before.yaml', '__tests__/__fixtures__/after.yml'],
  ['__tests__/__fixtures__/before.ini', '__tests__/__fixtures__/after.ini'],
];
test.each(relCfgPaths)(
  'relative paths',
  (before, after) => {
    expect(genDiff(before, after)).toEqual(fs.readFileSync(pathToExpected, 'utf-8'));
  },
);
/*
const absCfgPaths = [
  [
    '/home/user/hexlet/projects/2-lvl/__tests__/__fixtures__/before.json',
    '/home/user//hexlet/projects/2-lvl/__tests__/__fixtures__/after.json',
  ],
  [
    '/home/user/hexlet/projects/2-lvl/__tests__/__fixtures__/before.yaml',
    '/home/user//hexlet/projects/2-lvl/__tests__/__fixtures__/after.yml',
  ],
  [
    '/home/user//hexlet/projects/2-lvl/__tests__/__fixtures__/before.ini',
    '/home/user//hexlet/projects/2-lvl/__tests__/__fixtures__/after.ini',
  ],
];
test.each(absCfgPaths)(
  'absolute paths',
  (before, after) => {
    expect(genDiff(before, after)).toEqual(fs.readFileSync(pathToExpected, 'utf-8'));
  },
);
*/

/*
test('absolute paths, YAML', () => {
  expect(genDiff(absCfgPath3, absCfgPath4).split('\n'))
    .toEqual(expect.arrayContaining(fs.readFileSync(pathToExpected, 'utf-8').split('\n')));
});
*/
