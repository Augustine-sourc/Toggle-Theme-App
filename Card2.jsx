

import { useContext } from 'react'
import Mount from './assets/Mount.jpg'
import { UseTheme } from './ThemeContext'

export const Card2 = () => {
  const {theme} = useContext(UseTheme)
  return (
    <div className={`cardContainer ${theme ? "light" : "dark"}`}>
      <div className="card">
        <img src={Mount} className='blogPost' />
        <div className='ResortDesc'>
          <h1>Mount Resort</h1>
          <p>
            There&apos;s something about mountains that commands silence the moment you arrive. The air feels different—cooler, cleaner, almost sharper. The world slows down as the landscape rises around you, stretching into peaks that disappear into clouds. Whether you&apos;re standing at the base or hiking toward the summit, mountains have a way of reminding you how small you are and how big life can be.
          </p>

          <button className='navBtn'>View</button>
        </div>
      </div>
    </div>
  )
}