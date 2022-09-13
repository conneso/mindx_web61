var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
var restaurantsRouter = require("./routes/restaurants");
const port = 30001;
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/users", usersRouter);
app.use("/restaurants", restaurantsRouter);
// module.exports = app;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
