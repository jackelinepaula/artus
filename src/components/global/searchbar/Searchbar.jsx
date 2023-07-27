import './searchbar.css'

function SearchBar(props){
    return(
        <>
        <div className="search">
        <span className="material-symbols-outlined">search</span>
            <input type="text" key="query" placeholder={props.text}/>
        </div>
        </>
    )
}

export default SearchBar
