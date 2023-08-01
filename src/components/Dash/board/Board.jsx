'use client'

// Esse vai ser o component que vai receber todo os dados referentes a parte da Board

import "./board.css"
import TodoCard from "./todo-card/TodoCard"

export default function Board(){
    return(
        <div className="board-container">
            <TodoCard/>
            <TodoCard/>
            <TodoCard/>
            
        </div>
    )
}