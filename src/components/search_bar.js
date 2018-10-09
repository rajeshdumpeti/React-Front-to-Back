import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(){
        super();
            this.state = { 
              term: '',
              name: 'Rajesh'
        };
    };

    render() {
        return(
            <div className="search-bar">
                 <input 
                    onChange={event => this.setState({term: event.target.value})} />
            </div>
        );
    }
};

export default SearchBar;