const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let res;
  if(Object.prototype.toString.call(date) === '[object Date]') {
    let month = date.getMonth();
    if((month >= 0 && month <= 1) || month === 11) {
      res = 'winter';
    }
    else if(month >= 2 && month <= 4) {
      res = 'spring';
    }
    else if(month >= 5 && month <= 7) {
      res = 'summer';
    }
    else  {
      res = 'autumn';
    }
  }
  else if(date === undefined) {
    res = 'Unable to determine the time of year!';
  }
  else {
    throw new Error;
  }
  return res;
}