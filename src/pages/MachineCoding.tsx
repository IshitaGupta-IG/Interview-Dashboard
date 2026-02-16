import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import QuestionCard from '../components/QuestionCard'
import { machineCodingQuestions } from '../data/machineCoding'

const CounterSolution = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(c => c - 1)}>-</button>
    </div>
  )
}

const MachineCoding = () => {
  return (
    <PageWrapper title="Machine Coding">
      {machineCodingQuestions.map((q, index) => (
        <QuestionCard
          key={index}
          title={q.title}
          description={q.description}
          solution={<CounterSolution />}
        />
      ))}
    </PageWrapper>
  )
}

export default MachineCoding
