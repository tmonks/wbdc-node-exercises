var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/pig", (req, res) => {
  res.send("The pig says 'Oink'");
});

app.get("/cow", (req, res) => {
  res.send("The cow says 'Moo'");
});

app.get("/dog", (req, res) => {
  res.send("The dog says 'Woof Woof!'");
});

app.get("/repeat/:word/:num", (req, res) => {
  let output = "";
  for (let i = 0; i < parseInt(req.params.num); i++) {
    output += req.params.word + " ";
  }
  res.send(output);
});

app.get("*", (req, res) => {
  res.send("Sorry, page not found... what are you doing with your life??");
});

app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
