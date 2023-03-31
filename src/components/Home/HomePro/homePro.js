import React from 'react';
import {FaChalkboardTeacher} from "react-icons/fa";
import {HiCalendarDays} from "react-icons/hi2";
import {MdOutlinePlayLesson} from "react-icons/md";

const HomePro = () => {
    return (
        <section id='homePro'>
            <div className="container">
                <div className="homePro">
                    <h1>ТРЕНИНГДИН ПРОГРАММАСЫ</h1>
                    <div className="homePro--group">
                        <div className="homePro--group__block">
                            <div className="homePro--group__block--icon">
                                <FaChalkboardTeacher/>
                            </div>

                            <div className="homePro--group__block--info">
                                <h2>6</h2>
                                <div></div>
                                <h4>ТРЕНЕР</h4>
                            </div>
                        </div>
                        <div className="homePro--group__block">
                            <div className="homePro--group__block--icon">
                                <HiCalendarDays/>
                            </div>

                            <div className="homePro--group__block--info">
                                <h2>45 КҮН</h2>
                                <div></div>
                                <h4>5 КҮН САБАК, 1 КҮН ЭФИР</h4>
                            </div>
                        </div>
                        <div className="homePro--group__block">
                            <div className="homePro--group__block--icon">
                                <MdOutlinePlayLesson/>
                            </div>

                            <div className="homePro--group__block--info">
                                <h2>3</h2>
                                <div></div>
                                <h4>КВЕСТ (САБАК) КҮНҮНӨ</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePro;