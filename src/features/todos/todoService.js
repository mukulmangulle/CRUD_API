// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { ClassSharp } from "@mui/icons-material";
import axios from "axios";

export const getAllTodos = async () => {
        const response = await axios.get('/api/todo');
        return response.data;

};

//save
export const addTodo = async (FormData) => {
        const response = await axios.post('/api/todo/', FormData)
        return response.data
}

//delete
export const removeTodo= async(_id)=>{
        const response= await axios.delete('/api/todo/'+ _id);
        return response.data;
};

//update
export const updateTodoservice= async(formData)=>{
    
        const {_id, title, description}=formData  

        const response= await axios.put('/api/todo/'+ _id,{title, description});
        return response.data;
};