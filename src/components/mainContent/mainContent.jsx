import Header from "../dash/header/Header"
import Title from "../dash/title/Title"
import Board from "../dash/board/Board"

import './maincontent.css'

function MainContent(){
    return(
        <main id="main-content" className="main-content">
            <Header />
            <Title />
            <Board />
        </main>
    )
}

export default MainContent