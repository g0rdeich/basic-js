const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let commands = ['--discard-next','--discard-prev','--double-next','--double-prev'];
  let res = [];
  if(typeof arr !== 'object') {
    throw new Error;
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      if(commands.includes(arr[i])) {
        let command = arr[i];
        switch (command) {
          case '--discard-next':
            if(i+1 < arr.length) {
            i++;
            }
            break
          case '--discard-prev':
            if(i>0 && arr[i-2] !== '--discard-next') {
            res.pop();
            }
            break
          case '--double-next':
            if(i+1 < arr.length) {
            res.push(arr[i+1]);
            }
            break
          case '--double-prev':
            if(i>0 && arr[i-2] !== '--discard-next') {
            res.push(arr[i-1]);
            }
            break
          default:
            break
        }
      }
      else {
        res.push(arr[i]);
      }
    }
  }
  return res;
}