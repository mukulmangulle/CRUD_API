
import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, edit, fetchTodos } from '../features/todos/todoSlice'


const ListItem = ({ todo }) => {
  
   const {isSuccess}=useSelector(state=> state.todos)

  const dispatch = useDispatch()
//delete
  const handleDelete = (_id) => {
    dispatch(deleteTodo(_id))
    if(isSuccess){
      dispatch(fetchTodos())
     
    }
  };

  //edit
   const handleEdit=(todo)=>{
    dispatch(edit(todo))
   }


  return (
    < >

      <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
        <span>

          <Typography variant='h4' sx={{ margin: "0px 0px 0px 30px" }} >{todo.title}</Typography>
          <Typography variant='body1' sx={{ margin: "2px 0px 0px 30px", fontSize: "20px" }}>{todo.description}</Typography>
        </span>

        <span> <Button variant='outlined' color='warning' sx={{ margin: "35px 0px 0px 1px" }}
        onClick={()=>handleEdit(todo)}
        >Edit</Button>
          <Button variant='outlined' color='error' sx={{ margin: "35px 35px 0px 10px" }}
            onClick={() => handleDelete(todo._id)}
            >Delete</Button></span>
      </Box>
      <Divider sx={{ margin: "15px" }} />
    </>
  )
}
export default ListItem;








