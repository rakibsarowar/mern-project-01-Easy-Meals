import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../../providers/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";


const Login = () => {
    const {signIn, signInWithGoogle, signInWithGithub, user} = useContext(authContext);
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const location = useLocation()
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'
    

// sign by github ------------------------------------------------------------
    const handleGithubSignIn = () =>{
        signInWithGithub()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setError("");
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })
    }
    
    // sign in by email & password ------------------------------------------------------------
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, {replace: true})
            setError("");
        })
        .catch(error=>{
            console.log(error)
            setError(error.message);
        })
    }
    
    // sign by google ------------------------------------------------------------
    const handleGoogleSignIn = ()=>{
            signInWithGoogle()
            .then(result =>{
                const loggedUser = result.user;
                console.log(loggedUser)
                setError("");
            })
            .catch(error =>{
                console.log(error)
                setError(error.message);
            })
    }
    const handleSignOut =()=>{
        signOut(auth)
        .then(result=>{
            console.log(result)
            setUser(null)
            setError("");
        })
        .catch(error =>{
            console.log(error)
            setError(error.message);
        })
    }
    
    return (
        <Container className='p-4 mt-4 mx-auto col-sm-12 col-lg-4 bg-warning bg-opacity-50'>
            <h3>Please login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text> 
                <p className='mt-4'>Don't have an account? <Link to="/register">Register Now</Link></p>
                </Form.Text>
            </Form>
            
            <div>
                {
                    user? "" :
                    <div className='d-flex flex-row flex-wrap mb-3 gap-2'>
                        <h6>Or sign up with,</h6> <br />
                        <Button onClick={handleGoogleSignIn} variant="outline-success"><FaGoogle></FaGoogle> Google Login</Button>
                        <Button onClick={handleGithubSignIn} variant="outline-success"><FaGithub></FaGithub> Github Login</Button>                        
                    </div>
                }
            </div>
            <p className='text-danger text-center fw-bold'>{error}</p>
        </Container>
    );
};

export default Login;