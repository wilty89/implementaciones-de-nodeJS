const express = require("express");
const router = express.Router();
const todos = [
  {
    id: "1",
    title: "Todo 1",
    desc: "This is my first Todo",
    completed: false,
  },

  {
    id: "2",
    title: "Todo 2",
    desc: "This is my second Todo",
    completed: true,
  },

  {
    id: "3",
    title: "Todo 3 hola",
    desc: "This is my third Todo",
    completed: true,
  },

  {
    id: "4",
    title: "Todo 4",
    desc: "This is my fourth Todo",
    completed: true,
  },

  {
    id: "5",
    title: "Todo 5",
    desc: "This is my fifth Todo",
    completed: true,
  },
];

router.get("/books", (req, res) => {
  res.status(200).json(todos);
});
router.get("/books/:id", (req, res) => {
  res.status(200).json(todos.find((todos) => todos.id == req.params.id));
});
router.get("/booksf", (req, res) => {
  const busqueda = '2';
  const filtro = todos.filter(
    (todos) =>
      todos.id.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1 ||
      todos.title.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1 ||
      todos.desc.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
  );
  if (filtro.length === 0) {
    console.log("no data found");
  } else {
    console.log(filtro);
    console.log(`Filtered Data ---->${filtro.length}`);
  }
  res.status(200).json(filtro);
});

module.exports = router;
