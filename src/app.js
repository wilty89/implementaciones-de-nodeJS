require("./database/mongoDB");
const cors = require("cors");
const fs = require("fs");
const morgan = require("morgan");
const compression = require("compression");
const { check } = require('express-validator');

const helmet = require("helmet");

const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const http = require("http");
const server = http.createServer(app);

const everyMinute = require("./jobs");
const logger = require("./middlewares/logger.service");
const notifier = require("./middlewares/notifier.service");
const hello = require("./routes/hello.routes");
const users = require("./routes/users.routes");
const books = require("./routes/books.routes");
const items = require("./routes/items.routes");
const mongo = require("./routes/userrs");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(logger);
app.use(notifier);
app.use(hello);
app.use(users);
app.use(books);
app.use(items);
app.use(mongo);
app.use(helmet()); // Ayuda a proteger aplicaciones Express

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minute
  max: 100, // limit each IP to 2 requests per windowMs
  message: "You have exceeded the 100 requests in 24 hrs limit!",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
app.use(
  cors({
    origin: "*",
  })
);

const routerApi = require("./socket/crud");
const Sockets = require("./socket/socket");
Sockets(io);
routerApi (app)

everyMinute();

hbs.registerPartials(__dirname + "/views/partials", function (err) {});
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", { nombre: "Fernando Herrera", titulo: "Inicio con HBS" });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Fernando Herrera",
    titulo: "Curso de Node",
  });
});
/*
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.get("**", (req, res) => {
  res.send("404 | Page not found");
});
*/

app.post('/form', [
check("name").isLength({min: 3 }).withMessage('must be at least 5 chars long'),
check('email').isEmail(), 
check ('age' ).isNumeric(),
check("pass", "Please add pass").not().isEmpty()
], (req, res) => {

const name= req.body.name
const email = req.body.email
const age=req.body.age
const pass=req.body.pass
console.log(name, email, age)
})

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "/logs/logs.txt"),
  { flags: "a" }
);
app.use(morgan("combined", { stream: accessLogStream }));
//app.use(morgan("dev"));

server.listen(5001, function () {
  console.log("\n");
  console.log(`>> Socket listo y escuchando por el puerto: '5001'`);
});

module.exports = app;
