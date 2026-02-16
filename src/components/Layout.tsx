import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <div style={{ padding: '20px' }}>
      <nav
        style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        <NavLink
          to="/core-concepts"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          React Core
        </NavLink>

        <NavLink
          to="/data-structures"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          DS
        </NavLink>

        <NavLink
          to="/machine-coding"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Machine Coding
        </NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout
