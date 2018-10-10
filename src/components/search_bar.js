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
                    placeholder='Search for Your Favorite Videos'
                    onChange={event => this.onInputChange(event.target.value)} />
                 <span></span>   
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar;