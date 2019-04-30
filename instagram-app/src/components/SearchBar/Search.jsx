import React from 'react';
import './search.scss'

export default class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            searchInput:'',
            statusActive:false
        }
        this.statusActive = '';
        
    }
    

    searchInput = e =>{
        let key = e.target.name;
        let value = e.target.value;
  
        
        this.setState({
           [key]:value,
        })
        
    }
    
    render(){
        return(
            <>
            <form>
                <input 
                    type="text" 
                    className="searchInput " 
                    onChange={this.searchInput} 
                    name="searchInput" 
                    value={this.state.searchInput}
                    placeholder="&#xF002; Search"
                    
                />
                
            </form>
            </>
        )
    }
}