import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button} from 'react-bootstrap';
import '../css/custom.css';
export default class NavBar extends React.Component{
render(){
return(
<Container>
<Navbar className="navbar-inverse navbar navbar-expand-lg sticky-top">
<Navbar.Brand className="navbar-inverse navbar navbar-expand-lg sticky-top" href="/">Presley Paints</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-inverse navbar-toggle"/>
	<Navbar.Collapse className="navbar-inverse navbar-collapse">
		<Nav className="navbar-inverse mr-auto">
		<Nav.Link href="/" className="navbar-inverse navbar-link">Home</Nav.Link>
	<Nav.Link href="/about" className="navbar-inverse navbar-link">About</Nav.Link>
	<NavDropdown title="Gallery" className="navbar-inverse navbar-link">
	<NavDropdown.Item href="/portfolio" className="navbar-inverse navbar-link">Portfolio</NavDropdown.Item>
<NavDropdown.Item href="/available" className="navbar-inverse navbar-link">Available</NavDropdown.Item>
<NavDropdown.Item href="/customOrders" className="navbar-inverse navbar-link">Custom Orders</NavDropdown.Item>
</NavDropdown>
<Nav.Link href="/contact" className="navbar-inverse navbar-link">Contact</Nav.Link>
</Nav>
<Form inline>
<FormControl type="text" placeholder="Search" className="mr-sm-2 navbar-inverse navbar-form" />
<Button variant="outline-success">Search</Button>
</Form>
</Navbar.Collapse>
</Navbar>
</Container>
);
}
}