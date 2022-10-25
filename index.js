const express=require('express');
const app = express();
const port =5000;
const data=require('./courseData/course.json');
app.get('/courses', (req, res) => {
    res.send(data);
});
