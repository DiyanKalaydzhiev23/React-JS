async function postTodo(todoText) {
    const todo = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo: todoText,
          completed: false,
          userId: 5,
        })
      })

    return await todo.json();
}

export default postTodo;