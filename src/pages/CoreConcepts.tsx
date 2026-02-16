import PageWrapper from '../components/PageWrapper'
import QAItem from '../components/QAItem'
import { coreConcepts } from '../data/coreConcepts'

const CoreConcepts = () => {
  return (
    <PageWrapper title="React Core Concepts">
      {coreConcepts.map((item, index) => (
        <QAItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </PageWrapper>
  )
}

export default CoreConcepts
