import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import logo from '../images/madison-gallery-jumbotron-img-larger.jpg';

export default class HomePage extends React.Component {

	render(){
		var jumbotronCustomStyle = {
			alignItems: 'center',
			backgroundImage: 'url(' + logo + ')',
			backgroundSize: 'cover',
			color: '#FFFFFF',
			backgroundRepeat: 'no-repeat',
			height: 350 + 'px'
		};
		return(
			<div className="container" style={{width: 100 + '%'}}>
				<Jumbotron className="d-block w-100" style={jumbotronCustomStyle}>
  					<h1 className="text-center">Presley Paints</h1>
  				<p className="text-center">
    				Unique color slabs of the heart.
  				</p>
  				
  				<p className="text-center">
    				<Button variant="primary">Explore</Button>
  				</p>
				</Jumbotron>
			</div>
			);
	}
}