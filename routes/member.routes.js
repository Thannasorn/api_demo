const express = require('express');
const memberModel = require('../models/member.model');
const memberRoute = express.Router();

//การส่งข้อมูล
memberRoute.route('/list').get((req, res, next) => {
    
    const limit = req.query.limit;
        
    memberModel.find((error, data) => {
        if(error) return next(error);
        else res.json({numberofResult: data.length, result:[...data]})
    }).limit(limit ? limit : null);
})
//เพิ่มข้อมูล

//หา user จาก id
memberRoute.route('/find/:id').post((req,res,next) => {
    memberModel.findById(req.params.id, (error,data) => {
        if(error) return next(error);
        else res.json(data);
    })
})
module.exports = memberRoute;