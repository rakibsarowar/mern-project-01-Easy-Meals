import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../../providers/AuthProvider';



const Register = () => {
    const [error, setError] = useState("")

    const {createUser} = useContext(authContext);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(form, name, photo, email, password)

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
            setError("");
            form.reset();
        })
        .catch(error => {
            console.log(error)
            setError(error.message);
        })
    }


    return (
        <Container className='bg-warning bg-opacity-50 p-4 mt-4 mx-auto col-sm-12 col-lg-4 '>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Write your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Provide your photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Write email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Write Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms and Condition" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text>
                    <p>Already have an account? <Link to="/login">Login now</Link></p>
                </Form.Text>
            </Form>
            <p className='text-danger text-center'>{error}</p>
        </Container>
    );
};

export default Register;