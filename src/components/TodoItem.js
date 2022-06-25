import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/tasksSlice'

export default function TodoItem({id, title}) {

    const dispatch = useDispatch();

    const removeTask = ()=>{
        dispatch(
            deleteTask({
                id:id
            })
        )
    }
  return (
    <div>
        <li className="task-item">
            <div>
                {title}
            </div>
            <div>
                <button className="remove-task-button" onClick={() =>{
                    removeTask()
                }}>Delete</button>
            </div>
        </li>
    </div>
  )
}
