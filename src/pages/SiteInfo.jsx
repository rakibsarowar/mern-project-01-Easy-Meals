import React from 'react';
import { Card } from 'react-bootstrap';
import { HiOutlineEmojiHappy, HiUserGroup, HiOutlineTable } from "react-icons/hi";


const SiteInfo = () => {
    return (
        <div className='container d-flex flex-row flex-wrap justify-content-center my-5 gap-5 text-center mx-auto '>
            <Card className='border border-warning py-5' style={{ width: '18rem' }}>
                <Card.Body>
                    <HiOutlineEmojiHappy size={'2em'}></HiOutlineEmojiHappy>
                    <Card.Title className='fw-bold text-dark py-4'>Subscriber</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">15K+</Card.Subtitle>
                </Card.Body>
            </Card>
            <Card className='border border-warning py-5' style={{ width: '18rem' }}>
                <Card.Body>
                    <HiUserGroup size={'2em'}></HiUserGroup>
                    <Card.Title className='fw-bold text-dark py-4'>Visitors</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">25K+</Card.Subtitle>
                </Card.Body>
            </Card>
            <Card className='border border-warning py-5' style={{ width: '18rem' }}>
                <Card.Body>
                    <HiOutlineTable size={'2em'}></HiOutlineTable>
                    <Card.Title className='fw-bold text-dark py-4'>Total Recipe</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">1201</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SiteInfo;