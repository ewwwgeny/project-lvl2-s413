import _ from 'lodash';

const addSep = key => '.'.repeat(key.length).slice(0, 1);// (key.length > 0 ? '.' : ''); separator for properthies paths
const stringify = (value) => {
  if (_.isObject(value)) return '[complex value]';
  return _.isNaN(_.toNumber(value)) || typeof value === 'boolean' ? `'${value}'` : value;
};

const nodeRenderingMethods = {
  added: (node, key) => `Property '${key}${addSep(key)}${node.key}' was added with value: ${stringify(node.currentValue)}`,
  deleted: (node, key) => `Property '${key}${addSep(key)}${node.key}' was removed`,
  nested: (node, key, renderMethod) => renderMethod(node.children, `${key}${addSep(key)}${node.key}`),
  changed: (node, key) => (
    `Property '${key}${addSep(key)}${node.key}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.currentValue)}`
  ),
};

const render = (ast, key = '') => _.flattenDeep(
  ast
    .filter(node => node.type !== 'unchanged')
    .map(node => nodeRenderingMethods[node.type](node, key, render)),
).join('\n');

export default render;
