import React from 'react';
import Loader from './Loader';
import Repository from './Repository';

class RepositoryList extends React.Component {

  renderRepositoryList() {
  	return this.props.repositories.map(
  		repository => (<Repository repository={repository} key={repository.id} />)
  	);
  }

  render() {
	if(!this.props.repositories || this.props.repositories.length === 0) {
		return (
			<div align="center"><i>results will be shown here...</i></div>
		);
	}

    return (
        <div className="ui grid">
        <div className="row">
			<div className="seven wide column">
				Name
			</div>
			<div className="three wide column ">
				Author
			</div>
			<div className=" two wide column ">
				Language
			</div>
			<div className="auto wide column ">
				Labels
			</div>

        </div>
          {this.renderRepositoryList()}
        </div>
    );
  }
}

export default RepositoryList;