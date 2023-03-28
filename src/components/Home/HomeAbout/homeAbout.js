import React from 'react';

const HomeAbout = () => {
    return (
        <section id='homeAbout'>
            <div className="container">
                <div className="homeAbout">
                    <div className="homeAbout--title">
                        <h1>ТРЕНИНГ ТУУРАЛУУ</h1>

                        <p>БИЗНЕС НӨЛДӨН онлайн тренинги 2019-жылы СТАРТ алган</p>
                    </div>

                    <div className='homeAbout--group'>
                        <div className='homeAbout--group__block'>
                            <h3><span>30</span> группа окуп бүтүрдү</h3>
                        </div>
                        <div className='homeAbout--group__block'>
                            <h3><span>15 000</span> ашык студент</h3>
                        </div>
                        <div className='homeAbout--group__block'>
                            <h3><span>50%</span> өз бизнесин башташты</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;