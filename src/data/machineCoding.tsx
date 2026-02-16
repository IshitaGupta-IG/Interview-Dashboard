import TodoApp from "../machine-coding/ToDoApp";
import Timer from "../machine-coding/Timer";
export const machineProblems = [
  {
    id: 'todo-app',
    title: 'Todo App',
    description: 'Create a todo app with add and delete functionality.',
    app : <TodoApp />
  },
   {
    id: 'timer',
    title: 'Timer App',
    description: 'Create timer app with start, stop, reset and other features',
    app : <Timer />
  }
]
