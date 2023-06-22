import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';



const Singlerecipe = ({ recipe }) => {
    const [modalShow, setModalShow] = React.useState(false);

    const { Name, url, Description, Ingredients, Method, Rating } = recipe;


    const handleClick = event => {
        toast.success('WOW! This is your Favorite');
        event.currentTarget.disabled = true;
    };

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {Name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{Description}</h4>
                    <p>
                       <span className='fw-bold'>Ingredients</span>: {Ingredients}
                    </p>
                    <p><span className='fw-bold'>Cocking Method:</span> {Method}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (

        <>
            <div>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            <div className='text-center mt-5'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={url} />
                    <Card.Body>
                        <Card.Title>{Name}</Card.Title>
                        <Card.Text>
                            {Description}
                            <p><span className='fw-bold'>Rating:</span> ({Rating})</p>
                        </Card.Text>
                        <div>
                            <Button variant="primary" onClick={() => setModalShow(true)} className='mb-2' >Recipe Details</Button>
                            <Button onClick={handleClick} variant="primary">Favorite Recipe</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Singlerecipe;