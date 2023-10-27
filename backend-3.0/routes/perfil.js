const express = require('express');
const router = express.Router();

const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  port: '3306',
  database: 'planbasedb'
});
const promisePool = pool.promise();

router.get('/:id', async function (req, res, next) {
  const id = req.params.id;

  const [rows, fields] = await promisePool.query("SELECT * FROM usuario WHERE id = ?", [id]);
  
  res.json(rows);
});

module.exports = router;
