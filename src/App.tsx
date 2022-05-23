import { useState } from 'react'
import './App.css'
import './components/AcessoCard'
import AcessoCard from './components/AcessoCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AcessoCard codigo="0008679/22H" 
                  descricao="Acesso ao pátio da subestação" 
                  data="23/05/2022"/>
    </div>
  )
}

export default App
