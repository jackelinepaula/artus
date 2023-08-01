import "./title.css"
import Button from "@/components/global/button/Button";
import SearchBar from "@/components/global/searchbar/Searchbar";
import { Fragment } from "react";

export default function Title(){
    return(
        <div id="title" className="title-container">
            <div className="title">
                <h5>Board</h5>
                <h1>Wikiflix</h1>
            </div>

            <div className="board-options-container">
                <Button text={
                    <>
                        <span className="material-symbols-outlined">add</span>
                        <span>Novo</span>
                    </>
                }/>
                <SearchBar text={"Palavra-chave ou status"}/>
            </div>

        </div>
    )
}