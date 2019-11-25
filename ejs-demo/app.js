var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/love/:thing", (req, res) => {
  var thing = req.params.thing;
  // res.send("You fell in love with " + thing);
  res.render("love", { thingVar: thing });
});

app.get("/posts", (req, res) => {
  var posts = [
    { title: "Post 1", author: "Susy" },
    { title: "My adorable pet bunny", author: "Avery" },
    { title: "Guinea pigs rule", author: "Riley" }
  ];
  res.render("posts.ejs", { posts: posts });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
