import React from 'react';
import SearchBar from './SearchBar';
import RepositoryList from './RepositoryList';
import Loader from './Loader';
import Header from './Header';
import github from '../apis/github';


class App extends React.Component {
  state = {repositories: null, isSearching: false};

  onSearchSubmit = async (query) => {
    this.setState({isSearching: true});
    const response = await github.get(
      '/search/repositories',
      {
        params: {
          q: query
        }
      }
    );
    this.setState({repositories: response.data.items, isSearching: false});
  };

  renderRepositoryList() {
    const {state} = this;

    if (state.isSearching) {
      return <Loader />;
    }

    return <RepositoryList repositories={state.repositories} />;
  }

  render() {
    return (
      <div className="ui very padded container">
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui hidden divider" />
        {this.renderRepositoryList()}
      </div>
    );
  }
}

export default App;
