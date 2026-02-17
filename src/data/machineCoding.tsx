import TodoApp from "../machine-coding/TodoApp";
import Timer from "../machine-coding/Timer";
import FormApp from "../machine-coding/FormApp";

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
  },
  {
    id: 'formApp',
    title: 'Form App',
    description: 'Create a sample form app',
    app : <FormApp />
  }
]
