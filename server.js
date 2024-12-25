const express = require('express');

const app = express();
app.use(express.json());

const userRouter = require('./routes/user');

app.use('/user',userRouter)

app.listen(8080,'0.0.0.0',()=>{
    console.log('Server is running on port 8080');
})