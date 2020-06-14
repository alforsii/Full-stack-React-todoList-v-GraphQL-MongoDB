const { Router } = require('express');
const router = Router();
const Todo = require('../models/Todo.model');

//Get todos with Postman
router.get('/todos', (req, res) => {
  Todo.find()
    .then((todos) => {
      res.status(200).json({ todos });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
