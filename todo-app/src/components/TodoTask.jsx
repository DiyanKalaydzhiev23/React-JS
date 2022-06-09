const TodoTask = ({todo, onDelete, onEdit, className}) => {
    return (
        <div>
            <li key={todo.id} className={className}>{todo.todo}</li>
            <button className="deleteBtn" onClick={() => onDelete(todo.id)}>X</button>
            <button className="doneBtn" onClick={async () => await onEdit(todo.id)}>Done</button>
        </div>
    );
}

export default TodoTask;