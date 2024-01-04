import { Container, LinearProgress, List, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ListItem from './ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../features/todos/todoSlice';

const ListGroup = () => {

    const dispatch = useDispatch()

    const { todos, isLoading, isError, isSuccess } = useSelector((state) => state.todos)

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])


    if (isLoading) {
        return <Container>
            <LinearProgress color="warning" />
        </Container>;
    }

    if (isError) {
        return (
            <Typography sx={{ margin: "20px 0px" }} variant='h4' align='center'>
                Something went wrong...
            </Typography>
        )
    };


    if (todos.length === 0) {
        return (
            <Typography sx={{ margin: "20px 0px" }} variant='h4' align='center'>
                No todos yet ...
            </Typography>
        )
    }

    return (
        <List sx={{ margin: "20px 0px p-5 " }}>
            {
                todos.map((todo) => <ListItem key={todo._id} todo={todo} />)
            }

        </List>
    )
}

export default ListGroup;



