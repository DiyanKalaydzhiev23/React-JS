async function deleteTodo(id) {
    const todo = await fetch(`https://dummyjson.com/todos/${id}`, {
        method: 'DELETE',
    });

    return await todo.json();
}