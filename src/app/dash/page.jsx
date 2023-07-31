import "./dash.css"

import Board from "@/components/dash/board/Board";
import Header from "@/components/dash/header/Header";
import Navbar from "@/components/dash/navbar/Navbar";
import Title from "@/components/dash/title/Title";
import { Fragment } from "react";


export default function Dash(){
    return(
        <Fragment>
            <Navbar/>
            <main className="main-container">
                <Header/>
                <Title/>
                <Board/>
            </main>
        </Fragment>
        
    )
}