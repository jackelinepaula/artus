import "./navbar.css"

export default function Navbar(){
    return(
        <div className="navbar-container">
            <div className="logo-image">
                artus
                <img src="@/../public/artus.svg"/>
            </div>
            <div className="workspace-container">
                <span>Workspace</span>
                <button>+</button>
            </div>
        </div>
    )
}

