import React from 'react';
import HomeHero from "./HomeHero/homeHero";
import HomeAbout from "./HomeAbout/homeAbout";
import HomePro from "./HomePro/homePro";

const Home = () => {
    return (
        <>
            <HomeHero/>
            <HomeAbout/>
            <HomePro/>
        </>
    );
};

export default Home;