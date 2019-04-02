import React from 'react';

function Loader(props) {
	
	return (
		<div className="ui container center aligned">
			<div className="ui active medium centered inline loader"></div>
			{props.text}
		</div>
	);
}

export default Loader;