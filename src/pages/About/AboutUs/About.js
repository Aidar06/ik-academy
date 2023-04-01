import React from 'react';
import './About.scss';
import business from './../../../assets/img/zerobusiness.jpg'


const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h1>Ишкердик Академиясы</h1>
                <div className="about">
                   <div className="about--text">
                       <h4>Академия Тууралуу</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi atque cupiditate dicta,
                           enim illo incidunt laboriosam magnam minima necessitatibus, nulla officia reiciendis soluta,
                           tenetur vero! Adipisci architecto cum earum eveniet illum iure maxime minima officia possimus
                           praesentium. At consequatur dicta eius impedit iusto magni praesentium quas quo, quod totam.
                       </p>
                   </div>
                    <img src={business} alt="img"/>
                </div>
            </div>
        </section>
    );
};

export default About;