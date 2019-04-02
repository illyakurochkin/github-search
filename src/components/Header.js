import React from 'react';

function Header(props) {
	return (
		<div className="ui center aligned container">
			<div className="ui hidden divider"></div>
			<h2 className="ui icon massive header">
			  <i className="github icon"></i>
			  <div className="content">
			    GitHub
			    <div className="sub header">Search Repositories</div>
			  </div>
			</h2>
		</div>
	);
}

export default Header;