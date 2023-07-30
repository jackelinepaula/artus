import './button.css'

function Button(props){
    return(
        <button className={"btn-component " + props.className} type="button">{props.text}</button>
    )
}

export default Button