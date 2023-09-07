import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './router/router'
import App2 from './App2'

function App () {
  return (
    <div className='App'>
      <RouterProvider router={routes} />
      <App2 />
    </div>
  )
}

export default App
