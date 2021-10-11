import React from 'react';
import './Experience.css';

function Experience() {

    const options = {weekday: 'long'}
    const date = new Date();
    let today = date.toLocaleDateString(undefined, options) + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

    return (
        <div>

            <div className='experienceMain'>
                <div className='experienceHeader'>
                    <h3> {today} </h3>
                    <div>
                        <a className='experienceButton' href="Entries.js">See previous entries</a>
                    </div>
                </div>
                <p className='feeling'>Feeling ...</p>

                <div className='experiencingAndNotesWrapper'>
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
                <div className='experienceSubmitWrapper'>
                    <button className='experienceButton' id='experienceSubmit'> Add to entries</button>
                </div>
            </div>

        </div>
    );
}

export default Experience;