import { useContext } from 'react'
import blogPost from './assets/blog.jpg'
import { UseTheme } from './ThemeContext'

export const Card = () => {
  const {theme} = useContext(UseTheme)
  return (
    <div className={`cardContainer ${theme ? "light" : "dark"}`}>
      <div className="card">
        <img src={blogPost} className='blogPost' />
        <div className='ResortDesc'>
          <h1>Palm Beach Resort</h1>
          <p>
            The magic of palm-lined beaches and resort areas lies in how effortlessly they slow life down. The moment you arrive, you feel it—warm air brushing past the swaying palms, soft sand under your feet, and the calm rhythm of waves rolling in. These places have a way of pulling you out of your head and grounding you right in the moment.
            Every resort has its signature touch—maybe it&apos;s the way the architecture blends with nature, how the palm trees frame the horizon, or simply the feeling of calm the moment you step in. These unique traits are what transform a simple getaway into an unforgettable escape.
          </p>

          <button className='navBtn'>View</button>
        </div>
      </div>
    </div>
  )
}