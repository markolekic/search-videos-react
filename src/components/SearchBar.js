import React from 'react'

export default class SearchBar extends React.Component {
    state = {term: ''};

    //method for typing value in input field
    inputChange = (e) => {
        this.setState({term: e.target.value});
    };

    //method for submiting the value
    formSubmit = (e) => {
        e.preventDefault();

        //TODO: Make sure we call
        this.props.formSubmit(this.state.term);
        //Callback from parent component
        this.setState({term: e.target.value = ''});
    }

    render() {
        return ( 
            <div className="search-bar">
                <form 
                onSubmit={this.formSubmit} 
                className="input-field col s12">
                    <input type="text" id="autocomplete-input" className="autocomplete" 
                    value={this.state.term} 
                    onChange={this.inputChange} 
                    autoComplete="off"/>
                    <label htmlFor="autocomplete-input">Search video</label>
                </form>
            </div>
        )
    }
};