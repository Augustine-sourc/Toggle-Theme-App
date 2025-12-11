import { Header } from "./Header"
import { Card } from "./Card"
import { ThemeContext } from "./ThemeContext"
import { Card2 } from "./Card2"

function App() {

  return (
    <>
      <ThemeContext>
        <Header />
        <Card />
        <Card2/>
      </ThemeContext>
    </>
  )
}

export default App
