import './Entries.css';
import React, {useContext} from 'react';
import Slider from "react-slick";
import Entry from "./Entry";
import {SymptomsContext, FeelingContext} from "./ContextComponent";

const Entries = (props) => {
    const options = {weekday: 'long'}
    const date = new Date();
    let today = date.toLocaleDateString("en-US", options) + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

    const {checkboxes, setCheckboxes} = useContext(SymptomsContext);
    const {feel, setFeel} = useContext(FeelingContext);

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='entriesMain'>
            <h2 className='previousEntries'> Previous Entries </h2>
            <Slider {...settings}>
                <div>
                    <h3 className='entriesTitle'>{today}</h3>
                    <h4 className='entriesTitle'>{feel}</h4>
                    <div className='experiencingAndNotesWrapper' id='entriesCarouselWrapper'>
                        <div className='entriesNotes'>
                            <p className='entriesCarouselTitle'>Experiencing:</p>
                            <div className='entriesSymptoms'>
                                {checkboxes.map(symptom => {
                                    return (
                                        <p> {symptom}</p>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='entriesNotes'>
                            <p className='entriesCarouselTitle'>Notes:</p>
                            <div className='entriesSymptoms'>
                                {props.location.state}
                            </div>
                        </div>
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

