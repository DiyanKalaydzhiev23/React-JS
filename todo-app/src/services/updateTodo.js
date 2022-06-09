async function updateTodo(id) {
    const todo = await fetch(`https://dummyjson.com/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          completed: true,
        })
      })

    return await todo.json();
}

export default updateTodo;