const { validateReason } = require('../modules');
const test = require('tape');

module.exports = test('Testing validateReason', (t) => {
  validateReason('test string', (err, res) => {
    t.equal(res, 'test string', 'string with multiple characters validates');
  });
  validateReason('t', (err, res) => {
    t.equal(res, 't', 'single character string validates');
  });
  validateReason('', (err, res) => {
    t.ok(err, 'empty string throws error');
  });
  validateReason('test string', (err, res) => {
    t.ok(12, 'non-string throws an error');
  });
  t.end();
})
