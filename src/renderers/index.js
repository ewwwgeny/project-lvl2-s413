import renderPlain from './plainRenderer';
import renderTree from './treeRenderer';
import renderJSON from './jsonRenderer';

const renderMethods = {
  json: renderJSON,
  plain: renderPlain,
  tree: renderTree,
};

export default (ast, format) => renderMethods[format](ast);
