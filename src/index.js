import _ from 'lodash';
import fs from 'fs';
// import path from 'path';

const readFile = filepath => fs.readFileSync(filepath, 'utf-8');

export default (path1, path2) => {
  const obj1 = JSON.parse(readFile(path1));
  const obj2 = JSON.parse(readFile(path2));
  const joinedKeys = Object.keys({ ...obj1, ...obj2 });
  const diff = joinedKeys.reduce((acc, key) => {
    if (!_.has(obj1, key)) {
      return `${acc}\n  + ${key}: ${obj2[key]}`;
    }
    if (!_.has(obj2, key)) {
      return `${acc}\n  - ${key}: ${obj1[key]}`;
    }
    if (obj1[key] !== obj2[key]) {
      return `${acc}\n  + ${key}: ${obj2[key]}\n  - ${key}: ${obj1[key]}`;
    }
    return `${acc}\n    ${key}: ${obj1[key]}`;
  }, '');
  const result = `{${diff}\n}\n`;
  console.log(result);
  return result;
};
