import React, { useContext } from 'react';
import logo from '../../../../assets/logo.png'
import { Button, Container, Nav, Navbar, OverlayTrigger } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../../../providers/AuthProvider';
import Tooltip from 'react-bootstrap/Tooltip';




const Header = () => {
    const { user, logOut } = useContext(authContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }


    return (
        <div>
            <div className='text-center my-4'>
                <img href="#home" className='w-25' src={logo} alt="" />
            </div>
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container className=''>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="mx-auto gap-2">

                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "text-decoration-none" : isActive ? "text-decoration-none text-warning" : "text-decoration-none text-light"
                                } to="/">Home</NavLink>

                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "text-decoration-none" : isActive ? "text-decoration-none text-warning" : "text-decoration-none text-light"
                                } to="/blogs">Blogs</NavLink>

                            </Nav>

                            <Nav>

                                <OverlayTrigger
                                    key="top"
                                    placement="top"
                                    overlay={
                                        <Tooltip>
                                            {user && user.displayName &&
                                                <div>
                                                    {user.displayName}
                                                </div>
                                            }
                                        </Tooltip>
                                    }
                                >
                                    <div>
                                        {user &&
                                            <img className='rounded-circle p-2' src={user.photoURL} alt="" width="60px" height="60px" />
                                        }
                                    </div>
                                </OverlayTrigger>


                                {
                                    user ?
                                        <Button onClick={handleLogOut} variant='secondary'>Logout</Button> :

                                        <div>
                                            <Link to="/register">
                                                <Button variant='link'>Register</Button>
                                            </Link>

                                            <Link to="/login">
                                                <Button variant='link'>Login</Button>
                                            </Link>
                                        </div>

                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;