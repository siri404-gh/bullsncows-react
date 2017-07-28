let id = 0;
export const addTodo = task => ({
  type: 'ADD_TODO',
  id: id++,
  task,
});
