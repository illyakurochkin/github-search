import React from 'react';

class SearchBar extends React.Component {
  state = {query: ''};

  onInputChange = (event) => {
    this.setState({query: event.target.value});
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    const {props, state} = this;
    props.onSubmit(state.query);
  };

  render() {
    const {state} = this;
    return (
      <div className="ui huge center aligned container">
        <form className="search-bar ui search" onSubmit={this.onFormSubmit}>
          <div className={`ui left icon input ${state.isLoading ? 'loading' : ''}`}>
            <input
              className="prompt"
              onChange={this.onInputChange}
              value={state.query}
              type="text"
              placeholder="Search..."
            />
            <i className="search icon" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
