const express = require('express');
const { allProducts, specificProduct } = require('../controllers');
const mysql=require('mysql')

const router = express.Router();

router.get('/', allProducts)
router.get('create', (req, res, next)=>{
    let sql=`create table Orders (id varchar(20) primary key, product_id varchar(50) NOT null, total int, stripe_id varchar(100), status varchar(10) )`
    
})
router.get('/product/:id', specificProduct)

module.exports=router

