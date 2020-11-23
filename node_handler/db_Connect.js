import mysql from "mysql";

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database : 'mydb'
});

con.connect(function(err){
    if(err) throw err;
    console.log("connect");

    var sql = "create table customer (id int(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,FirstName varchar(40),LastName varchar(30),Country varchar(20),Description varchar(100),age int,created_at datetime NOT NULL)";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("table created");
    })
})