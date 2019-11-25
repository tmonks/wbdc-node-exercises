var express = require("express");
var app = express();

// ======== ROUTES =======
app.get("/", function(req, res) {
  res.send("Hi there!");
});

app.get("/bye", (req, res) => {
  res.send("Goodbye!");
});

app.get("/dog", (req, res) => {
  console.log("Someone made a request to /dog");
  res.send("MEOW!");
});

// route parameters
app.get("/r/:routeParam", (req, res) => {
  res.send("Welcome to the " + req.params.routeParam + " page!");
});

app.get("/r/:subReddit/comments/:id/:comment", (req, res) => {});

// catchall for everything else
app.get("*", (req, res) => {
  res.send("404: Oops! Looks like that pages doesn't exist!");
});

// Start the server
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
