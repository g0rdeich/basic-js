const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result;
  let k = 0.693/HALF_LIFE_PERIOD;
  if((typeof sampleActivity !== 'string') || isNaN (parseFloat(sampleActivity)) ||
      (parseFloat(sampleActivity)>MODERN_ACTIVITY) || (parseFloat(sampleActivity) <= 0)) {
    return false;
  }
  else {
    result = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
    return result;
  }
};
