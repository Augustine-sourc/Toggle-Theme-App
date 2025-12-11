import { UseTheme } from "./ThemeContext"
import React, {useContext} from "react"
export const Header = () => {

  const {theme,handleToggle} = useContext(UseTheme)
  return (
    <>
      <nav className={`header ${theme ? "light" : "dark"} `}>
        <div>
          <h2>MAKANA Co</h2>
        </div>

        <ul className="header-Nav">
          <li className="listTag">Home</li>
          <li className="listTag">About Us</li>
          <li className="listTag">Contact Us </li>
        </ul>

        <button className="navBtn" onClick={handleToggle}>
          {theme ? "Switch to Dark Mode": "Switch to Light mode"}
        </button>
      </nav>
    </>
  )
}