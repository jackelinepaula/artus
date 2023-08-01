
import NavLink from "./navLink/Navlink"
import "./navbar.css"
import Image from "next/image"
import Button from "@/components/global/button/Button"

export default function Navbar(){
    return (
        <nav id="navbar" className="navbar-container">
            <div className="logo-container">
                <Image
                src="/artus.svg"
                alt="Artus Kanban Logo"
                width={80}
                height={40}
                priority
                />
            </div>

            <div className="workspace-container">
                <div className="workspace-title">
                    <span>Workspace</span>
                    <Button className={"btn-quadrado"} text={
                        <span className="material-symbols-outlined">add</span>
                    }/>
                </div>

                <div className="navlink-container">
                    <NavLink src={"/dash/wikiflix"} name={"Wikiflix"} color={"#5F84DB"}/>
                    <NavLink src={"/dash/freegame"} name={"Freegame"} color={"#DDA516"}/>
                    <NavLink src={"/dash/emm"} name={"Emm"} color={"#6E0C9C"}/>
                </div>
            </div>
        </nav>
    )
}