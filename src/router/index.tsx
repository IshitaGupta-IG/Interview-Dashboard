import { createBrowserRouter } from 'react-router-dom';
import CoreConcepts from '../pages/CoreConcepts';
import DataStructures from '../pages/DataStructure';
import MachineCoding from '../pages/MachineCoding';
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
                element: <DataStructures />,
            },
            {
                path: 'machine-coding',
                element: <MachineCoding />,
            },
        ],
    },
])

export default router
