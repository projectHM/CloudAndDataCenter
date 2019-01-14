const db = require('../db/config');
const request = {};

request.getAll = (req, res, next) => {
  db.manyOrNone('SELECT * FROM request;')
    .then((data) => {
      res.locals.request = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

module.exports = request;
