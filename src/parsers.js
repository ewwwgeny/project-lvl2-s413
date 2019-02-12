// import _ from 'lodash';
import yaml from 'js-yaml';

const parsers = {
  '.yaml': yaml.safeLoad,
  '.yml': yaml.safeLoad,
  '.json': JSON.parse,
};

export default (fileType, fileContent) => parsers[fileType](fileContent);
