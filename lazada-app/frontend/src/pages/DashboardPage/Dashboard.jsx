import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <Outlet />
      Dashboard Page
    </div>
  )
}

export default Dashboard
