// String (any non-empty string of any length)
const validateReason = (reason, cb) => {
  if (typeof reason !== 'string') {
    cb(new Error(`${reason}: not a string!`));
  }
  else if (!reason.length) {
    cb(new Error(`${reason}: is an empty string!`));
  }
  else {
    cb(null, reason);
  }
}

module.exports = validateReason;
