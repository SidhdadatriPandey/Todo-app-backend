const Todo = require("../models/Todo"); // Import Todo model

// Define route handler
exports.getTodo = async (req, res) => {
    try {
        //fetch all todo items from database
        const todos = await Todo.find({});

        // response
        res.status(200).json({
            success: true,
            data: todos,
            message: 'Entry Created Successfully'
        });
    } catch (err) {
        console.error(err); // Log the error
        res.status(500)
        .json({
            success: false,
            error:err.message,
            message: 'Server Error'
        });
    }
};

exports.getTodobyId = async (req, res) => {
    try {
        //extract todo items basis on id
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found woth given id"
            })
        }
        // Send a JSON response with a success flag
        res.status(200).json({
            success: true,
            data: todo,
            message: `todo ${id} data successfully fetched`
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

