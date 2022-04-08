const {Router} = require('express');
const pool = require('../db');

const router = Router();

router.get('/',(request,response,next)=>{
    pool.query('SELECT * FROM course FULL OUTER JOIN staff ON course.course_staff_id = staff_id',
    (err,res)=>{
        if(err) return next(err);
        response.json(res.rows);
    });
});

router.get('/no/:semNo',(request,response,next)=>{
    const {semNo} = request.params;
    // console.log(semNo);
    pool.query('SELECT * FROM course FULL OUTER JOIN staff ON course.course_staff_id = staff_id WHERE course_semester= $1',[semNo],
    (err,res)=>{
        if(err) return next(err);
        response.json(res.rows);
    });
});

router.get('/staff',(request,response,next)=>{
    pool.query('SELECT * FROM course INNER JOIN staff ON course.course_staff_id = staff_id',
    (err,res)=>{
        if(err) return next(err);
        response.json(res.rows);
    });
});

router.get('/even',(request,response,next)=>{
    
    pool.query('SELECT * FROM course FULL OUTER JOIN staff ON course.course_staff_id = staff_id WHERE course_semester % 2 = 0',
    (err,res)=>{
        if(err) return next(err);
        response.json(res.rows);
    });
});

router.get('/odd',(request,response,next)=>{
    
    pool.query('SELECT * FROM course FULL OUTER JOIN staff ON course.course_staff_id = staff_id WHERE course_semester % 2 <> 0',
    (err,res)=>{
        if(err) return next(err);
        response.json(res.rows);
    });
});


module.exports=router;