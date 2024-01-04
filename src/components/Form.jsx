import { Button, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector,  } from 'react-redux'
import { saveTodo, updateTodo } from '../features/todos/todoSlice'
import { useEffect, useState } from 'react'


const Form = () => {
  
       const {edit}=useSelector(state=>state.todos)

     const[formData, setFormData]=useState({
          title:"",
          description:""
     })

     const {title, description}= formData


    const dispatch= useDispatch()
     
    //
     const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
     };

     //edit
     useEffect(()=>{
          setFormData({
            title:edit.todo.title,
            description: edit.todo.description
          })
     },[edit])
   

     //save
    const handleSubmit=(e)=>{
        e.preventDefault();
   //up
       if(edit.editMode){
          dispatch(updateTodo({ _id:edit.todo._id, title, description}))
       }
       else{
        dispatch(saveTodo(formData));
       }
        setFormData({
            title:"",
            description:""
        })
    };


    return (
        <>
            <Typography sx={{ margin: "20px" }} variant='h3' align='center'>
                Enter You Task Here
                <Typography />
                <form onSubmit={handleSubmit}>
                    <TextField variant='outlined' label="Enter title" color='warning' fullWidth
                    name="title" onChange={handleChange} value={title} />
                    <TextField
                        sx={{ margin: "10px 0px" }}
                        variant='outlined' multiline rows={4}
                        label="Enter Description here"
                        color='warning'
                        fullWidth
                        name="description" onChange={handleChange} value={description}>
        
                    </TextField>
                    <Button type='submit' variant='contained' color='success' fullWidth>Save</Button>
                </form>

            </Typography>
        </>
    )
}

export default Form;
