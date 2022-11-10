const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

let token =  Math.ceil(Math.random() * 1000).toString(32); 

 // Create a connection to the database
const Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
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

app.post('/api/users/register', async (req, res) =>
{
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
const password = req.body.password;

console.log('Hi from registration api ', firstName, lastName, email, subscription, password);
let sql = 'INSERT INTO users SET firstname = ?, lastname = ?, email = ?, subscription = ?,  password = ?';

Connection.query(sql, [firstName, lastName, email, subscription, password],
(err, result) => {
  if (err) throw err;

   //Math.ceil(Math.random() * result.insertId).toString(32) ;
   token = result.insertId.toString(32) + token ;
  console.log(token, "token =>");
});
 

res.send({
  token: token

});
});

app.post('/api/users/login', async (req, res) =>
{
  console.log(' /api/users/login endpoint'); 
  const email = req.body.email; 
  const password = req.body.password ; 
  console.log(' /api/users/login endpoint', email, password);
   

  Connection.query('Select id, password from users where email = ? ', email, (err, result) =>
  {
    if (err) throw err;
    console.log(result)
    if (result.length)
    {
      console.log(result[0].password, "result.password");
      const dbPassword = result[0].password.toString()
      if (dbPassword === password)
      {
        console.log('User password correct!');
        token = result[0].id.toString(32);
        res.send(
          {
            token: token
          }
        )
      }
      else 
      {
        console.log("Incorrect Password!, Try Again"); 

        res.status(400).send({message: "Incorrect Password!, Try Again"});
      }
    }
    else
    {
      console.log('User does not exist'); 
      res.status(400).send({message: "User does not exist!"});
    }

  }); 
});


// app.listen(8080, () => console.log('API is running on http://localhost:8080/api/users/login'));