import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'
 
// pages

import Signup from './layouts/Signup'
import Signup2 from './layouts/Signup2'
import College from './components/College'
import School from './components/School'
import Institute from './components/Institute'
import Home from './components/Home'
// layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Signup />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Signup2" element={<Signup2 />} />
      <Route path="College" element={< College/>} />
      <Route path="School" element={< School/>} />
      <Route path="Home" element={< Home/>} />
      <Route path="Institute" element={< Institute/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
