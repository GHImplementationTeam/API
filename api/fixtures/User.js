var uuid      = require('uuid');
var faker     = require('faker');
var RandomSSN = require('ssn').RandomSSN;
var bcrypt    = require('bcryptjs');

var fixtures = [];
fixtures.push({
  id: 1,
  nickname: "testuser",
  email: "test@cemaritan.com",
  password: bcrypt.hashSync("testing123testing", 10),
  firstName: "test",
  lastName: "user",
  employee: 1
});
fixtures.push({
  id: 2,
  nickname: "John True",
  email: "drew+jt@globalhack.org",
  password: bcrypt.hashSync("testing123testing", 10),
  firstName: "John",
  lastName: "True",
  employee: 2
});
fixtures.push({
  id: 3,
  nickname: "Charlotte Crocker",
  email: "drew+cc@globalhack.org",
  password: bcrypt.hashSync("testing123testing", 10),
  firstName: "Charlotte",
  lastName: "Crocker",
  employee: 3
});
fixtures.push({
  id: 4,
  nickname: "Duke Cross",
  email: "drew+dc@globalhack.org",
  password: bcrypt.hashSync("testing123testing", 10),
  firstName: "Duke",
  lastName: "Cross",
  employee: 4
});

module.exports = {
  fixtures: fixtures
};
