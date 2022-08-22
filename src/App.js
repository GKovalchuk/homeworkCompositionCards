import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
	const image = 'https://via.placeholder.com/180x130';
	const cardText = 'Card title';
	const cardTitle = "Some quick example text to build on the card title and make up the bulk of the card's content.";
	const cardButtonText = 'Go somewhere';
	const cardButtonRef = '#';

	return (
		<Card >
			<img src={image} className="card-img-top" alt="..." />
			<h5 className="card-title">{cardText}</h5>
			<p className="card-text">{cardTitle}</p>
			<a href={cardButtonRef} className="btn btn-primary">{cardButtonText}</a>
		</Card>
	);
}

export default App;
