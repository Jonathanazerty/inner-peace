import React, {useState} from 'react';
import './Experience.css';
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";

function Experience() {

    const options = {weekday: 'long'}
    const date = new Date();
    let today = date.toLocaleDateString(undefined, options) + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

    // const allChecked = [];
    //
    // const [feeling, setFeeling] = useState('')
    // const [experiencing, setExperiencing] = useState('')
    // const [notes, setNotes] = useState('')
    //
    //
    // let newEntry = {
    //     'Date' : today,
    //     'Feeling' : '',
    //     'Experiencing' : '',
    //     'Notes' : ''
    // }
    //
    // const makeChecked = () => {
    //         allChecked.push()
    // }
    // const handleClick = () => {
    //     setFeeling()
    //     setExperiencing()
    //     setNotes()
    // }

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
                                <> </>
                                <label htmlFor="symptom1">Shortness of breath </label>
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
                                <input type="checkbox" id="symptom5" name="symptom5" value="giproblems"/>
                                <> </>
                                <label htmlFor="symptom5">Gastrointestinal problems</label>
                            </div>
                            <div>
                                <input type="checkbox" id="symptom6" name="symptom6" value="restlessness"/>
                                <> </>
                                <label htmlFor="restlessness">Restlessness</label>
                            </div>
                            <div>
                                <input type="checkbox" id="symptom7" name="symptom7" value="worry"/>
                                <> </>
                                <label htmlFor="worry">Worry and apprehension</label>
                            </div>
                            <div>
                                <input type="checkbox" id="symptom8" name="symptom8" value="tightness"/>
                                <> </>
                                <label htmlFor="tightness">Tightness in the throat and difficulty breathing</label>
                            </div>
                            <div>
                                <input type="checkbox" id="symptom9" name="symptom9" value="faint"/>
                                <> </>
                                <label htmlFor="faint">Feeling faint</label>
                            </div>
                            <div>
                                <input type="checkbox" id="symptom10" name="symptom10" value="headache"/>
                                <> </>
                                <label htmlFor="headache">Headache</label>
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