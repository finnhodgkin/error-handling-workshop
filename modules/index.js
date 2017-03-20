const validateName = require('./validatename');
const validateAge = require('./validateage');
const validateEmail = require('./validateemail');
const validateReason = require('./validatereason');

const val1 = validateEmail('finnhodgkin@gmail.com....');

if (typeof val1 === 'error') {
  console.log(val1.message);
} else {
  console.log(val1);
}


module.exports = {
  validateName,
  validateAge,
  validateEmail,
  validateReason
}
