const API_URL = 'https://dummyjson.com/todos';


async function getTodos() {
    const todos = await fetch(API_URL);
    return await todos.json();
}

export default getTodos;