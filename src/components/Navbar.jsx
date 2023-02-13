import React from 'react'
import Logout from './Logout'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'



const style = {
  nav: `bg-accent-100 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl truncate`
}

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
return (
  <div className={style.nav}>
      <h1 className={style.heading}>{currentUser.displayName}</h1>
      <Logout />
  </div>
)
}


export default Navbar;