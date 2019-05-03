import React from 'react';
import './search.scss'

export default function Search(props){
    

        return(
            <>
            <form>
                <input 
                    type="text" 
                    className="searchInput " 
                    onChange={props.search} 
                    name="searchInput" 
                    placeholder="&#xF002; Search"
                />
                
            </form>
            </>
        )
}