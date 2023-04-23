import React, {useState} from 'react';
import {IoIosArrowUp} from "react-icons/io";
import {AiOutlineReload} from "react-icons/ai";

const HomeLessons = () => {

    const videos = [
        {
            id: 1,
            video: <iframe src="https://www.youtube.com/embed/i8x3fQg4Osw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        },
        {
            id: 2,
            video: <iframe  src="https://www.youtube.com/embed/_Qk4r4Eetuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe >
        },
        {
            id: 3,
            video: <iframe  src="https://www.youtube.com/embed/HCL8e6NH2kg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe >
        },
        {
            id: 4,
            video: <iframe  src="https://www.youtube.com/embed/oeYeis9Y5vU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe >
        },
        {
            id: 5,
            video: <iframe  src="https://www.youtube.com/embed/PR4moHHkmw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe >
        },
        {
            id: 6,
            video: <iframe  src="https://www.youtube.com/embed/f4XysKQzpOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe >
        },
        {
            id: 7,
            video: <iframe  src="https://www.youtube.com/embed/mX9pXv90NgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe >
        },
        {
            id: 8,
            video: <iframe  src="https://www.youtube.com/embed/N8WFXUSvZn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe >
        },
    ]

    const [arrow,setArrow] = useState(false)

    return (
        <section id='homeLessons'>
            <div className="container">
                <div className="homeLessons">
                    <h1><pre>БУЛ ВИДЕОЛОРДУ СӨЗСҮЗ КӨРҮҢҮЗ!</pre></h1>
                    <div className='homeLessons--group'>
                        {
                            videos.slice(0, arrow? videos.length : 2).map(el => (
                                <div className='homeLessons--group__video'>
                                    {el.video}
                                    <div className='homeLessons--group__video--load'>
                                        <AiOutlineReload/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="homeLessons--arrow">
                        <IoIosArrowUp style={{
                            transform: arrow? '' : 'rotate(180deg)',
                            transition: '.5s'
                        }} onClick={()=> setArrow(!arrow)}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeLessons;