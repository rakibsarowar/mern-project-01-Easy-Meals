import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import { authContext } from '../providers/AuthProvider';
import { Spinner } from 'react-bootstrap';


const Chef = ({ info }) => {
    const {id,likes, name, picture, recipes, years_of_experience } = info;
    console.log(recipes)
    const {loading} = useContext(authContext);
    if(loading){
        return <Spinner animation="border" variant="secondary" />
    }

    return (
        <>
            <Card className='border border-warning' style={{ width: '18rem' }}>
                <div className='mt-2 text-center'>
                    <LazyLoad>
                    <Card.Img style={{ width: '8rem' }} variant="top" src={picture} />
                    </LazyLoad>
                    
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div>
                        <p><span className='fw-bold'>Likes:</span> {likes}</p>
                        <p><span className='fw-bold'>Experience:</span> {years_of_experience} Years</p>
                        <p><span className='fw-bold'>Total Recipes:</span> {recipes.length}</p>
                    </div>
                    <div className='text-center'>

                        <Link to={`/chefs/${id}`}>
                            <Button variant="btn btn-warning btn-lg btn-block text-light">View Recipes Button</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default Chef;