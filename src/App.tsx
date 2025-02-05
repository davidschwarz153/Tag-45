import { StrictMode } from 'react'


import Todos from './components/todo.tsx'
import RenderCards from './components/cards.tsx'

export default function App() {
  

  return (
    <>
     <h1>My Todos</h1>
      <ul>
        <Todos></Todos>
      </ul>

      <br />
      <div>
        <RenderCards></RenderCards>
      </div>
    </>
  )
}


