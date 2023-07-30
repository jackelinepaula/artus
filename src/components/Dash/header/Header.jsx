import Image from "next/image";
import "./header.css"
import SearchBar from "@/components/global/searchbar/Searchbar";

export default function Header(){
    return(
        <div className="header-container">
            <SearchBar text="O que você está procurando...?"/>

            <div className="profile-container">
                <Image
                    src={"/chopper.jpg"}
                    width={40}
                    height={40}
                    alt="Imagem Perfil"
                    className="profile-img"
                />
            </div>
        </div>
    )
}