import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';

export default class NavBar extends React.Component{

render(){
	return(
		<Container>
			<Navbar style={{backgroundColor: '#000000'}} expand="lg">
			<Navbar.Brand href="/" style={{color: '#FFFFFF'}}>Presley Paints</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto" >
					<Nav.Link href="/" style={{color: '#FFFFFF'}}>Home</Nav.Link>
					<Nav.Link style={{color: '#FFFFFF'}} href="/about">About</Nav.Link>
					<NavDropdown title="Gallery" id="basic-nav-dropdown">
						<NavDropdown.Item href="/portfolio">Portfolio</NavDropdown.Item>
						<NavDropdown.Item href="/available">Available</NavDropdown.Item>
						<NavDropdown.Item href="/customOrders">Custom Orders</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="/contact" style={{color: '#FFFFFF'}}>Contact</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>
			</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}
}