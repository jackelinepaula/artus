
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
                    <NavLink src={"/dash/sozino"} name={"Sozino"} color={"#1b3"}/>
                    <NavLink src={"/dash/fatec"} name={"Fatec"} color={"#457"}/>
                    <NavLink src={"/dash/discvery"} name={"Discovery Movie"} color={"#252"}/>
                </div>
            </div>
        </nav>
    )
}