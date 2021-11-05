import './Entries.css';
import React, {useContext} from 'react';
import Slider from "react-slick";
import Entry from "./Entry";
import {SymptomsContext, FeelingContext} from "./ContextComponent";

const Entries = (props) => {
    const options = {weekday: 'long'}
    const date = new Date();
    let today = date.toLocaleDateString(undefined, options) + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

    const {checkboxes, setCheckboxes} = useContext(SymptomsContext);
    const {feel, setFeel} = useContext(FeelingContext);

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    console.log(checkboxes)
    console.log(props)
    return (
        <div className='entriesMain'>
            <h2 className='previousEntries'> Previous Entries </h2>
            <Slider {...settings}>
                <div>
                    <h3 className='entriesTitle'>{today}</h3>
                    <h4 className='entriesTitle'>{feel}</h4>
                    <div className='experiencingAndNotesWrapper' id='entriesCarouselWrapper'>
                    <div className='experiencing'>
                        <p>Experiencing:</p>
                        <div className='symptoms'>
                        <div> {checkboxes}</div>
                        </div>
                    </div>
                    <div className='notes'>{props.location.state}</div>
                    </div>
                </div>
                <Entry number='0'/>
                <Entry number='1'/>
                <Entry number='2'/>
                <Entry number='3'/>
            </Slider>
        </div>
    )
}

export default Entries;