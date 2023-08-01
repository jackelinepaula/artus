import "./dash.css"

import Navbar from "@/components/dash/navbar/Navbar"
import Main from "@/components/main/Main"

export default function Dash(){
    return(
        <>
            <div className="body-content">
                <Navbar />
                <Main />
            </div>
        </>

    )
}