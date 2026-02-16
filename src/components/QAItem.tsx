interface QAItemProps {
  question: string
  answer: string
}

const QAItem = ({ question, answer }: QAItemProps) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  )
}

export default QAItem
