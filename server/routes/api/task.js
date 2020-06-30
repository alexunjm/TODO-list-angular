var router = require('express').Router();
var mongoose = require('mongoose');
var Article = mongoose.model('Article');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');
var auth = require('../auth');

const mock = ['test 1', 'test 2', 'test 3', 'test 4'].map(
  name => ({
    _id: name.split(' ').join(''),
    name,
    priority: Math.floor(Math.random() * 10),
    completed: Math.floor(Math.random() * 10) % 2 === 1,
    date: new Date(),
  })
);

// Preload id objects on routes with ':id'
router.param('id', function(req, res, next, id) {
  const index = mock.findIndex((e) => e._id === id);
  console.log("id", {id, index, found: mock[index]});
  req.task = mock[index];
  req.taskIndex = index;
  return next();
});

router.get('/all', auth.optional, function(req, res, next) {
  res.status(200).json({data: mock});
});

// create task
router.post('/create', auth.optional, function(req, res, next) {
  mock.splice(0, 0, {...req.body.task, _id: `${Math.random() * 10000}`.substr(0, 4)});
  console.log("mock", mock[0])
  res.status(200).json({data: mock[0]});
});

// get task by id
router.get('/get/:id', auth.optional, function(req, res, next) {
  res.status(200).json({data: req.task});
});

// update task
router.post('/update/:id', auth.optional, function(req, res, next) {
  mock.splice(req.taskIndex, 1, req.body.task);
  res.status(200).json({data: mock[req.taskIndex]});
});

// delete task
router.delete('/delete/:id', auth.optional, function(req, res, next) {
  console.log("deleting", {index: req.taskIndex, elm: req.task})
  mock.splice(req.taskIndex, 1);
  res.sendStatus(204);
});

module.exports = router;
