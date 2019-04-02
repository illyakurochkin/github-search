import React from 'react';

function renderLabels({watchersCount, forksCount, openIssuesCount}) {
  const labels = [];

  if (openIssuesCount) {
    labels.push((
      <div className="ui orange basic label">
        <i className="info icon" />
        {openIssuesCount}
      </div>
    ));
  }

  if (watchersCount) {
    labels.push((
      <div className="ui image blue basic label">
        <i className="star outline icon" />
        {watchersCount}
      </div>
    ));
  }

  if (forksCount) {
    labels.push((
      <div className="ui green basic label">
        <i className="copy outline icon" />
        {forksCount}
      </div>
    ));
  }

  return labels;
}

class Repository extends React.Component {
  state = {active: false};

  onHover = () => {
    this.setState({active: true});
  };

  afterHover = () => {
    this.setState({active: false});
  }

  render() {
    const {props, state} = this;
    const {
      url,
      name,
      description,
      watchersCount,
      forksCount,
      language,
      owner,
      openIssuesCount
    } = props.repository;

    return (

      <div
        className={`row ui ${state.active ? 'secondary' : ''} segment`}
        onMouseOver={this.onHover}
        onFocus={this.onHover}
        onMouseOut={this.afterHover}
        onBlur={this.afterHover}
      >
        <div className="middle aligned seven wide column">
          <h3><a className="link" href={url}>{name}</a></h3>
          <p>{description}</p>
        </div>
        <div className="middle aligned three wide column">
          <a href={owner.html_url}>
            <img alt="avatar" className="ui avatar image" src={owner.avatar_url} />
            <span>
              {' '}
              {owner.login}
            </span>
          </a>
        </div>
        <div className="middle aligned center aligned two wide column">
          <div>{language}</div>
        </div>
        <div className="middle aligned center aligned four wide column">
          {renderLabels({forksCount, watchersCount, openIssuesCount})}
        </div>
      </div>

    );
  }
}

export default Repository;
