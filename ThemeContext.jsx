import { useState, createContext } from "react"

export const UseTheme = createContext()
export const ThemeContext = ({children})=>{
  const [theme,setTheme] = useState("true")

  function handleToggle(){
    setTheme((prev)=> !prev)
  }
  
  let Values = {theme,handleToggle}

  return(
    <UseTheme.Provider value={Values}>
      {children}
    </UseTheme.Provider>
  )
}