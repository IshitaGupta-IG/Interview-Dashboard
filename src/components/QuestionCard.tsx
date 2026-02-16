import type { ReactNode } from 'react'

interface QuestionCardProps {
  title: string
  description: string
  solution: ReactNode
}

const QuestionCard = ({ title, description, solution }: QuestionCardProps) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '20px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div style={{ marginTop: '10px' }}>
        <strong>Solution:</strong>
        <div>{solution}</div>
      </div>
    </div>
  )
}

export default QuestionCard
