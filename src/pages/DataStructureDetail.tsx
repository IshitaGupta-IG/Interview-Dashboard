import { useParams } from 'react-router-dom'
import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import { dsProblems } from '../data/ds'

const DataStructureDetail = () => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <div>Invalid route</div>
  }

  const problem = dsProblems.find((p) => p.id === id)

  if (!problem) {
    return <div>Problem not found</div>
  }

  return (
    <PageWrapper title={problem.title}>
      <p>{problem.description}</p>

      {id === 'counter' && <Counter />}
    </PageWrapper>
  )
}

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div style={{ marginTop: '20px' }}>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => setCount((c) => c - 1)} style={{ marginLeft: '8px' }}>
        -
      </button>
    </div>
  )
}

export default DataStructureDetail
