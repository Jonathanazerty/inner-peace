import React from 'react';
import data from "./data/data.json";

function Entry(props) {
    return (
        <div>
            <h3 className='entriesTitle'>{data[props.number].Date}</h3>
            <h4 className='entriesTitle'>Feeling {data[props.number].Feeling}</h4>
            <div className='experiencingAndNotesWrapper' id='entriesCarouselWrapper'>
                <div className='experiencing'>
                    <p>Experiencing:</p>
                    <div className='symptoms'>
                        {data[props.number].Experiencing}
                    </div>
                </div>
                <div className='notes'>
                    {data[props.number].Notes}
                </div>
            </div>
        </div>

    );
}

export default Entry;