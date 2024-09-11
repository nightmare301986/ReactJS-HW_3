//import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    width: 800
}));

export default function TaskList({
    todos,
    // onChangeTodo,
    onDeleteTodo,
}) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        //   onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ todo, onDelete }) {
    //    const [isEditing, setIsEditing] = useState(false);
    let todoContent = (
        <>
            {todo.title}
        </>
    );
    /*   if (isEditing) {
           todoContent = (
               <>
                   <input
                       value={todo.title}
                       onChange={(e) => {
                           onChange({
                               ...todo,
                               title: e.target.value,
                           });
                       }}
                   />
                   <button onClick={() => setIsEditing(false)}>
                       Save
                   </button>
               </>
           );
       } else {
           todoContent = (
               <>
                   {todo.title}
                   <button onClick={() => setIsEditing(true)}>
                       Edit
                   </button>
               </>
           );
       }*/
    return (
        <Box sx={{ flexGrow: 1, maxWidth: 1500 }}>
            <Demo>
                <List>
                    <ListItem>

                        <ListItemText primary={todoContent} />
                    </ListItem>

                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon onClick={() => onDelete(todo.id)} />
                    </IconButton>

                </List>
            </Demo>
        </Box>
    );

}

/*
             <button onClick={() => onDelete(todo.id)}>
                 Delete
             </button>
             //{...todoContent}
*/