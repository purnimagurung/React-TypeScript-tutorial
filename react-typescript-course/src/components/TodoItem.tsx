interface TodoItemProps{
    todo: Todo;
}
export default function TodoItem({todo}:TodoItemProps) {
  return (
    <div>
        {todo.title}
    </div>
  )
}
