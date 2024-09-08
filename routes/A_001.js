var text= [];
var text= [];
var text= [];
var text= [];
var text= [];
var text= [];
var text= [];
var text= [];
var text= [];
var text= [];
var text= [];
var text= [];
var text= [];
var text= [];
var text= [];let express = require('express');
// let router = express.Router();
let dbCon = require('../lib/db');

router.get('/',(req, res, next) => {
    dbCon.query('SELECT * FROM books ORDER BY id DESC', (err, rows) => {
        if(err){
            req.flash('error', err);
            res.render('books', {data: '' });
        }else{
            res.render('books', {data: rows });
        }
    })

})

module.exports = router;
var text= [];

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
