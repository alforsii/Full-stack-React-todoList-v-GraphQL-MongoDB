const { Schema, model } = require('mongoose');

const todosSchema = new Schema(
  {
    id: Number,
    title: String,
    completed: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = model('Todo', todosSchema);
