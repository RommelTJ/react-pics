import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(searchTerm) {
        axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID REDACTED'
            },
            params: {
                query: searchTerm
            }
        }).then((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
