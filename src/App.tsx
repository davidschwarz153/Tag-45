import { StrictMode } from 'react'


import Todos from './components/todo.tsx'
import RenderCards from './components/cards.tsx'

export default function App() {
  

  return (
    <>
     <h1 className='text-2xl'>My Todos</h1>
      <ul>
        <Todos></Todos>
      </ul>

      <br />
      <div className='flex gap-10'>
        <RenderCards></RenderCards>
      </div>
    </>
  )
}


