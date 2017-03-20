// String (valid email address)
const validateEmail = (email, cb) => {
  if (typeof email !== 'string') {
    cb(new Error(`${email}: not a string!`));
  }
  else if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi)) {
    cb(new Error(`${email} is not a valid email`));
  }
  else {
    cb(null, email);
  }
}

module.exports = validateEmail;
