import React from 'react';

function Card(props) {
	return (
		<div className="card">
			{props.children[0]}
			<div className="card-body">
				{props.children[1]}
				{props.children[2]}
				{props.children[3]}
			</div>
		</div>
	);
}

export default Card;
