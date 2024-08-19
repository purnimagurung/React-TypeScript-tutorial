import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"

function App() {

  return (
    <main className='py-10 h-screen'>
      <h1 className='font-bold text-3xl text-center'>Your Todos</h1>
      <div>
        {dummyData.map((todo) => (
         <TodoItem todo={todo} />
        ))}
      </div>
    </main>
  )
}

export default App
