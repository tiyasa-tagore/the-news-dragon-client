import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';



const Header = () => {
    const {user} = useContext(AuthContext);

    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism without fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")} </p>
            </div>
            <div className='d-flex'>
            <Button variant="danger">Latest</Button>
            <Marquee className='text-danger' speed={100}>
               I can be a React component, multiple React components, or just some text......... I can be a React component, multiple React components, or just some text.........
            </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
                <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
           
          </Nav>
          <Nav>
             <Nav.Link href="#deets">
                <FaUserCircle style={{fontSize: '2rem'}}>

                </FaUserCircle>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {
                user ?
                <Button variant="secondary">Login</Button> :
                <Link to="/login">
                <Button variant="secondary">Logout</Button>
                </Link>
            }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </Container>
    );
};

export default Header;