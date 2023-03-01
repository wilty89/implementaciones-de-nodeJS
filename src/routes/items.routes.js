const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
let items = [
    { id: uuidv4(), item: 'Learn about PWAs' },
    { id: uuidv4(), item: 'Make an awesome app' }
  ]
  router.get("/api/get-uuid", function (req, res) {
    res.send(items);
  });
  
  router.post('/items.json', (req, res) => {
    items.push({
      id: uuidv4(),
      item: req.body.item
    })
    res.json(items)
  })
  
  router.delete('/items.json', (req, res) => {
    items = items.filter(item => {
      if(item.id !== req.body.id) {
        return item
      }
    })
    res.json(items)
  })
  module.exports = router;