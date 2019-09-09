/* eslint-disable no-shadow */
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { Task } = require('../models/Task');
const { Position } = require('../models/Position');


module.exports = function (app) {
  app.get('/api/user', (req, res) => {
    User.find({})
      .then((user) => {
        res.json(user);
      });
  });

  app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send(
        'Request missing username or password',
      );
    }
    try {
      console.log(`Are we grabbing ${username}, ${password}`);
      const user = await User.authenticate(username, password);
      // user = await user.authorize();
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.send('Username or password is incorrect');
    }
  });

  app.post('/api/register', async (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, 10);
    try {
      await User.create({ username: req.body.username, password: hash });
      return res.json('successss');
    } catch (err) {
      return res.status(400).send(err);
    }
  });

  app.post('/api/run', async (req, res) => {
    const [...positions] = req.body.positions;
    const { username } = req.body;
    try {
      const task = new Task({
        positions,
      });
      console.log(`task is here ${task}`);
      const foundUser = await User.find({ username });
      await foundUser[0].tasks.push(task);
      await foundUser[0].save((err) => {
        if (err) {
          console.log(err);
        }
      })
      // const stuff = await foundUser[0].populate({ path: 'tasks', populate: { path: 'positions' } });
      return res.status(200).json(foundUser[0]);
    } catch (err) {
      return res.status(400).send(err);
    }
  });

  app.delete('/api/user/', (req, res) => {
    const { username } = req.body;
    User.deleteOne({ username }, (err) => {
      if (err) {
        console.log({ err });
        res.send({ err });
      } else {
        res.send('success');
      }
    });
  });

  app.post('/api/user/task', (req, res) => {
    const {
      username,
      title,
      length,
      pace,
    } = req.body;

    const task = new Task({
      title,
      length,
      pace,
    });
    const addTask = async function (user, task) {
      const foundUser = await User.find({ username });
      await foundUser[0].tasks.push(task);
      await res.send('success');
      console.log(`added ${task} to user: ${user}`);
      await console.log(foundUser);
      await console.log(foundUser[0].tasks);
    };
    addTask(username, task).catch((err) => {
      if (err) {
        res.send({ err });
      } else {
        res.send('success');
      }
    });
  });

  app.get('/api/:id', (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    User.findById(userId).then((user) => {
      console.log(user);
      const length = user.regimens.length() - 1;
      user.regimens[length].generateTasks();
      res.json(user);
    })
      .catch((err) => {
        res.json({
          err,
        });
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
  app.get('/api/tasks', (req, res) => {
    Task.find({})
      .then((tasks) => {
        res.json(tasks);
      });
  });
};
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
