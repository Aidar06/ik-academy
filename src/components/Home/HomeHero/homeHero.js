import React from 'react';
import {BsFacebook, BsFillTelephoneFill, BsInstagram, BsWhatsapp} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";


const HomeHero = () => {
    return (
        <section id='homeHero'>
                <div className='homeHero'>
                    <div className='homeHero--con'>
                        <a href="#"><BsInstagram/></a>
                        <a href="#"><BsFacebook/></a>
                        <a href="#"><FaTelegramPlane/></a>
                        <a href="#"><BsWhatsapp/></a>
                        <a href="#"><BsFillTelephoneFill/></a>
                    </div>
                    <div className='homeHero--block'></div>
                    <div className="homeHero--info">
                       <h1>БИЗНЕСКЕ БОЛГОН <br/> КАДАМДАР</h1>
                        <button>БОНУС САБАКТАР</button>
                    </div>
                </div>
        </section>
    );
};

export default HomeHero;