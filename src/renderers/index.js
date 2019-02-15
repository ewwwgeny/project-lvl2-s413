import renderPlain from './plainRenderer';
import renderTree from './treeRenderer';

const renderMethods = {
  plain: renderPlain,
  tree: renderTree,
};

export default (ast, format) => renderMethods[format](ast);
