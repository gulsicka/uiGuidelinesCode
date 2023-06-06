import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useTodoAppStyles } from "./TodoApp.styles";
import { TitleStyled } from "../styles/common";

const TodoApp = (props) => {
  const { toggleDarkMode } = props;

  const classes = useTodoAppStyles();

  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      setTodos([...todos, todoText]);
      setTodoText("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Box className={classes.root}>
      <TitleStyled size="md">Todo List</TitleStyled>
      <TextField
        label="Add Todo"
        variant="outlined"
        value={todoText}
        onChange={handleInputChange}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddTodo}>
        Add
      </Button>
      <List className={classes.listRoot}>
        {todos.map((todo, index) => (
          <ListItem key={index} className={classes.listItemRoot}>
            <ListItemText primary={todo} />
            <Button variant="link" onClick={() => handleDeleteTodo(index)}>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
      <FormControlLabel
        control={<Checkbox onClick={toggleDarkMode} />}
        label="Dark Mode"
      />
    </Box>
  );
};

export default TodoApp;
