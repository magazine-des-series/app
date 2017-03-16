class StringUtils {}

StringUtils.slug = function slug(initialStr) {
  let str = initialStr.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes
  return str;
};

exports.StringUtils = StringUtils;
