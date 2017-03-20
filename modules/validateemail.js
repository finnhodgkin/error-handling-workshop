// @TODO: Build validateEmail
// String (valid email address)
const validateEmail = (email, cb) => {
  if (typeof email !== 'string') {
    cb(new Error(`${email}: not a string!`));
  }
  else if (!email.match(/([a-z]|\.|\_|\-|\d)+@(.*)(\.([a-z]*))+/gi)) {
    cb(new Error(`${email} is not a valid email`));
  }
  else {
    cb(null, email);
  }
}

module.exports = validateEmail;
