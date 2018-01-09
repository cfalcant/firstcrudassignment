let express = require("express");
let app = express();
let bodyParser = require('body-parser');
let fs = require('fs');
let port = process.env.PORT || 8000;
app.use(bodyParser.json());

// Build your first crud app! Using what we learned yesterday create a full crud app for user objects. The objects should look like this:
// {
//   "name":"user name",
//   "email": "user email",
//   "state": "CA"
// }
// {
//  "info":{
//    "name":"Carlos",
//    "email": "abc@gmail.com",
//    "state": "AZ"
// }
// }
//
// Here's a list of all the routes you'll need.
//  - Create route for creating new users
//  - Get route for getting all users
//  - Get route for getting a user by name
//  - Update route for updating a user by name
//  - Delete route for deleting a user by name


// app.post("/create", function(req, res){
//   let user = req.body.user;
//   res.json(user.first_name);
// })

app.post("/create", function(req, res){
  let data = fs.readFileSync('storage.json', 'utf-8');
  let parsedData = JSON.parse(data);
  parsedData.push(req.body);
  fs.writeFileSync('storage.json', JSON.stringify(parsedData));
})

app.get('/users', function (req, res) {
  let data = fs.readFileSync('storage.json', 'utf-8');
  let parsedData = JSON.parse(data);
  res.json(parsedData);
});

app.get('/users/:name', function (req, res) {
  let data = fs.readFileSync('storage.json', 'utf-8');
  let parsedData = JSON.parse(data);

  // let people = req.body.name
  let people = req.params.name
  if (people === ) {
    res.send('Hello!')
  } else {
    res.send('Nothing here')
  }
  console.log(req.params.name)
})
//
// let found


app.listen(port, function() {
  console.log('Listening on', port);
});
