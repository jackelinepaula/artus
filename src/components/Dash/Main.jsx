import Header from "./header/Header"
import "./main.css"
import Title from "./title/Title"

export default function Main(){
    return(
        <main className="main-container">
            <Header/>
            <Title/>
        </main>
    )
}