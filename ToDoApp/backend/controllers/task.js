const Task = require("../models/task");

exports.createTask = (req, res, next) => {

  const task = new Task({
    status: req.body.status,
    task_name: req.body.task_name,
    important: req.body.important,
    timeStamp: req.body.timeStamp,
    date: req.body.date,
    index: req.body.index,
    UserId: req.body.userId
  });
  task.save().then(result => {
    res.status(201).json({
      message: 'save success',
      data: result
    });

  }).catch(err => {
    res.status(500).json({
      message: 'server error',
      error: err
    });
  });
}

exports.getTasks = (req, res, next) => {

  Task.find({ UserId: req.params.UserId }).then((result) => {
    if (result) {
      res.status(201).json({
        message: "tasks found",
        result: result
      });
    } else {
      res.status(404).json({
        message: "no taskas added or found",
        result: result
      });
    }
  }).catch(result => {
    res.status(500).json({
      message: "error getting tasks",
      result: result
    });
  });
}


exports.getimptask = (req, res, next) => {

  Task.find({ important: true, UserId: req.params.UserId }).then((result) => {

    if (result) {
      res.status(201).json({
        message: "tasks found",
        result: result
      });
    } else {
      res.status(404).json({
        message: "no taskas added or found",
        result: result
      });
    }
  }).catch(result => {
    res.status(500).json({
      message: "error getting tasks",
      result: result
    });
  });
}


exports.getmydaytasks = (req, res, next) => {

  const d = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const todaydate = days[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();

  Task.find({ date: todaydate, UserId: req.params.UserId }).then((result) => {
    if (result) {
      res.status(201).json({
        message: "tasks found",
        result: result
      });
    } else {
      res.status(404).json({
        message: "no taskas added or found",
        result: result
      });
    }
  }).catch(result => {
    res.status(500).json({
      message: "error getting tasks",
      result: result
    });
  });
}


exports.getCompletedTask = (req, res, next) => {
  Task.find({ status: true, UserId: req.params.UserId }).then(result => {
    res.status(201).json({
      message: "completed tasks found",
      result: result
    });
  }).catch(error => {
    res.status(500).json({
      message: "an error has occured",
      result: error
    });
  });
}


exports.completeTask = (req, res, next) => {
  Task.findByIdAndUpdate(req.body.id, { status: true, UserId: req.params.UserId }).then(result => {
    res.status(201).json({
      message: "task completed"
    });
  }).catch(result => {
    res.status(500).json({
      message: "internal server error"
    });
  });
}

exports.marknImportant = (req, res, next) => {
  Task.findByIdAndUpdate(req.body.id, { important: false, UserId: req.params.UserId }).then(result => {
    res.status(201).json({
      message: "marked Not important"
    });
  }).catch(result => {
    res.status(500).json({
      message: 'server error'
    });
  });
}


exports.markImportant = (req, res, next) => {
  Task.findByIdAndUpdate(req.body.id, { important: true, UserId: req.params.UserId }).then(result => {
    res.status(201).json({
      message: "marked important"
    });
  }).catch(result => {
    res.status(500).json({
      message: 'server error'
    });
  });
}
