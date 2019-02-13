import yaml from 'js-yaml';
import ini from 'ini';

const parsers = {
  '.yaml': yaml.safeLoad,
  '.yml': yaml.safeLoad,
  '.json': JSON.parse,
  '.ini': ini.parse,
};

export default (fileType, fileContent) => parsers[fileType](fileContent);
