const {Router} = require('express');
const pool = require('../db');

const router = Router();

router.get('/',(request,response,next)=>{
    pool.query('SELECT * FROM staff',(err,res)=>{
        if(err) return next(err);
        response.json(res.rows);
    });
});

router.get('/:id',(request,response,next)=>{
    const {id} = request.params;
    pool.query('SELECT * FROM staff WHERE staff_id=$1',[id],(err,res)=>{
        if(err) return next(err);
        response.json(res.rows);
    });
});

router.post('/',(request,response,next)=>{
    const {staff_name,staff_category,staff_skill} = request.body;
    console.log(request.body)
    pool.query('INSERT INTO staff(staff_name,staff_category,staff_skill) VALUES ($1, $2, $3)',
    [staff_name,staff_category,staff_skill],
    console.log(staff_name,staff_category,staff_skill),
    (err,res)=>{
        if(err) return next(err);
        response.redirect('/staff');
    });
});

router.put('/:id',(request,response,next)=>{
    const {id}=request.params;
    const keys=['staff_name','staff_category','staff_skill'];
    const fields=[];

    keys.forEach(key =>{
        if(request.body[key]) fields.push(key);
    });
    console.log(fields);
    fields.forEach((field,index)=>{
        pool.query(`UPDATE staff SET ${field}=$1 WHERE staff_id=($2)`,[request.body[field],id],
        (err,res)=>{
            if(err) return next(err);
            if(index===fields.length-1) response.redirect('/staff');
        });
    });
});

router.delete('/:id',(request,response,next)=>{
    const {id} = request.params;
    pool.query('DELETE FROM staff WHERE staff_id=$1',[id],
    (err,res)=>{
        if(err) return next(err);
        response.redirect('/staff');
    });
});

module.exports = router;