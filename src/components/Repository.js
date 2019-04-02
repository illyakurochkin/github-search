import React from 'react';

function Repository({ repository }) {
	const {
		id, 
		html_url, 
		full_name, 
		description, 
		created_at, 
		updated_at, 
		watchers_count, 
		forks_count, 
		language,
		owner
	} = repository;
	console.log('full_name', full_name);
	/*<div className="ui divider"></div>*/
	return (
		<>
			
			<div className="row ui segment">
				<div className="seven wide column">
					<a className="link" href={html_url}>{full_name}</a>
					<div>{description}</div>
				</div>
				<div className="three wide column">
					<a href={owner.html_url}>
					  <img className="ui avatar image" src={owner.avatar_url} />
					  <span> {owner.login}</span>
					</a>
				</div>
				<div className="two wide column">
					<div>{language}</div>
				</div>
				<div className="auto wide column">
					
				</div>
			</div>
		</>
	);
}

export default Repository;