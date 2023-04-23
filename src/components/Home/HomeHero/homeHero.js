import React from 'react';
import {BsFillTelephoneFill, BsInstagram, BsWhatsapp} from "react-icons/bs";
import {FaTelegramPlane, FaYoutube} from "react-icons/fa";


const HomeHero = () => {
    return (
        <section id='homeHero'>
                <div className='homeHero'>
                    <div className='homeHero--con'>
                        <a href="https://www.instagram.com/iakademy/" className='homeHero--con__a'><BsInstagram/></a>
                        <a href="https://www.youtube.com/@user-dg3ny2jq7b/featured" className='homeHero--con__a1'><FaYoutube/></a>
                        <a href="#" className='homeHero--con__a2'><FaTelegramPlane/></a>
                        <a href="https://wa.me/message/HBAQEJ7CX2PII1" className='homeHero--con__a3'><BsWhatsapp/></a>
                        <a href="tel:+996(555)-555-555" className='homeHero--con__a4'><BsFillTelephoneFill/></a>
                    </div>
                    <div className='homeHero--block'></div>
                    <div className="homeHero--info">
                       <h1><pre>БИЗНЕСКЕ БОЛГОН <br/> КАДАМДАР</pre></h1>
                        <button><pre>Катталуу Учун</pre></button>
                    </div>
                </div>
        </section>
    );
};

export default HomeHero;