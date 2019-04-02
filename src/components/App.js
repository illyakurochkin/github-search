import React from 'react';
import SearchBar from './SearchBar';
import RepositoryList from './RepositoryList';
import Loader from './Loader';
import Header from './Header';
import github from '../apis/github';


class App extends React.Component {

  state = { repositories: [], isSearching: false };

  onSearchSubmit = async (query) => {
  	this.setState({ isSearching: true });
    const response = await github.get(
      '/search/repositories',
      {
        params: {
          q: query
       }
      }
    );
    console.log(response);
    this.setState({ repositories: response.data.items, isSearching: false });
  };

  renderRepositoryList() {
  	if(this.state.isSearching) {
  		return <Loader />
  	}

  	return <RepositoryList repositories={this.state.repositories}/>;
  }

  render() {
    return (
      <div className="ui very padded container">
      <Header />
      <SearchBar onSubmit={this.onSearchSubmit} />
      <div className="ui hidden divider"></div>
       	{this.renderRepositoryList()}
      </div>
    );
  }
}

export default App;
