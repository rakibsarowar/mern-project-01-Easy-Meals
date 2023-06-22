import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Home/Home/Shared/Header';
import Singlerecipe from './Singlerecipe';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SIngleChefInfo = () => {

    const chefInfo = useLoaderData();
    const { name, bio, picture_02, likes, years_of_experience, recipes } = chefInfo;
    console.log(recipes)
    return (
        <div>
            <Header></Header>
            <div className='container mt-4 '>

                <div className='row'>
                    <div className='sm-w-25 col-sm-12 col-lg-4 '>
                        <img className='img-fluid' src={picture_02} alt="" />
                    </div>
                    <div className='col-sm-12 col-lg-8 px-sm-2 px-lg-5'>
                        <h2>Chef Name: {name}</h2>
                        <p>{bio}</p>
                        <p><span className='fw-bold'>Total Years of experience:</span> {years_of_experience}</p>
                        <p><span className='fw-bold'>Total recipes:</span> {recipes.length}</p>
                        <p><span className='fw-bold'>Likes:</span> {likes}</p>
                    </div>
                </div>
            </div>
            <div className='container px-5 mt-5'>
                <div className='text-center'>
                    <h2>All Recipes of {name}</h2>
                </div>
                <div className='d-flex flex-row flex-wrap gap-4'>
                    <ToastContainer></ToastContainer>
                    {
                        recipes.map((recipe, index) => <Singlerecipe
                            key={index}
                            recipe={recipe}
                        ></Singlerecipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SIngleChefInfo;