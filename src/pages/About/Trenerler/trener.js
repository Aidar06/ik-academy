import React from 'react';
import './trainer.scss';
import myktybek from './../../../assets/img/arstanbek.jpg'
import askar from './../../../assets/img/askar.png'
import temirlan from './../../../assets/img/temirlan.jpg'
import alya from './../../../assets/img/aliya.jpeg'
import baktygul from './../../../assets/img/baktygul.jpg'
import raushan from './../../../assets/img/raushan.jpg'
import { useState, useEffect, useRef } from 'react';

const Trainers = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const handleScroll = () => {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top + 200 < window.innerHeight){
            setIsVisible(true)
        }else {
            setIsVisible(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="trainer">
            <div className="container">
                <div className="trainer">
                    <h1 ref={ref}><pre>Биздин Тренерлер</pre></h1>
                    <div style={{width: isVisible? '' : '0px'}} className="trainer--line"></div>
                    <div style={{width: isVisible? '' : '0px'}} className="trainer--line2"></div>

                    <div className='trainer--group'>
                        <div className="trainer--group__block">
                          <div className='trainer--group__block--img'>
                              <img src={myktybek} alt="img"/>
                              <div></div>
                          </div>
                            <h3><pre>МЫКТЫБЕК АРСТАНБЕК</pre></h3>
                            <li>КООМДУК ИШМЕР</li>
                            <li>ӨНҮГҮҮ ТРЕНЕРИ</li>
                            <li>ЖУРНАЛИСТ</li>
                        </div>

                        <div className="trainer--group__block">
                            <div className='trainer--group__block--img'>
                                <img src={askar} alt="img"/>
                                <div></div>
                            </div>
                            <h3><pre>АКЖОЛТОЙ АСКАР</pre></h3>
                            <li>"СҮРДҮ ЖЕҢҮҮ" ТРЕНИНГИНИН ТРЕНЕРИ</li>
                            <li>БЛОГЕР</li>
                        </div>

                        <div className="trainer--group__block">
                            <div className='trainer--group__block--img'>
                                <img src={temirlan} alt="img"/>
                                <div></div>
                            </div>
                            <h3><pre>ТЕМИРЛАН БОРОНБАЙ</pre></h3>
                            <li>ТРЕНЕР</li>
                            <li>ТАРГЕТОЛОГ</li>
                        </div>

                        <div className="trainer--group__block">
                            <div className='trainer--group__block--img'>
                                <img src={alya} alt="img"/>
                                <div></div>
                            </div>
                            <h3><pre>АЛИЯ ТУРГАНБЕКОВА</pre></h3>
                            <li>ТРЕНЕР</li>
                            <li>МАРКЕТОЛОГ</li>
                        </div>

                        <div className="trainer--group__block">
                            <div className='trainer--group__block--img'>
                                <img src={baktygul} alt="img"/>
                                <div></div>
                            </div>
                            <h3><pre>БАКТЫГҮЛ ЖОРОЕВА</pre></h3>
                            <li>ТРЕНЕР</li>
                            <li>ТАРГЕТОЛОГ</li>
                        </div>

                        <div className="trainer--group__block">
                            <div className='trainer--group__block--img'>
                                <img src={raushan} alt="img"/>
                                <div></div>
                            </div>
                            <h3><pre>РАУШАНА МУРАТАЛИЕВА</pre></h3>
                            <li>ТРЕНЕР</li>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Trainers;