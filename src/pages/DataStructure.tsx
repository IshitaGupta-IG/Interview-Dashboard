import PageWrapper from '../components/PageWrapper'
import QuestionCard from '../components/QuestionCard'
import { dsQuestions } from '../data/ds'

const DataStructures = () => {
  return (
    <PageWrapper title="Data Structures">
      {dsQuestions.map((q, index) => (
        <QuestionCard
          key={index}
          title={q.title}
          description={q.description}
          solution={<pre>{`function reverse(str) {
  return str.split('').reverse().join('');
}`}</pre>}
        />
      ))}
    </PageWrapper>
  )
}

export default DataStructures
