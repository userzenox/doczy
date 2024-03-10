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
import Coaching from './components/Coaching'
import Home from './components/Home'
import Message from './components/Message'
import Service from './components/Service'
import Login from './layouts/Login'
// layouts
import RootLayout from './layouts/RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="Home" element={< Home/>} />
      <Route index element={<Signup />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Login" element={<Login />} />
      <Route path="Signup2" element={<Signup2 />} />
      <Route path="College" element={< College/>} />
      <Route path="School" element={< School/>} />
      
      <Route path="Coaching" element={< Coaching/>} />
      <Route path="Home" element={< Home/>} />
  
      <Route path="Message" element={< Message/>} />
      <Route path="Service" element={< Service/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
