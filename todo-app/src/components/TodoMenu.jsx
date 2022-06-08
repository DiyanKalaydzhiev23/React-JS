import { useEffect, useState } from "react";
import getTodos from "../services/getTodos";
import postTodo from "../services/postTodo";
import TodoTask from "./TodoTask";
import deleteTodo from '../services/deleteTodo'


const TodoMenu = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then(todos => setTodos(todos.todos));
    }, []);

    const addTodo = async () => {
        const inputField = document.querySelector('#todoHolder');
        const todo = await postTodo(inputField.value);

        setTodos(oldTodos => [
            ...oldTodos,
            todo
        ])

        inputField.value = '';
    }

    const deleteTodoHandler = (id) => {
        const todo = async () => await deleteTodo(id);
        setTodos(oldTodos => oldTodos.filter(todo => todo.id != id));
    };

    return (
        <>
            <label htmlFor="todo">Add todo: </label>
            <input id="todoHolder" type="text" />
            <button onClick={async () => addTodo()}>+</button>

            <ul>
                {todos.map(todo => <TodoTask key={todo.id} todo={todo} onDelete={(id) =>deleteTodoHandler(id)}></TodoTask>)}
            </ul>
        </>
    );
}

export default TodoMenu;