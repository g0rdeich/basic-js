const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let res = '';
  let newStr = str;
  let sep = '+';
  if(options.separator !== undefined) {
    sep = options.separator;
  }
  if(options.addition !== undefined) {
    newStr = str + options.addition;
  }
  for(let i = 0; i < options.repeatTimes-1; i++) {
    res += `${newStr}${sep}`;
  }
  res += newStr;

  return res;
};
  