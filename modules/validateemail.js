// @TODO: Build validateEmail
// String (valid email address)
const validateEmail = (email) => {
  if (typeof email !== 'string') {
    return new Error(`${email}: not a string!`);
  }
  else if (!email.match(/([a-z]|\.|\_|\-|\d)+@(.*)(\.([a-z]*))+/gi)) {
    return new Error(`${email} is not a valid email`);
  }
  else {
    return email;
  }
}

module.exports = validateEmail;
