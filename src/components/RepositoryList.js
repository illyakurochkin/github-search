import React from 'react';
import Repository from './Repository';

class RepositoryList extends React.Component {
  renderRepositoryList() {
    const {props} = this;
    return props.repositories.map(
      repository => (
        <Repository
          repository={{
            id: repository.id,
            url: repository.html_url,
            name: repository.full_name,
            description: repository.description,
            watchersCount: repository.watchers_count,
            forksCount: repository.forks_count,
            language: repository.language,
            openIssuesCount: repository.open_issues_count,
            owner: repository.owner
          }}
          key={repository.id}
        />
      )
    );
  }

  render() {
    const {props} = this;
    if (props.repositories === null) {
      return (
        <div align="center"><i>results will be shown here...</i></div>
      );
    }

    if (props.repositories.length === 0) {
      return (
        <div align="center"><i>there are no repositories with this name</i></div>
      );
    }

    return (

      <div className="ui grid">
        <div className="ui hidden divider" />
        <div className="row">
          <div className="seven wide column">
        Name

          </div>
          <div className="three wide column ">
        Author

          </div>
          <div className="center aligned two wide column ">
        Language

          </div>
          <div className="center aligned four wide column ">
        Labels

          </div>

        </div>
        {this.renderRepositoryList()}
      </div>

    );
  }
}

export default RepositoryList;
