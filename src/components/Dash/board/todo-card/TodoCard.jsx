import Button from '@/components/global/button/Button'
import './todo-card.css'
import TaskCard from './task-card/TaskCard'

export default function TodoCard(){
    return(
        <div className="todo-card">
            <div className="todo-status">
                <span className='icon-status' style={{"border-color": "blueviolet"}}/>
                <span className='title-status'>abc</span>
            </div>

            <Button className={"btn-new-task"} text={"+ Novo"}/>

            <TaskCard/>
            <TaskCard/>
        </div>
    )
}