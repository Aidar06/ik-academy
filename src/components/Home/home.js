import React from 'react';
import HomeHero from "./HomeHero/homeHero";
import HomeAbout from "./HomeAbout/homeAbout";
import HomePro from "./HomePro/homePro";
import HomeLessons from "./HomeLessons/homeLessons";

const Home = () => {
    return (
        <>
            <HomeHero/>
            <HomeAbout/>
            <HomePro/>
            <HomeLessons/>
        </>
    );
};

export default Home;