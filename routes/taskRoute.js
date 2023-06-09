const express = require('express');
const taskController = require('./../controllers/taskController');

const router = express.Router();

router.route('/').get(taskController.get_tasks);

module.exports = router;