import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (searchTerm) => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: {
                query: searchTerm
            }
        });

        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images.
            </div>
        );
    }
}

export default App;
