import React from 'react';

function Header() {
  return (
    <div className="ui center aligned container">
      <div className="ui hidden divider" />
      <h2 className="ui icon massive header">
        <i className="github icon" />
        <div className="content">
          GitHub

          {' '}
          <div className="sub header">Search Repositories</div>
        </div>
      </h2>
    </div>
  );
}

export default Header;
