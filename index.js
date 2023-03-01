const app = require("./src/app");
const port = process.env.PORT || 5000;

try {
  async function init() {
    await app;
  }
  init();

} catch (error) {
  console.error(error)
}
app.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log("Ejecutandose en el puerto ", port);
});


/*
//const axios = require("axios");
app.get("/countries", (req, res, next) => {
  axios.get('https://countries.bloggernepal.com/countries/').then(response => {
      // console.log(response)
      res.json({
          ...response.data
      })
  })
})


const os = require("os");
console.log(os.platform());
console.log(os.release());
console.log(os.freemem());
var networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

setImmediate(() => {
  console.log("start");
});




const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  app.get('/api/test', (req, res) => {
    res.type('text/plain');
    res.send('Hello, World!');
  });
}


// whitelist
const whitelist = ['http://localhost:3000', 'http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));

/*

fs.readFile("text.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/

//app.use(express.static(path.join(__dirname , 'public')));
/*
const createDirIfNotExists = (dir) => {
  !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined;
};
createDirIfNotExists("logs");
*/

///node --watch index.js
