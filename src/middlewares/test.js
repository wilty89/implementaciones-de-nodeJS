app.use(cookieParser());
app.use((req, res, next) => {
  console.log("The time is: " + Date().toString());
  next();
});

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now} ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFileSync("server.log", log + "\n");
  next();
});

app.use(
  session({
    secret: "thisismysecrctekey",
    saveUninitialized: true,
    //cookie: { maxAge: oneDay },//{ secure: true }
    resave: false,
    ttl: 24 * 60 * 60 * 1000,
    //store: new MongoStore({ url: uri }),
  })
);

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
    secret: "a really hard to guess secret",
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now} ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFileSync('server.log', log + '\n');
  next();
});
app.disable('x-powered-by');
app.use(function(req,res,next){res.removeHeader("x-powered-by");next();});

app.use(function(req,res,next){res.header("X-powered-by","Blood, sweat, and tears.");next();});


