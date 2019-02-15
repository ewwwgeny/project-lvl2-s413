import renderPlain from './plainRenderer';
import renderTree from './treeRenderer';

const renderMethods = {
  json: ast => JSON.stringify(ast, (_key, value) => (
    typeof value === 'number' || typeof value === 'boolean' ? String(value) : value), '\t'),
  plain: renderPlain,
  tree: renderTree,
};

export default (ast, format) => renderMethods[format](ast);
