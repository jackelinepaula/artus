import './button.css'

function Button(props){
    return(
        <button className="button-sm" type="button">{props.text}</button>
    )
}

export default Button