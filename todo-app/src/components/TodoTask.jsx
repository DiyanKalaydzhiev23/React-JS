const TodoTask = ({todo, onDelete}) => {
    return (
        <div>
            <li key={todo.id}>{todo.todo}</li>
            <button onClick={() => onDelete(todo.id)}>X</button>
            <button>Done</button>
        </div>
    );
}

export default TodoTask;