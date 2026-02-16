import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import { machineProblems } from '../data/machineCoding'

const MachineCoding = () => {
  return (
    <PageWrapper title="Machine Coding">
      <ul>
        {machineProblems.map(problem => (
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

export default MachineCoding
