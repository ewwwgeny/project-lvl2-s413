export default ast => JSON.stringify(ast, (_key, value) => (
  typeof value === 'number' || typeof value === 'boolean' ? String(value) : value), '\t');
