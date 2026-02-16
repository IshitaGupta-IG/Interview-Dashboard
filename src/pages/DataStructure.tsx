import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import { dsProblems } from '../data/ds'

const DataStructures = () => {
  return (
    <PageWrapper title="Data Structures">
      <ul>
        {dsProblems.map(problem => (
          <li key={problem.id}>
            <Link to={problem.id}>
              {problem.title}
            </Link>
          </li>
        ))}
      </ul>
    </PageWrapper>
  )
}

export default DataStructures
