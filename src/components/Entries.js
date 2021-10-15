import './Entries.css';
import React from 'react';
import Slider from "react-slick";

const Entries = () => {
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
                    <h3 className='entriesTitle'>Date.Date.2021.</h3>
                    <div className='experiencingAndNotesWrapper' id='entriesCarouselWrapper'>
                        <div className='experiencing'>
                            <p>Experiencing:</p>
                            <div className='symptoms'>
                                <div>
                                    <input type="checkbox" id="symptom1" name="symptom1" value="shortnessOfBreath"/>
                                    <label htmlFor="symptom1"> Shortness of breath </label>
                                </div>
                                <div>
                                    <input type="checkbox" id="symptom2" name="symptom2" value="heartPalpitations"/>
                                    <label htmlFor="symptom2">Heart palpitations</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="symptom3" name="symptom3" value="nausea"/>
                                    <label htmlFor="symptom3">Nausea</label>
                                </div>
                            </div>
                        </div>

                        <div className='notes'>
                            <p><label htmlFor="notes">Notes:</label></p>
                            <textarea className='symptoms' id="notes" name="notes"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    )
}

export default Entries;