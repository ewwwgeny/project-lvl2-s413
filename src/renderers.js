import _ from 'lodash';

const baseIndentForNode = 2;
const baseIndentForObject = baseIndentForNode * 2;

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const indentForData = ' '.repeat(baseIndentForObject * 2 + baseIndentForObject * depth);
  const indentForBrace = ' '.repeat(baseIndentForObject + baseIndentForObject * depth);
  const keys = Object.keys(value);
  const stringObj = keys.reduce((acc, key) => `${acc}${key}: ${value[key]}`, '');
  return `{\n${indentForData}${stringObj}\n${indentForBrace}}`;
};

const nodeRenderingMethods = {
  added: (node, depth, indent) => `${indent}+ ${node.key}: ${stringify(node.currentValue, depth)}`,
  deleted: (node, depth, indent) => `${indent}- ${node.key}: ${stringify(node.currentValue, depth)}`,
  unchanged: (node, depth, indent) => `${indent}  ${node.key}: ${stringify(node.currentValue, depth)}`,
  nested: (node, depth, indent, renderMethod) => `${indent}  ${node.key}: ${renderMethod(node.children, depth + 1)}`,
  changed: (node, depth, indent) => [
    `${indent}- ${node.key}: ${stringify(node.oldValue, depth)}`,
    `${indent}+ ${node.key}: ${stringify(node.currentValue, depth)}`,
  ],
};

const render = (ast, depth = 0) => {
  const indentForNode = ' '.repeat(baseIndentForNode + 2 * baseIndentForNode * depth);
  const indentForCloseBrace = ' '.repeat(2 * baseIndentForNode * depth);
  const joinedNodes = _.flattenDeep(ast
    .map(node => nodeRenderingMethods[node.type](node, depth, indentForNode, render)))
    .join('\n');
  return `{\n${joinedNodes}\n${indentForCloseBrace}}`;
};

export default render;
