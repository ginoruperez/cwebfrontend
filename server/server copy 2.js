
const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

let token = Math.ceil(Math.random() * 1000).toString(32);

// Create a connection to the database
const Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  //password: 'lab-password',
  password: 'passw0rd',
  port: '3306',
  database: 'contractordb',
  multipleStatements: true
});

// open the MySQL connection
Connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

app.post('/api/users/register', async (req, res) => {
  console.log('/api/users/register api endpoint');
  /* 
  SignUp component send the following veriables to the api endpoint:
  firstName,
  lastName,
  email,
  subscription, 
  password
  */
  // we will get there value 
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const subscription = req.body.subscription && 1;
  let password = req.body.password;
  bcrypt.hash(password, 10, function (err, hash) {
    password = hash;
    console.log('password hash ' + hash);
    console.log('Hi from registration api ', firstName, lastName, email, subscription, password);
    let sql = 'INSERT INTO user SET firstname = ?, lastname = ?, email = ?, subscription = ?,  password = ?';


    Connection.query(sql, [firstName, lastName, email, subscription, password],
      (err, result) => {
        if (err) throw err;

        //Math.ceil(Math.random() * result.insertId).toString(32) ;
        res.status(200).send({ message: "Registered successfuly" });
        token = result.insertId.toString(32) + token;
        console.log(token, "token =>");
        
        

        //res.send({
         // token: token
      //
    //    });
      });


  });


  
});

app.post('/api/users/login', async (req, res) => {
  console.log(' /api/users/login endpoint');
  const email = req.body.email;
  const password = req.body.password;


  console.log(' /api/users/login endpoint', email, password);


  Connection.query('Select id, password from user where email = ? ', email, (err, result) => {
    if (err) throw err;
    console.log(result)
    if (result.length) {
      console.log(result[0].password, "result.password");
      const dbPassword = result[0].password.toString()
      bcrypt.compare(password, dbPassword, function (err, loginSuccess) {

        // execute code to test for access and login
        console.log('Bcrypt compare result ' + loginSuccess);
        console.log('dbPassword ' + dbPassword);

        if (loginSuccess) {
          console.log('User password correct!');
          token = result[0].id.toString(32);
          res.send(
            {
              token: token
            }
          )
        }
        else {
          console.log("Incorrect Password!, Try Again");

          res.status(400).send({ message: "Incorrect Password!, Try Again" });
        }
      });
    }
    else {
      console.log('User does not exist');
      res.status(400).send({ message: "User does not exist!" });
    }

  });
});



app.post('/api/users/profile', async (req, res) => {
  console.log(' /api/users/profile endpoint');
  const email = req.body.email;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  
  console.log(' /api/users/profile endpoint', email, password,confirmpassword,firstname,lastname);

  
  Connection.query('Select id, password,firstname,lastname,email from user where email = ? ', email, (err, result) => {
    if (err) throw err;
    
    console.log(result)

    if (result.length) {
      console.log(result[0].password, "result.password");
      console.log(result[0].password.toString())
      console.log(result[0].firstname.toString())
      console.log(result[0].lastname.toString())
      console.log(result[0].email.toString())
/** 
      bcrypt.compare(password, dbPassword, function (err, loginSuccess) {

        // execute code to test for access and login
        console.log('Bcrypt compare result ' + loginSuccess);
        console.log('dbPassword ' + dbPassword);

        if (loginSuccess) {
          console.log('User password correct!');
          token = result[0].id.toString(32);
          res.send(
            {
              token: token
            }
          )
        }
        else {
          console.log("Incorrect Password!, Try Again");
          res.status(400).send({ message: "Incorrect Password!, Try Again" });
        }

      });
      */

    }
    else {
      console.log('User does not exist');
      res.status(400).send({ message: "User does not exist!" });
    }

  });
});



app.listen(8081, () => console.log('API is running on http://localhost:8081/api/users/login'));