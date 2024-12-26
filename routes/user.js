const express=require('express');
const db=require('../db');
const utils=require('../utils');
const cryptoJs=require('crypto-js');

const router=express.Router();

router.post('/register',async (request,response)=> {
    const{username,email,password_hash}=request.body;
    console.log(username,email,password_hash);
    try{
        //encrypt the password
       const encryptedPassword=String(cryptoJs.SHA256(password_hash));

       await db.execute(
          `insert into users (username,email,password_hash) values(?,?,?)`,
            [username,email,encryptedPassword]
       )
       response.send(utils.creataSucess('User registered successfully'));
    }
    catch(ex) {
        response.send(utils.createError(ex.message));
    }
});

router.post('/login',async (request,response)=> {
    const{email,password_hash}=request.body;

    try{
        //encrypt the password
       const encryptedPassword=String(cryptoJs.SHA256(password_hash));
       console.log(email,encryptedPassword);
       const [users]=await db.execute(
          `SELECT user_id, username FROM users WHERE email = ? AND password_hash = ?`,
            [email,encryptedPassword]
       )
       if(users.length===0) {
           response.send(utils.createError('Invalid email or password'));
       }
       else {
        //get the user details
        const user = users[0];
           response.send(utils.creataSucess(user));
       }
    }
    catch(ex) {
        response.send(utils.createError(ex.message));
    }

});

module.exports=router;