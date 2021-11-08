import React, {useState} from 'react';
import './Experience.css';
import {useHistory} from 'react-router-dom';
import {useContext} from "react";
import {SymptomsContext} from "./ContextComponent";
import Notes from "../images/notes.png";

function Experience(props) {

    const options = {weekday: 'long'}
    const date = new Date();
    let today = date.toLocaleDateString("en-US", options) + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

    const symptoms = [
        {
            name: "Shortness of breath"
        },
        {
            name: "Heart palpitations"
        },
        {
            name: "Nausea"
        },
        {
            name: "Trembling"
        },
        {
            name: "Restlessness"
        },
        {
            name: "Weak / Lightheaded"
        },
        {
            name: "Headache"
        }
    ];


    const {checkboxes, setCheckboxes} = useContext(SymptomsContext);
    const [notes, setNotes] = useState('');
    const [filteredSymptoms, setFilteredsymptoms] = useState([]);
    const [checkedState, setCheckedState] = useState(
        new Array(symptoms.length).fill(false)
    );

    let history = useHistory();

    const nextPage = () => {
        history.push('/Guidance')
        history.push('/Entries', [notes])
    }
    const handleChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => {
                if (index === position) {
                    setFilteredsymptoms([...filteredSymptoms, {name: symptoms[index].name, state: false}])
                }
                return console.log('')
            }
        )
        setCheckedState(updatedCheckedState);
    }

    const handleSymptoms = () => {
        nextPage();
        handleChange();
        setCheckboxes(filteredSymptoms.map(filteredSymptom => filteredSymptom.name))
    }


    return (
        <div>
            <div className='experienceMain'>
                <div className='experienceHeader'>
                    <h3 className='experienceTitle'> {today} </h3>
                </div>
                <p className='feeling'>{props.location.state}</p>

                <div className='experiencingAndNotesWrapper'>
                    <div className='experiencing'>
                        <p className='experiencingSmallTitle'>Check off all the symptoms you are experiencing:</p>
                        <div className="symptoms-list">
                            {symptoms.map(({name}, index) => {
                                return (
                                    <div key={index}>
                                        <div className="symptoms-list-item">
                                            <div className="symptomsChecklist">
                                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                                <input
                                                    className='checkbox'
                                                    type="checkbox"
                                                    id={`custom-checkbox-${index}`}
                                                    name={name}
                                                    value={name}
                                                    checked={checkedState[index]}
                                                    onChange={() => handleChange(index)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className='notes'>

                        <div className='notesTitleWrapper'>
                            <img src={Notes} className='experienceImage'/>
                            <p className='experiencingSmallTitleRight'><label htmlFor="notes">Notes:</label></p>
                        </div>
                        <textarea className='symptoms' id="notes" name="notes" required value={notes}
                                  onChange={(e) => setNotes(e.target.value)}/>
                    </div>
                </div>
                <div className='experienceSubmitWrapper'>
                    <button className='experienceButton' id='experienceSubmit' value="Confirm"
                            onClick={() => handleSymptoms()}> Confirm symptoms
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Experience;
