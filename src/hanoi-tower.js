const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1;
  let seconds = Math.floor(turns / (turnsSpeed/3600));
  let res = {};
  res.turns = turns;
  res.seconds = seconds;
  return res;
};
