import './Entries.css';
import React from 'react';
import Slider from "react-slick";
import Entry from "./Entry";

const Entries = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    console.log(props)
    return (
        <div className='entriesMain'>
            <h2 className='previousEntries'> Previous Entries </h2>
            <Slider {...settings}>
                <Entry number='0'/>
                <Entry number='1'/>
                <Entry number='2'/>
                <Entry number='3'/>
                <Entry number='4'/>
            </Slider>
        </div>
    )
}

export default Entries;