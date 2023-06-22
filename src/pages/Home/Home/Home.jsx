import React, { useEffect, useState } from 'react';
import Chef from '../../Chef';
import Hero from '../../Hero';
import Footer from '../../Footer';
import PartnerShip from '../../PartnerShip';
import SiteInfo from '../../SiteInfo';
import ClientInfo from '../../ClientInfo';




const Home = () => {
    const [chefInfo, setChefInfo] = useState([]);
    useEffect(() => {
        fetch('https://easymeal-server-rakibsarowar.vercel.app/chefs/')
            .then(res => res.json())
            .then((data) => setChefInfo(data))
    }, [])

    return (
        <div>
            <Hero></Hero>
            <div>
                <h2 className='display-5 text-center mt-4 text-decoration-underline'>OUR CHEFS</h2>
                <div className='container d-flex flex-row flex-wrap justify-content-center gap-4 mt-4'>
                    {chefInfo.map(info => <Chef
                        key={info.id}
                        info={info}
                    ></Chef>)}
                </div>
            </div>
            <PartnerShip></PartnerShip>
            <SiteInfo></SiteInfo>
            <ClientInfo></ClientInfo>
            <Footer></Footer>
        </div>

    );
};

export default Home;