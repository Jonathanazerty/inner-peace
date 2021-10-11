import React from 'react';

function Experience() {

    const options = {weekday: 'long'}
    const date = new Date();
    let today = date.toLocaleDateString(undefined, options) + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

    return (
        <div>
            <h3> {today} </h3>


        </div>
    );
}

export default Experience;