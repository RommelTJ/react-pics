import React from 'react';

class SearchBar extends React.Component {

    onInputChange(event) {
        console.log("Here: " + event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} />
                        {/*Alternate syntax:*/}
                        {/*<input type="text" onChange={(e) => console.log("Here: " + e.target.value)} />*/}
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;