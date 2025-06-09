import { AddTodo } from './AddTodo'
import TodoItems from './TodoItems';


const Todo = () => {
    const todoTitle = "Todo-App";
    const todoItems = [
      {
      name:'Buy a Milk',
      dueDate: '2024/11/11',
      },
      {
        name:'Go to a college',
        dueDate: '2024/11/11',
      },
  ]
  return (
    <>
        <h1 classNameName='text-lg font-bold text-center'>{todoTitle}</h1>
        <AddTodo />
        <TodoItems todoItems= {todoItems}/>
       
    

    

    </>
  )
}

export default Todo