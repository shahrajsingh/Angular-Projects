const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/task");
const checkAuth = require("../middleware/check-auth");

router.post("", checkAuth, TaskController.createTask);

router.get("/:UserId", checkAuth, TaskController.getTasks);

router.get("/imptask/:UserId", checkAuth, TaskController.getimptask);

router.get("/mydaytask/:UserId", checkAuth, TaskController.getmydaytasks);

router.get("/ctask/:UserId", checkAuth, TaskController.getCompletedTask);

router.put("/:UserId", checkAuth, TaskController.completeTask);

router.put("/imp/:UserId", checkAuth, TaskController.markImportant);

router.put("/nimp/:UserId", checkAuth, TaskController.marknImportant);

module.exports = router;
