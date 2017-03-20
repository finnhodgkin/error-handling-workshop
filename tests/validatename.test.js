const { validateName } = require('../modules');
const test = require('tape');

module.exports = test('Testing validateName', (t) => {
  validateName('finn', (err, res) => {
    t.equal(res, 'finn', 'finn should validate correctly');
  });
  validateName('finn-hodgkin', (err, res) => {
    t.equal(res, 'finn-hodgkin', 'finn-hodgkin should validate correctly');
  });
  validateName('finn-webb-new\'ell-hodgkin', (err, res) => {
    t.equal(res, 'finn-webb-new\'ell-hodgkin', 'Long name with hyphens and apostrophes should validate');
  });
  validateName('finn hodgkin', (err, res) => {
    t.ok(err, 'name with a space should return an error.');
  });
  validateName('finnhodgkin@gmail.com', (err, res) => {
    t.ok(err, 'name with an @ symbol returns error');
  });
  validateName('f', (err, res) => {
    t.ok(err, 'name must contain at least two letters');
  });
  validateName('f\'', (err, res) => {
    t.ok(err, 'name must contain at least two letters');
  });

  t.end();
})
