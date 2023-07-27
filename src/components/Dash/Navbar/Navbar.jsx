import "./navbar.css"
import Image from "next/image"

export default function Navbar(){
    return (
        <nav className="navbar-container">
            <div className="logo-container">
                <Image
                src="/artus.svg"
                alt="Artus Kanban Logo"
                width={50}
                height={40}
                priority
                />
            </div>
        </nav>
    )
}