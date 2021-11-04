import React, {useState} from 'react';
import './Experience.css';
import {useHistory} from 'react-router-dom';
import {useContext} from "react";
import {SymptomsContext} from "./ContextComponent";

function Experience(props) {

  const options = {weekday: 'long'}
  const date = new Date();
  let today = date.toLocaleDateString(undefined, options) + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

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
  const [filteredSymptoms, setFilteredsymptoms] = useState([]);
  const [checkedState, setCheckedState] = useState(
      new Array(symptoms.length).fill(false)
  );

    let history = useHistory();

  const nextPage = () => {
      history.push('/Guidance')
  }


  const handleChange = (position) => {
      // const filterSymptoms = []
      const updatedCheckedState = checkedState.map((item, index) => {
        if (index === position) {
          // filterSymptoms.push(symptoms[index].name, index)
          setFilteredsymptoms([...filteredSymptoms, {name:symptoms[index].name, state:false}])
        }
        return console.log('')
      }
      // index === position ? !item : item
        // return console.log(symptoms[index].name)
    )
        setCheckedState(updatedCheckedState);
  }

  const handleSymptoms = () => {
    nextPage();
    handleChange();
    console.log(filteredSymptoms)
    setCheckboxes(filteredSymptoms.map(filteredSymptom => filteredSymptom.name ))
}


    return (
        <div>

            <div className='experienceMain'>
                <div className='experienceHeader'>
                    <h3 className='experienceTitle'> {today} </h3>
                    <div className='experienceButtonWrapper'>
                        <a className='experienceButton' href="Entries.js">See previous entries</a>
                    </div>
                </div>
                <p className='feeling'>{props.location.state}</p>

                <div className='experiencingAndNotesWrapper'>
                    <div className='experiencing'>
                        <p>Experiencing:</p>
                        <ul className="symptoms-list">
                          {symptoms.map(({ name}, index) => {
                            return (
                              <li key={index}>
                                <div className="symptoms-list-item">
                                  <div className="left-section">
                                    <input
                                      type="checkbox"
                                      id={`custom-checkbox-${index}`}
                                      name={name}
                                      value={name}
                                      checked={checkedState[index]}
                                      onChange={() => handleChange(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                    </div>

                    <div className='notes'>
                        <p><label htmlFor="notes">Notes:</label></p>
                        <textarea className='symptoms' id="notes" name="notes"/>
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
