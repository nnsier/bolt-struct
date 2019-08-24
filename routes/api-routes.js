const User = require('../models/User');
const Task = require('../models/Task');
const Regimen = require('../models/Regimen');

module.exports = function (app) {
  app.get('/api/user', (req, res) => {
    User.find({})
      .then((user) => {
        res.json(user);
      });
  });

  app.post('/api/user', (req, res) => {
    User.create(req.body)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json({ err });
      });
  });

  app.post('/api/regimen', (req, res) => {
    Regimen.create(req.body)
      .then((regimen) => {
        res.json(regimen);
      })
      .catch((err) => {
        res.json({ err });
      });
  });

  app.post('/api/task', (req, res) => {
    Task.create(req.body)
      .then((task) => {
        res.json(task);
      })
      .catch((err) => {
        res.json({ err });
      });
  });
  app.get('/api/todos', (req, res) => {
    Regimen.find({})
      .populate('regimenForTask', 'Task')
      .then((regimen) => {
        res.json(regimen);
      })
      .catch((err) => {
        res.json({ err });
      });
  });
};

// app.get('/api/todos', (req, res) => {
//   Todos.find({})
//     .populate('sender', 'name')
//     .then(todo => {
//       res.json(todo)
//     })
//     .catch(err => {
//       res.json({ 
//         err 
//       })
//     })
// })

// app.get('/api/user', (req, res) => {
//   User.find()
//     .then(user => {
//       res.json(user);
//     })
//     .catch(err => {
//       res.json({err})
//     })
// })

// app.post('/api/todo', (req, res) => {
//   Todos.create(req.body)
//     .then(todos => {
//       res.json(todos)
//     })
//     .catch(err => {
//       res.json({err})
//     })
// })

