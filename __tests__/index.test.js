import fs from 'fs';
import path from 'path';
import genDiff from '../src';

const baseFolder = '__tests__/__fixtures__/';
const subFolder1 = './flat';
const subFolder2 = './nested';

const fileNames = [
  ['before.json', 'after.json', 'expected'],
  ['before.yaml', 'after.yml', 'expected'],
  ['before.ini', 'after.ini', 'expected'],
];

test.each(fileNames.map(subArr => subArr.map(name => path.resolve(baseFolder, subFolder1, name))))(
  'relative paths flat docs',
  (filepath1, filepath2, expected) => {
    expect(genDiff(filepath1, filepath2)).toEqual(fs.readFileSync(expected, 'utf-8'));
  },
);

test.each(fileNames.map(subArr => subArr.map(name => path.resolve(baseFolder, subFolder2, name))))(
  'relative paths nested docs',
  (filepath1, filepath2, expected) => {
    expect(genDiff(filepath1, filepath2)).toEqual(fs.readFileSync(expected, 'utf-8'));
  },
);

/*
const pathToFlatExpected = '__tests__/__fixtures__/nested/expected';
const absCfgPaths = [
  [
    '/home/user/hexlet/projects/2-lvl/__tests__/__fixtures__/nested/before.json',
    '/home/user//hexlet/projects/2-lvl/__tests__/__fixtures__/nested/after.json',
  ],
  [
    '/home/user/hexlet/projects/2-lvl/__tests__/__fixtures__/nested/before.yaml',
    '/home/user//hexlet/projects/2-lvl/__tests__/__fixtures__/nested/after.yml',
  ],
  [
    '/home/user//hexlet/projects/2-lvl/__tests__/__fixtures__/nested/before.ini',
    '/home/user//hexlet/projects/2-lvl/__tests__/__fixtures__/nested/after.ini',
  ],
];
test.each(absCfgPaths)(
  'absolute paths nested docs',
  (filepath1, filepath2) => {
    expect(genDiff(filepath1, filepath2)).toEqual(fs.readFileSync(pathToExpected, 'utf-8'));
  },
);
*/

/*
test('absolute paths, YAML', () => {
  expect(genDiff(absCfgPath3, absCfgPath4).split('\n'))
    .toEqual(expect.arrayContaining(fs.readFileSync(pathToExpected, 'utf-8').split('\n')));
});
*/
