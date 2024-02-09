import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav> 
          
          {/* <NavLink to="/">Home</NavLink>
          <NavLink to="about">Shop</NavLink>
          <NavLink to="Work" >Appointments</NavLink>

          <NavLink to="Contact" >Contact</NavLink>
          <NavLink to="Footer" > Reading </NavLink> 
          <NavLink to="History" > History </NavLink>
          <NavLink to="Login" ><button className="primary-button"> LogIn</button></NavLink> */}
          
         
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
