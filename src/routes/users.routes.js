const express = require("express");
const router = express.Router();
const datos = [
  {
    id: 1,
    nombre: "wilber",
    Apellido: "montero",
    edad: 45,
    role: "ADMIN",
  },
  {
    id: 2,
    nombre: "Raul",
    Apellido: "Valdez",
    edad: 20,
    role: "USERS",
  },
];

router.get("/api", (req, res) => {
  res.send({ estado: "Active", datos });
});

router.post("/api", (req, res) => {
  datos.push(req.body);
  res.status(201).send({ funca: true, mensaje: "Usuarios Guardados" });
});

router.put("/api/:id", (req, res) => {
  const ID = req.params.id;
  let userIndex = datos.findIndex((user) => user.id === ID);
  datos[userIndex] = req.body;
  res.status(201).send({
    funca: true,
    mensaje: "funciona bien",
  });
});

router.delete("/api/:id", (req, res) => {
  const ID = req.params.id;
  let userIndex = datos.findIndex((user) => user.id === ID);
  datos.splice(userIndex, 1);
  res.status(201).send({
    funca: true,
    mensaje: "funciona bien",
  });
});

module.exports = router;
