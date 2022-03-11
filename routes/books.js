let express = require('express');
let router = express.Router();
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