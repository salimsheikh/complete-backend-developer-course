import mongoose from 'mongoose';

const todosSchema= new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ] //Array of Sub - Todos
},{timestamps: true});

export const Todo = mongoose.model('Todo',todosSchema)

