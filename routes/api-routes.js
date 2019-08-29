/* eslint-disable no-shadow */
const User = require('../models/User');
const { Task } = require('../models/Task');

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

  app.delete('/api/user/', (req, res) => {
    const { username } = req.body;
    User.deleteOne({ name: username }, (err) => {
      if (err) {
        console.log({ err });
        res.send({ err });
      } else {
        res.send('success');
      }

    });
  });

  app.post('/api/regimen', (req, res) => {
    const {
      user,
      intensity,
      plan,
      length,
    } = req.body;
    // User.find({ name: user })
    //   .then()
    const regimen = new Regimen({
      user,
      intensity,
      plan,
      length,
      tasks: [{ title: 'title' }],
    });
    regimen.save((err) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send(regimen);
      console.log('Success');
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
      const foundUser = await User.find({ name: user });
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


  // app.post('/api/regimen2', (req, res) => {
  //   const {
  //     user,
  //     intensity,
  //     plan,
  //     length,
  //   } = req.body;
  //   const regimen = new Regimen({
  //     user,
  //     intensity,
  //     plan,
  //     length,
  //     tasks: [{ title: 'title' }],
  //   });
  //   const asynchUserFind = async function (user, regimen) {
  //     await regimen.save((err) => {
  //       if (err) {
  //         console.log(err);
  //         return;
  //       }
  //       // res.send(regimen);
  //       console.log('Success');
  //     });

  // this is all important stuff, but mostly this will
  // be done on the front end. We won't -generate tasks- on the backend. 
  // That's frontend stuff.

  //     await regimen.generateTasks();
  //     const foundUser = await User.find({ name: user });
  //     await console.log(foundUser);
  //     await console.log(foundUser[0].name);
  //     await foundUser[0].regimens.push(regimen);
  //     await foundUser[0].save(err => console.log(err));
  //     await console.log(foundUser[0]);
  //     await res.send(foundUser[0]);
  //   };
  //   asynchUserFind(user, regimen);
  // });

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

  app.post('/api/regimen/:id', (req, res) => {
    const regimenId = req.params.id;
    console.log(req.body);
    console.log(regimenId);
    Regimen.findById(regimenId).then((regimen) => {
      res.json(regimen);
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
    // Regimen.find({})
    //   .populate('regimenForTask', 'Task')
    //   .then((regimen) => {
    //     res.json(regimen);
    //   })
    //   .catch((err) => {
    //     res.json({ err });
    //   });
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

