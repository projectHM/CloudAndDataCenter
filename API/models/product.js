const db = require('../db/config');
const product = {};


product.getAll = (req, res, next) => {
    db.manyOrNone('SELECT * FROM products;')
      .then((data) => {
        res.locals.products = data;
        next();
      })
      .catch((error) => {
        console.log(error)
        next();
      })
}

product.create = (req, res, next) => {
  db.one('INSERT INTO products (name, type,unit,cost) VALUES($1, $2, $3, $4) RETURNING *;',
    [req.body.name, req.body.type, req.body.unit, req.body.cost])
    .then((data) => {
      res.locals.product = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}


product.update = (req, res, next) => {
  db.one('UPDATE products SET name=$1, type=$2, unit=$3, cost=$4 WHERE id=$5 RETURNING *;',
  [req.body.name, req.body.type, req.body.unit, req.body.cost, req.params.id])
    .then((data) => {
      res.locals.product= data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

product.delete = (req, res, next) => {
  db.none('DELETE FROM products WHERE id=$1', [req.params.id])
    .then((data) => {
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}



module.exports = products;
