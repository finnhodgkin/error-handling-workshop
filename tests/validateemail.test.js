const { validateEmail } = require('../modules');
const test = require('tape');

module.exports = test('Testing validateEmail', (t) => {
  t.plan(8);
  validateEmail('finnhodgkin@gmail.com', (err, res) => {
    t.equal(res, 'finnhodgkin@gmail.com');
  });
  validateEmail('finnhodgkin@gmail.ac.uk', (err, res) => {
    t.equal(res, 'finnhodgkin@gmail.ac.uk');
  });
  validateEmail('f@g.k', (err, res) => {
    t.equal(res, 'f@g.k');
  });
  validateEmail('fi-nh_k.f343@gmail.com', (err, res) => {
    t.equal(res, 'fi-nh_k.f343@gmail.com');
  });
  validateEmail(231, (err, res) => {
    t.ok(err, 'number will return an error');
  })
  validateEmail('finnhodgkin', (err, res) => {
    t.ok(err, 'no @ symbol in email returns an error.');
  });
  validateEmail('test@test', (err, res) => {
    t.ok(err, 'Invalid email domain returns an error.');
  });
  validateEmail('test@test.f.', (err, res) => {
    t.ok(err, 'Invalid email domain returns an error.');
  });
})
