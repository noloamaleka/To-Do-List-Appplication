const fetchTodoList = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching todo list");
  }
};
