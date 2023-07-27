import Link from "next/link"
import "./navlink.css"

export default function NavLink(props){
    const src = props.src
    const name = props.name
    const color = props.color

    return(
        <Link href={src} className="navlink-container">
            <button className="navlink-button">
                <span className="marker" style={{backgroundColor: color}}>
                </span>
                {name}
            </button>
        </Link>
    )
}