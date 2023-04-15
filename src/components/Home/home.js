import React from 'react';
import HomeHero from "./HomeHero/homeHero";
import HomeAbout from "./HomeAbout/homeAbout";
import HomePro from "./HomePro/homePro";
import HomeLessons from "./HomeLessons/homeLessons";
import HomeStudent from "./HomeStudent/homeStudent";

const Home = () => {
    return (
        <>
            <HomeHero/>
            <HomeAbout/>
            <HomePro/>
            <HomeLessons/>
            <HomeStudent/>
        </>
    );
};

export default Home;