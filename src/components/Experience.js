import React from 'react';
import './Experience.css';

function Experience() {

    const options = {weekday: 'long'}
    const date = new Date();
    let today = date.toLocaleDateString(undefined, options) + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

    return (
        <div>

            <div className='experienceHeader'>
                <h3> {today} </h3>
                <a href="Entries.js">See previous entries</a>
            </div>
            <p>Feeling ...</p>

            <div className='experiencingAndNotesWrapper'>
                <div className='experiencing'>
                    <p>Experiencing:</p>
                </div>

                <div className='notes'>
                    <label htmlFor="notes">Notes:</label>
                    <textarea id="notes" name="notes"/>
                </div>
            </div>

        </div>
    );
}

export default Experience;