import { useParams } from 'react-router-dom'
import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import { machineProblems } from '../data/machineCoding'

const MachineCodingDetail = () => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <div>Invalid route</div>
  }

  const problem = machineProblems.find((p) => p.id === id)

  if (!problem) {
    return <div>Problem not found</div>
  }

  return (
    <PageWrapper title={problem.title}>
      <p>{problem.description}</p>

      {id === 'todo-app' && <TodoApp />}
    </PageWrapper>
  )
}

const TodoApp = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [input, setInput] = useState<string>('')

  const addTodo = () => {
    if (!input.trim()) return

    setTodos((prev) => [...prev, input])
    setInput('')
  }

  const removeTodo = (index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <input
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        placeholder="Enter todo"
      />
      <button onClick={addTodo} style={{ marginLeft: '8px' }}>
        Add
      </button>

      <ul style={{ marginTop: '15px' }}>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => removeTodo(index)}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MachineCodingDetail
