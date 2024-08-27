const Todo = require("../models/Todo"); // Import Todo model

// Define route handler
exports.createTodo = async (req, res) => {
    try {
        // Extract title and description from request body
        const { title, description } = req.body;

        // Create a new Todo object and insert it into the DB
        const response = await Todo.create({ title, description });

        // Send a JSON response with a success flag
        res.status(201).json({
            success: true,
            data: response,
            message: 'Entry Created Successfully'
        });
    } catch (err) {
        console.error(err); // Log the error
        res.status(500).json({
            success: false,
            data: null,
            message: 'Internal server error'
        });
    }
};

