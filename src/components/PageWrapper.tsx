import type { ReactNode } from 'react'

interface PageWrapperProps {
  title: string
  children: ReactNode
}

const PageWrapper = ({ title, children }: PageWrapperProps) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>{title}</h1>
      <div style={{ marginTop: '20px' }}>{children}</div>
    </div>
  )
}

export default PageWrapper
