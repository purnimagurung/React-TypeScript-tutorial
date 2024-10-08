import { useState } from "react"
import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm"

function App() {
  const [todos, setTodos] = useState(dummyData)

  function setTodoCompleted (id:number, completed:boolean)
  {
    setTodos((prevTodos)=> prevTodos.map(todo => (todo.id == id ? {...todo,completed} : todo ))
  )
  }
  function addTodo(title: string){
    setTodos((prevTodos) => [
      {
      id: prevTodos.length + 1,
      title,
      completed: false
    },
    ...prevTodos,
    ])
  }
  return (
    <main className='py-10 h-screen space-y-5'>
      <h1 className='font-bold text-3xl text-center'>Your Todos</h1>
      <div className="mx-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-2">
        <AddTodoForm onSubmit={addTodo} />
        <div className="space-y-2">
          {todos.map((todo) => (
          <TodoItem 
          todo={todo}
          key={todo.id}
          onChangedItem={setTodoCompleted}
           />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
