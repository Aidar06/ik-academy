import React from 'react';
import {BsFillTelephoneFill, BsInstagram, BsWhatsapp} from "react-icons/bs";
import {FaTelegramPlane, FaYoutube} from "react-icons/fa";


const HomeHero = () => {
    return (
        <section id='homeHero'>
                <div className='homeHero'>
                    <div className='homeHero--con'>
                        <a href="https://www.instagram.com/iakademy/"><BsInstagram/></a>
                        <a href="https://www.youtube.com/@user-dg3ny2jq7b/featured"><FaYoutube/></a>
                        <a href="#"><FaTelegramPlane/></a>
                        <a href="https://wa.me/message/HBAQEJ7CX2PII1"><BsWhatsapp/></a>
                        <a href="tel:+996(555)-555-555"><BsFillTelephoneFill/></a>
                    </div>
                    <div className='homeHero--block'></div>
                    <div className="homeHero--info">
                       <h1>БИЗНЕСКЕ БОЛГОН <br/> КАДАМДАР</h1>
                        <button>Катталуу Учун</button>
                    </div>
                </div>
        </section>
    );
};

export default HomeHero;