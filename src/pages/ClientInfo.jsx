import React from 'react';
import img_1 from '../assets/h1-clients-img-1.png'
import img_2 from '../assets/h1-clients-img-2a.png'
import img_3 from '../assets/h1-clients-img-3a.png'
import img_4 from '../assets/h1-clients-img-4a (1).png'
import img_5 from '../assets/h1-clients-img-5a.png'
import img_6 from '../assets/h1-clients-img-6a (1).png'
import Marquee from "react-fast-marquee";

const ClientInfo = () => {
    return (
        <div className='container p-5 gap-5 mx-auto'>
            <Marquee>
                <div className='d-flex flex-row gap-5 px-5'>
                <img src={img_1} alt="" />
                <img src={img_2} alt="" />
                <img src={img_3} alt="" />
                <img src={img_4} alt="" />
                <img src={img_5} alt="" />
                <img src={img_6} alt="" />
                <img src={img_1} alt="" />
                </div>
            </Marquee>
            
        </div>
    );
};

export default ClientInfo;