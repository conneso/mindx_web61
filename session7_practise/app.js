var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var tutorialRouter = require('./routes/tutorials')
const port = 30001;
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/tutorials", tutorialRouter)
const database = require('./DAL/database')
const db = new database()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  db.connect().then((err, result)=>{
    if(err) throw err
    console.log('database is connected')
  })
});
