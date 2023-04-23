import React from 'react';
import {FaChalkboardTeacher} from "react-icons/fa";
import {HiCalendarDays} from "react-icons/hi2";
import {MdOutlinePlayLesson} from "react-icons/md";

const HomePro = () => {
    return (
        <section id='homePro'>
            <div className="container">
                <div className="homePro">
                    <h1> <pre>ТРЕНИНГДИН ПРОГРАММАСЫ</pre></h1>
                    <div className="homePro--group">
                        <div className="homePro--group__block">
                            <div className="homePro--group__block--icon">
                                <FaChalkboardTeacher/>
                            </div>

                            <div className="homePro--group__block--info">
                                <h2><pre>6 күн</pre></h2>
                                <div></div>
                                <h4><pre>ТРЕНЕР</pre></h4>
                            </div>
                        </div>
                        <div className="homePro--group__block">
                            <div className="homePro--group__block--icon">
                                <HiCalendarDays/>
                            </div>

                            <div className="homePro--group__block--info">
                                <h2><pre>45 күн</pre></h2>
                                <div></div>
                                <h4><pre>5 КҮН САБАК, 1 КҮН ЭФИР</pre></h4>
                            </div>
                        </div>
                        <div className="homePro--group__block">
                            <div className="homePro--group__block--icon">
                                <MdOutlinePlayLesson/>
                            </div>

                            <div className="homePro--group__block--info">
                                <h2><pre>3 күн</pre></h2>
                                <div></div>
                                <h4><pre>КВЕСТ (САБАК) КҮНҮНӨ</pre></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePro;