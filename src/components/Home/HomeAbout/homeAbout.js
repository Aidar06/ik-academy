import React, {useEffect, useRef, useState} from 'react';

const HomeAbout = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const ref = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const handleScroll = () => {
        const rect = ref.current.getBoundingClientRect();
        const rect1 = ref1.current.getBoundingClientRect();
        const rect2 = ref2.current.getBoundingClientRect();
        if (rect.top + 80 < window.innerHeight){
            setIsVisible(true)
        }else {
            setIsVisible(false)
        }

        if (rect1.top + 80 < window.innerHeight){
            setIsVisible1(true)
        }else {
            setIsVisible1(false)
        }

        if (rect2.top + 80 < window.innerHeight){
            setIsVisible2(true)
        }else {
            setIsVisible2(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                            <h3 ref={ref} style={{transform: isVisible? '' : 'translateX(700px)'}}><span>30</span> группа окуп бүтүрдү</h3>
                        </div>
                        <div className='homeAbout--group__block'>
                            <h3 ref={ref1} style={{transform: isVisible1? '' : 'translateX(700px)'}}><span>15 000</span> ашык студент</h3>
                        </div>
                        <div className='homeAbout--group__block'>
                            <h3 ref={ref2} style={{transform: isVisible2? '' : 'translateX(700px)'}}><span>50%</span> өз бизнесин башташты</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;