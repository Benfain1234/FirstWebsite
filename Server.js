import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
import knex from 'knex';
const db=knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'benfain',
    password : '',
    database : 'app'
  }
});

const app = express();
app.use(bodyParser.json());
app.use(cors());






app.post('/register',(req,res)=>{
console.log(req.body);
const{email,password,name}=req.body;
const hash = bcrypt.hashSync(password);


db('users')
    .insert({
	email: email,
	password:hash,
	name:name,
	
})
.then(console.log('success')
)
.catch(err=> res.status(400).json('user already exists.'))
})




/*// Load hash from your password DB.
bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
});
bcrypt.compare("veggies", hash, function(err, res) {
    // res = false
});*/
app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})

