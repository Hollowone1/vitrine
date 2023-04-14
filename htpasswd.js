const auth = require('basic-auth');
const admin = { name: 'idnet', password: 'Eg7d7yD2BZq9hjy4F3T6' };
module.exports = function (request, response, next) {
  var user = auth(request);
  if (!user || !admin.name || admin.password !== user.pass) {
    response.set('WWW-Authenticate', 'Basic realm="example"');
    return response.status(401).send();
  }
  return next();
};