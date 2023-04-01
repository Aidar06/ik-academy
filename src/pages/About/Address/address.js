import React from 'react';

const Address = () => {
    return (
        <section id="address">
            <div className="container">
                <div className="address">
                    <h1>Биздин Дарек</h1>
                    <div className="address--line"></div>
                    <div className="address--lineTwo"></div>
                    <div className="address--block">
                        <div className="address--block__text">
                            <h3>Бишкек Шаары</h3>
                            <li>Maximum бизнес центр</li>
                            <li>Турусбеков 109/2</li>
                        </div>
                        <iframe className="img sm:ml-auto" width={900} height={600}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376.8794814919531!2d74.58498002936093!3d42.87978510000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec98b25534ad5%3A0xc280874f7abf9dc!2sWEBILIM24!5e1!3m2!1sru!2skg!4v1680361253880!5m2!1sru!2skg"
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Address;