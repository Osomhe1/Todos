import React from 'react'
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

export default function TodoList() {

    const todos  = useSelector((state) =>{
        return state.tasks;
    })
  return (
    <div>
        <ul className="task-list">
            {todos.map((todo) =>(
                <TodoItem id={todo.id} key={todo.id} title={todo.name} completed={todo.status} />
            ))}
        </ul>
    </div>
  )
}
