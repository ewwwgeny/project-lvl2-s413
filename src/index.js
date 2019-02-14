import fs from 'fs';
import path from 'path';
import parse from './parsers';
import buildAST from './ast';
import render from './renderers';

const parseFile = (filepath) => {
  const ext = path.extname(filepath);
  const content = fs.readFileSync(filepath, 'utf-8');
  return parse(ext, content);
};

export default (path1, path2) => {
  const data1 = parseFile(path1);
  const data2 = parseFile(path2);

  const ast = buildAST(data1, data2);
  const result = render(ast);

  console.log(result);
  return result;
};
