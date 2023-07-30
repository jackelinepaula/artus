import { Fragment } from 'react'
import './searchbar.css'

function SearchBar(props){
    return(
        <Fragment>
            <div className="search">
                <span className="material-symbols-outlined">search</span>
                <input type="text" key="query" placeholder={props.text}/>
            </div>
        </Fragment>
    )
}

export default SearchBar
