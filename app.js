const express = require('express');
const morgan = require('morgan');
const userRouter = require('./router');
const postRouter = require('./postRouter');

const app = express();

app.use(morgan('dev'));
const router = express.Router();

app.use('/user', userRouter);
app.use('/posts', postRouter);

app.get('/products/:proId/reviews/:reviewId', (req, res)=>{
    console.log(req.params)
    res.send('I am Listening! '+req.params.proId);
})

app.get('/', (req, res)=>{
    res.send('<h1>I am Listening</h1>')
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> console.log('I am listening to port 8080'))