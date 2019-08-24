const User = require('../models/User');
const Todos = require('../models/Todo');

module.exports = function (app) {

  app.get('/api/todos', (req, res) => {
    Todos.find({})
      .populate('sender', 'name')
      .then(todo => {
        res.json(todo)
      })
      .catch(err => {
        res.json({ 
          err 
        })
      })
  })

  app.get('/api/user', (req, res) => {
    User.find()
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        res.json({err})
      })
  })

  app.post('/api/todo', (req, res) => {
    Todos.create(req.body)
      .then(todos => {
        res.json(todos)
      })
      .catch(err => {
        res.json({err})
      })
  })

  app.post('/api/user', (req, res) => {
    User.create(req.body)
      .then(user => {
        res.json(user)
      })
      .catch(err => {
        res.json({err})
      })
  })
}