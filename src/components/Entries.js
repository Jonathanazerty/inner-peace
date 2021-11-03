import './Entries.css';
import React, {useContext} from 'react';
import Slider from "react-slick";
import Entry from "./Entry";
import {SymptomsContext} from "./ContextComponent";

const Entries = (props) => {
    const {isChecked, setIsChecked} = useContext(SymptomsContext);

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
            <div> {isChecked}</div>
        </div>
    )
}

export default Entries;