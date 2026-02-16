import { createBrowserRouter } from 'react-router-dom';
import CoreConcepts from '../pages/CoreConcepts';
import DataStructures from '../pages/DataStructure.tsx';
import DataStructureDetail from '../pages/DataStructureDetail.tsx'
import MachineCoding from '../pages/MachineCoding'
import MachineCodingDetail from '../pages/MachineCodingDetail.tsx';

import Layout from '../components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'core-concepts',
        element: <CoreConcepts />,
      },
      {
        path: 'data-structures',
        children: [
          {
            index: true,
            element: <DataStructures />,
          },
          {
            path: ':id',
            element: <DataStructureDetail />,
          },
        ],
      },
      {
        path: 'machine-coding',
        children: [
          {
            index: true,
            element: <MachineCoding />,
          },
          {
            path: ':id',
            element: <MachineCodingDetail />,
          },
        ],
      },
    ],
  },
])

export default router
