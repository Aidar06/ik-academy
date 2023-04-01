import React from 'react';
import './index.scss';
import About from "./AboutUs/About";
import Trainers from "./Trenerler/trener";
import Address from "./Address/address";

const Index = () => {
    return (
        <div>
            <About/>
            <Trainers/>
            <Address/>
        </div>
    );
};

export default Index;