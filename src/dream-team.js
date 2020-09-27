const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  let result = '';
  if (typeof members !== 'object' || members === null) {
    return false;
  }
  else if(members.length === 0) {
    return null;
  }
  else {
    for(let i=0; i<members.length; i++) {
      if(typeof members[i] === 'string') {
        let newWord = members[i].trim();
        let letter = newWord[0].toUpperCase();
        result += letter;
      }
    }
  }
  return Array.from(result).sort().join('');
};
