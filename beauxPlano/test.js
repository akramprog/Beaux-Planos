import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';
import Item from '..beauxPlano/Images';
import '.css/style.css';


const breakPoints = [
    { widh: 1, itemsToShow: 1 },
    { widh: 550, itemsToShow: 2 },
    { widh: 768, itemsToShow: 3 },
    { widh: 1200, itemsToShow: 4 },
];

function App() {
    return (
        <>
        <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
        <div className="App">
            <Carousel breakPoints={breakPoints}>
                <Item>One</Item>
                <Item>Two</Item>
                <Item>Three</Item>
                <Item>Four</Item>
                <Item>Five</Item>
                <Item>Six</Item>
                <Item>Seven</Item>
                <Item>Eight</Item>
            </Carousel>
        </div>
        </>
    );
}
