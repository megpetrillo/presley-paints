import React from 'react';
import NavBar from '../components/NavBar';
import HomePage from '../pages/HomePage';

export default class App extends React.Component {

	render(){
		return(
			<div className="container-fluid">
				<HomePage />
			</div>
		);
	}
}
