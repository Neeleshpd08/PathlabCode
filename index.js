import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './Routes/user.js';

const app = express(); 
const PORT= 5001;

app.use(bodyParser.json());
app.use('/users',userRouter)


app.get("/",(req,res)=>res.send('This the first call'));
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
