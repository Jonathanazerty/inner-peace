import React from 'react';
import './Experience.css';
import {useHistory} from 'react-router-dom';

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

      let history = useHistory();

      const nextPage = () => {
        history.push('/Guidance')
      }

      const handleSymptoms = (event) => {
        nextPage();
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
                        <div className='symptoms'>
                            <div>
                                <input type="checkbox" id="symptom1" name="symptom1" value="shortnessOfBreath"/>
                                <> </>
                                <label htmlFor="symptom1">Shortness of breath</label>
                            </div>
                            <div>
                                <input type="checkbox" id="symptom2" name="symptom2" value="heartPalpitations"/>
                                <> </>
                                <label htmlFor="symptom2">Heart palpitations</label>
                            </div>
                            <div>
                                <input type="checkbox" id="symptom3" name="symptom3" value="nausea"/>
                                <> </>
                                <label htmlFor="symptom3">Nausea</label>
                            </div>
                            <div>
                                <input type="checkbox" id="symptom4" name="symptom4" value="trembling"/>
                                <> </>
                                <label htmlFor="symptom4">Trembling</label>
                            </div>
                            <div>
                                <input type="checkbox" id="symptom5" name="symptom6" value="restlessness"/>
                                <> </>
                                <label htmlFor="symptom5">Restlessness</label>
                            </div>
                            <div>
                                <input type="checkbox" id="symptom6" name="symptom9" value="weak"/>
                                <> </>
                                <label htmlFor="symptom6">Weak / Lightheaded</label>
                            </div>
                            <div>
                                <input type="checkbox" id="symptom7" name="symptom10" value="headache"/>
                                <> </>
                                <label htmlFor="symptom7">Headache</label>
                            </div>
                        </div>
                    </div>

                    <div className='notes'>
                        <p><label htmlFor="notes">Notes:</label></p>
                        <textarea className='symptoms' id="notes" name="notes"/>
                    </div>
                </div>
                <div className='experienceSubmitWrapper'>
                    <button className='experienceButton' id='experienceSubmit' value="Confirm" onClick={(event) => handleSymptoms(event)} > Confirm symptoms</button>
                </div>
            </div>

        </div>
    );
}

export default Experience;