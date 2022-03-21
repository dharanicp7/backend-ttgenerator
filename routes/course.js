const {Router} = require('express');
const pool = require('../db');

const router = Router();

router.get('/',(request,response,next)=>{
    pool.query('SELECT * FROM course',(err,res)=>{
        // console.log(res);
        if(err) return next(err);
        response.json(res.rows);
    });
});

router.get('/:id',(request,response,next)=>{
    const {id} = request.params;
    const uId = id.toLocaleUpperCase();
    // console.log(uId);
    pool.query('SELECT * FROM course WHERE course_id=$1',[uId],(err,res)=>{
        if(err) return next(err);
        response.json(res.rows);
    });
});

router.post('/',(request,response,next)=>{
    const {course_id,course_title,course_credit,course_contact_period} = request.body;
    pool.query('INSERT INTO course(course_id,course_title,course_credit,course_contact_period) VALUES ($1,$2,$3,$4)',
    [course_id,course_title,course_credit,course_contact_period],
    (err,res)=>{
        if(err) return next(err);
        response.redirect('/course');
    });
});

router.put('/:id',(request,response,next)=>{
    const {id}=request.params;
    const uId = id.toLocaleUpperCase();
    const keys=['course_id','course_title','course_credit','course_contact_period'];
    const fields=[];

    keys.forEach(key => {
        if(request.body[key]) fields.push(key);
    });
    fields.forEach((field,index)=>{
        pool.query(`UPDATE course SET ${field}=$1 WHERE course_id= $2`,[request.body[field],uId],
        (err,res)=>{
            if(err) return next(err);
            if(index===fields.length-1) response.redirect('/course');
        });
    });
});

router.delete('/:id',(request,response,next)=>{
    const {id} = request.params;
    const uId = id.toLocaleUpperCase();
    pool.query('DELETE FROM course WHERE course_id=$1',[uId],
    (err,res)=>{
        if(err) return next(err);
        response.redirect('/course');
    });
});

module.exports = router;