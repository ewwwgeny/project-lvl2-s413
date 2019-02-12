import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parse from './parsers';

const readFileWithEtx = (filepath) => {
  const ext = path.extname(filepath);
  const content = fs.readFileSync(filepath, 'utf-8');
  return [ext, content];
};

export default (path1, path2) => {
  const [ext1, content1] = readFileWithEtx(path1);
  const [ext2, content2] = readFileWithEtx(path2);
  const obj1 = parse(ext1, content1);
  const obj2 = parse(ext2, content2);

  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const diff = keys.reduce((acc, key) => {
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
  // console.log(`{${diff}\n}\n`);
  return `{${diff}\n}\n`;
};
