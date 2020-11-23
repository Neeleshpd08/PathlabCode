import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import mysql from 'mysql';
const user =[]
import path from 'path';
const router = express.Router();
import bodyParser from 'body-parser';
import { table } from 'console';
const app = express(); 
const PORT= 5001;
const __dirname = path.resolve(path.dirname(''));
router.use(express.static(__dirname+ '/public'))
var urlencodedParser = bodyParser.urlencoded({extended:false});
var response;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected!");
});

router.get('/' ,(req,res) => {
    res.sendFile(path.join(__dirname + '/html_handler/Form.html'));
    console.log("Page launched with request");  
});

router.post('/',urlencodedParser,function(req,res){
        response = {
            firstname:  req.body.firstname,
            lastname: req.body.lastname,
            country:  req.body.country,
            subject:  req.body.subject,
            age: req.body.age
        }  
        console.log(response);  
        var firstname =  req.body.firstname;
        var lastname = req.body.lastname;
        var country =  req.body.country;
        var subject =  req.body.subject;
        var age = req.body.age;

    
    var sql = `INSERT INTO customer (FirstName,LastName,Country,Description,age) VALUES ('${firstname}','${lastname}','${country}','${subject}',${age})`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted");
      });

    //conschrt userwithid = { ...userbody,id: uuidv4() };
    //user.push({ ...response,id: uuidv4() });
    res.send(
        `<!DOCTYPE html> 
        <html>
        <head>
            <style>
                table,th,td{
                    border: 1px solid black; 
                    border-collapse: collapse;
                }
            </style>
        </head>
        </body>
        <p>Data filled by user </p>
        <table style="width:100%">
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Country</th>
                    <th>Address</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody style="width:100%">
                <tr>
                    <td>${firstname}</td>
                    <td>${lastname}</td>
                    <td>${country}</td>
                    <td>${subject}</td>
                    <td>${age}</td>
                </tr>
            </tbody>
        </table>
        </body>
        </html>
        `);
})

router.get('/:id',(req,res) => {
    const { id } = req.params;
    const foundusr =  user.find((user) => user.id = id);
    res.send(foundusr);
})

export default router;