import React, {useState} from 'react';
import {AiOutlineReload} from "react-icons/ai";
import {IoIosArrowUp} from "react-icons/io";
const HomeStudent = () => {
    const videos = [
        {
            id: 1,
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/Vfd3K3EM-XY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        },
        {
            id: 2,
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/JburF7wptCU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        },
        {
            id: 3,
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/-qOypmOEiQY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        },
        {
            id: 4,
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/5DpDA-szJs0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        },
    ]

    const [arrow,setArrow] = useState(false)

    function link() {
        window.location.assign('https://www.youtube.com/@user-dg3ny2jq7b')
    }

    return (
        <section id='homeStudent'>
            <div className="container">
                <div className="homeStudent">
                    <h1>"БИЗНЕС НӨЛДӨН"<br/> ТРЕНИНГИНИН БҮТҮРҮҮЧҮЛӨРҮ</h1>
                    <div className='homeStudent--group'>
                        {
                            videos.slice(0, arrow? videos.length : 2).map(el => (
                                <div className='homeStudent--group__video'>
                                    {el.video}
                                    <div className='homeStudent--group__video--load'>
                                        <AiOutlineReload/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="homeStudent--arrow">
                        <IoIosArrowUp style={{
                            transform: arrow? '' : 'rotate(180deg)',
                            transition: '.5s'
                        }} onClick={()=> setArrow(!arrow)}/>
                    </div>
                    <div className='homeStudent--btn'>
                        <button onClick={()=> link()}>кененирээк</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeStudent;