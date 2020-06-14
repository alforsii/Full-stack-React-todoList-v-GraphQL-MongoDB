const { Router } = require('express');
const router = Router();
const Todo = require('../models/Todos.model');

router.get('/todos', (req, res) => {
  Todo.find()
    .then((todos) => {
      res.status(200).json({ todos });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
