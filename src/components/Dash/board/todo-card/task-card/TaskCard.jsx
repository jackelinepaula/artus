import './task-card.css'

export default function TaskCard(props){
    return(
        <div className="task-card">
            <h4>Titulo Card</h4>
            <p>Um belo texto para meu querido card que eu tanto adoro. Css sempre complicando mas tudo se resolve</p>
            <div className="colaboradores-img">
                <img src="/chopper.jpg" alt="chopper"/>
            </div>
            <span className="data-alteracao">Jul 23</span>
        </div>
    )
}