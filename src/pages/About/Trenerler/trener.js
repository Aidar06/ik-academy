import React from 'react';
import './trainer.scss';
import myktybek from './../../../assets/img/arstanbek.jpg'
import askar from './../../../assets/img/askar.png'
import temirlan from './../../../assets/img/temirlan.jpg'
import alya from './../../../assets/img/aliya.jpeg'
import baktygul from './../../../assets/img/baktygul.jpg'
import raushan from './../../../assets/img/raushan.jpg'

const Trainers = () => {
    return (
        <section id="trainer">
            <div className="container">
                <div className="trainer">
                    <h1>Биздин Тренерлер</h1>
                    <div className="trainer--line"></div>
                    <div className="trainer--line2"></div>

                    <div className="trainer--man">
                        <div className="trainer--man__one">
                            <img src={myktybek} alt="img"/>
                            <h3>МЫКТЫБЕК АРСТАНБЕК</h3>
                            <li>КООМДУК ИШМЕР</li>
                            <li>ӨНҮГҮҮ ТРЕНЕРИ</li>
                            <li>ЖУРНАЛИСТ</li>
                        </div>

                        <div className="trainer--man__two">
                            <img src={askar} alt="img"/>
                            <h3>АКЖОЛТОЙ АСКАР</h3>
                            <li>"СҮРДҮ ЖЕҢҮҮ" ТРЕНИНГИНИН ТРЕНЕРИ</li>
                            <li>БЛОГЕР</li>
                        </div>
                        <div className="trainer--man__three">
                            <img src={temirlan} alt="img"/>
                            <h3>ТЕМИРЛАН БОРОНБАЙ</h3>
                            <li>ТРЕНЕР</li>
                            <li>ТАРГЕТОЛОГ</li>
                        </div>
                    </div>

                    <div className="trainer--woman">
                        <div className="trainer--woman__one">
                            <img src={alya} alt="img"/>
                            <h3>АЛИЯ ТУРГАНБЕКОВА</h3>
                            <li>ТРЕНЕР</li>
                            <li>МАРКЕТОЛОГ</li>
                        </div>

                        <div className="trainer--woman__two">
                            <img src={baktygul} alt="img"/>
                            <h3>БАКТЫГҮЛ ЖОРОЕВА</h3>
                            <li>ТРЕНЕР</li>
                            <li>ТАРГЕТОЛОГ</li>
                        </div>
                        <div className="trainer--woman__three">
                            <img src={raushan} alt="img"/>
                            <h3>РАУШАНА МУРАТАЛИЕВА</h3>
                            <li>ТРЕНЕР</li>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Trainers;