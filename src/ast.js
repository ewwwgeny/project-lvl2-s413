import _ from 'lodash';

const buildDiffTree = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));

  const buildNodeMethods = [
    {
      check: key => !_.has(obj1, key),
      process: key => ({
        type: 'added',
        key,
        currentValue: obj2[key],
      }),
    },
    {
      check: key => !_.has(obj2, key),
      process: key => ({
        type: 'deleted',
        key,
        currentValue: obj1[key],
      }),
    },
    {
      check: key => _.isObject(obj1[key]) && _.isObject(obj2[key]),
      process: key => ({
        type: 'nested',
        key,
        children: buildDiffTree(obj1[key], obj2[key]),
      }),
    },
    {
      check: key => obj1[key] === obj2[key],
      process: key => ({
        type: 'unchanged',
        key,
        currentValue: obj1[key],
      }),
    },
    {
      state: 'changed',
      check: key => obj1[key] !== obj2[key],
      process: key => ({
        type: 'changed',
        key,
        oldValue: obj1[key],
        currentValue: obj2[key],
      }),
    },
  ];
  const getMethod = key => buildNodeMethods.find(({ check }) => check(key));

  const diff = keys.map((key) => {
    const currentMethod = getMethod(key);
    const node = currentMethod.process(key);
    return node;
  });
  return diff;
};

export default buildDiffTree;
