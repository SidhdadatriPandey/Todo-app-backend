const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodobyId } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");

// Define routes
router.post('/createTodo', createTodo);
router.get('/getTodos', getTodo);
router.get('/getTodos/:id', getTodobyId);
router.put('/updateTodo/:id', updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router;
