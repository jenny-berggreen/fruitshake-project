import './App.css'

// REACT ROUTER IMPORTS
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

// COMPONENTS
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import ShakesPage from './pages/ShakesPage'
import NutritionPage from './pages/NutritionPage'
import ContactPage from './pages/ContactPage'
import Wrapper from './wrapper/Wrapper'
import { FruitsProvider } from './context/FruitsProvider'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Wrapper/>} >
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shakes' element={<ShakesPage/>}/>
      <Route path='/nutrition-facts' element={<NutritionPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
    </Route>
  ))

  return (
    <>
    <FruitsProvider>
      <RouterProvider router={router} />
    </FruitsProvider>
    </>
  )
}

export default App
