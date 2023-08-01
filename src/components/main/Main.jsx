import Header from "../dash/header/Header"
import Title from "../dash/title/Title"
import Board from "../dash/board/Board"

import './main.css'

function Main(){
    return(
        <main id="main-content" className="main-content">
            <Header />
            <Title />
            <Board />
        </main>
    )
}

export default Main