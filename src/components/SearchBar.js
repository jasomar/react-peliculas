import React from "react";
import { useState } from "react";
import '../css/SearchBar.css';
function SearchBar(props){
    const {
        onSearch
    } = props;
    
    const [searchText, setSearchText ] = useState('');
    
    const handelInput = (e) =>{
        const text = e.target.value
        setSearchText(text)
    }

    const handelEnterKeyPressed = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchText)
        }
    }

    return(
        <div>
            <div className="control">
                <input 
                    className="input" 
                    type="text" 
                    onChange={handelInput} 
                    onKeyPress={handelEnterKeyPressed} 
                    value={searchText}
                    placeholder=" Search your movies"
                    ></input>
            </div>
        </div>
    );
}
export default SearchBar;
