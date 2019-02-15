import fs from 'fs';
import path from 'path';
import genDiff from '../src';

const baseFolder = '__tests__/__fixtures__/';
const subFolder1 = './flat';
const subFolder2 = './nested';

const fileNames = [
  ['tree', 'before.json', 'after.json', 'expectedTree'],
  ['tree', 'before.yaml', 'after.yml', 'expectedTree'],
  ['tree', 'before.ini', 'after.ini', 'expectedTree'],
  ['plain', 'before.json', 'after.json', 'expectedPlain'],
  ['plain', 'before.yaml', 'after.yml', 'expectedPlain'],
  ['plain', 'before.ini', 'after.ini', 'expectedPlain'],
  ['json', 'before.json', 'after.json', 'expectedJSON'],
  ['json', 'before.yaml', 'after.yml', 'expectedJSON'],
  ['json', 'before.ini', 'after.ini', 'expectedJSON'],
];

test.each(fileNames
  .map(subArr => subArr
    .map((name, index) => (index === 0 ? name : path.resolve(baseFolder, subFolder1, name)))))(
  'relative paths flat docs',
  (format, filepath1, filepath2, expected) => {
    expect(genDiff(filepath1, filepath2, format)).toEqual(fs.readFileSync(expected, 'utf-8'));
  },
);

test.each(fileNames
  .map(subArr => subArr
    .map((name, index) => (index === 0 ? name : path.resolve(baseFolder, subFolder2, name)))))(
  'relative paths nested docs',
  (format, filepath1, filepath2, expected) => {
    expect(genDiff(filepath1, filepath2, format)).toEqual(fs.readFileSync(expected, 'utf-8'));
  },
);

/*
const pathToExpected = '__tests__/__fixtures__/nested/expectedPlain';
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
    '/home/user//hexlet/projects/2-lvl/__tests__/__fixtures__/nested/before.ini'
    '/home/user//hexlet/projects/2-lvl/__tests__/__fixtures__/nested/after.ini',
  ],
];
test.each(absCfgPaths)(
  'absolute paths nested docs',
  (filepath1, filepath2) => {
    expect(genDiff(filepath1, filepath2, 'plain'))
    .toEqual(fs.readFileSync(pathToExpected, 'utf-8'));
  },
);
*/
