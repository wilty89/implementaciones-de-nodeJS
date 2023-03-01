const express = require('express');
const router = express.Router();

const axios = require('axios');

router.post("/handle", (request, response) => {
  let user_name = request.body.Nombre;
  let Actor = request.body.Actor;
  console.log("User name = " + user_name + ", Actor is " + Actor);
  response.send("POST request to the homepage");
  res.end("yes");
  console.log(request.body);
});
router.get("/login", function (req, res) {
  res.redirect(path.join(__dirname + "/login"));
});
router.get("/ty", function (req, res) {
  res.redirect("/login");
});
router.get("/pruebas", (req, res) => {
  res.send("hola Muchachos");
});
router.get("/holax/:name", (req, res) => {
  res.send({ mensaje: `hola ${req.params.name} !` });
});
router.get("/query", (req, res) => {
  res.json(req.query); // {color:"red"}
});
router.get("/luz", (req, res) => {
  res.sendStatus(200).res.redirect("/usuarios");
});
router.get("/usuarios", (req, res) => {
  res.json([
    { nombre: "alberto", edad: 78 },
    { nombre: "juan", edad: 45 },
  ]);
});

router.get("/users2", (req, res) => {
 
  const backendUrl = "https://jsonplaceholder.typicode.com/users";
  axios.get(backendUrl)
  .then(response => {
    res.json(response.data)
    }).catch(err =>{
      //console.log(err)
    })
    //res.sendStatus(200)
});
module.exports = router;

//const {data} = await axios.get(backendUrl)return res.json(data)