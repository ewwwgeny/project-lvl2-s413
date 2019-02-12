import fs from 'fs';
import diff from '../bin/gendiff';

const relCfgPath1 = 'src/__tests__/__fixtures__/before.json';
const relCfgPath2 = 'src/__tests__/__fixtures__/after.json';

// const absCfgPath1 = '/home/user/hexlet/projects/2-lvl/src/__tests__/__fixtures__/before.json';
// const absCfgPath2 = '/home/user//hexlet/projects/2-lvl/src/__tests__/__fixtures__/after.json';

const expected = fs.readFileSync('src/__tests__/__fixtures__/expected', 'utf-8');

test('relative paths', () => {
  expect(diff(relCfgPath1, relCfgPath2).split('\n')).toEqual(expect.arrayContaining(expected.split('\n')));
});

/* test('absolute paths', () => {
//   expect(diff(absCfgPath1, absCfgPath2).split('\n'))
      .toEqual(expect.arrayContaining(expected.split('\n')));
}); */
