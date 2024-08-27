const Todo = require("../models/Todo"); // Import Todo model

// Define route handler
exports.updateTodo = async (req, res) => {
    try {
        const {id}=req.params;
        const {title,description}=req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updateAt:Date.now()},
        )
        // Send a JSON response with a success flag
        res.status(200).json({
            success: true,
            data: todo,
            message: 'Updated Successfully'
        })
    } catch (err) {
        console.error(err); // Log the error
        res.status(500).json({
            success: false,
            data: null,
            message: 'Internal server error'
        });
    }
};

