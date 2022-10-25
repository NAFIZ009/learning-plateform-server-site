const express=require('express');
const app = express();
const port =5000;
const data=require('./courseData/course.json');
const cors=require('cors');
app.use(cors());
app.get('/courses', (req, res) => {
    res.send(data);
});
app.get('/courses/:id', (req, res) => {
    const id=req.params.id;
    console.log(data);
    const filtredData=data.find(data=>data.id==id);
    res.send(filtredData);
});
app.listen(port,()=>{
    console.log('port no',port)
})