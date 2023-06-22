import React from 'react';
import hero2 from '../assets/hero-img-2.jpg'

const Hero = () => {
    return (
        <div className='container my-5'>
            <div>
                <div className="p-5 text-center bg-image" style={{ backgroundImage: `url(${hero2})`, height: "600px", backgroundSize: "cover" }}>
                    <div >
                        <div className="d-flex justify-content-left align-items-center text-center text-md-start mt-5 h-100">
                            <div className="text-gray mt-5 w-100">
                                <h1 className="display-5 px-5 mb-3">Hello! <br /> <span className='fw-bold'>Welcome to Easy Meals</span></h1>

                                <div class="row">
                                    <div className='col-sm-12 col-lg-6'>
                                        <p class="px-sm-2 px-lg-5 mb-3 fw-lighter">
                                            Our blog is dedicated to all things food, from recipes and cooking tips to restaurant reviews and food-related travel adventures. <br /> <br />
                                            We believe that food is not just fuel for the body, but also nourishment for the soul, and we aim to share our love of food with our readers through our articles and content.
                                        </p>
                                    </div>
                                </div>
                                <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Hero;