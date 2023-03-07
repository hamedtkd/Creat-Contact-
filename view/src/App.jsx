
import './index.css'
import { Route, Router, Routes } from 'react-router-dom'
import { routes } from './routes'
import { useAuth } from './hooks/useAuth';


function App() {


  return (
    <>
      {useAuth()}
      <Routes>
        {Object.keys(routes).map((route) => {
          return (
            <Route
              key={routes[route].path}
              element={routes[route].element}
              path={routes[route].path}
            />
          );
        })}
      </Routes>
    </>
  )
}

export default App
