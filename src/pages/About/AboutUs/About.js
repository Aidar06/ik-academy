import React from 'react';
import './About.scss';
import business from './../../../assets/img/zerobusiness.jpg'


const About = () => {
    return (
        <section id="about">
                <h1><pre>Ишкердик Академиясы</pre></h1>
                <div className="about">
                   <div className="about--text">
                       <h4><pre>Академия Тууралуу</pre></h4>
                       <p><pre>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
                           Accusantium ad autem deserunt et facere hic inventore, laborum, <br/>
                           nihil numquam praesentium quae quas quibusdam reprehenderit sequi <br/>
                           sint sit temporibus totam veniam!
                       </pre>
                       </p>
                   </div>
                    <img src={business} alt="img"/>
                </div>
        </section>
    );
};

export default About;