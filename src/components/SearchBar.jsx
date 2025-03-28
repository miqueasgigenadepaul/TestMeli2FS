    import React from "react";
    import "./SearchBar.css"
    import icSearch from "../assets/ic_Search.png";
    import logoMeli from "../assets/Logo_ML.png"

    const SearchBar = () => {
        return (
            <form className = "searchBar">
                    <img className = "logoMeli" src = {logoMeli} alt="Logo"/>
                    <input placeholder = "Nunca dejes de buscar"/>
                <div>
                    <button className = "icSearchButton">
                        <img className = "icSearch" src = {icSearch} />
                    </button>
                </div>
            </form> 
        )
    }

    export default SearchBar