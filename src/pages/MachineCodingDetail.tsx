import { useParams } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { machineProblems } from '../data/machineCoding';

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
    <div>
      {problem.app}
    </div>
    </PageWrapper>
  )
}

export default MachineCodingDetail
