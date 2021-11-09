import './App.css';
import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Intro from './components/Intro';
import Name from './components/Name';
import Feeling from './components/Feeling';
import Experience from './components/Experience';
import Guidance from './components/Guidance';
import Breathing from './components/Breathing';
import Grounding from './components/Grounding';
import Help from './components/Help';
import Entries from './components/Entries';
import {SymptomsContext, FeelingContext} from "./components/ContextComponent";


function App() {

    const [checkboxes, setCheckboxes] = useState('');
    const [feel, setFeel] = useState('');

    return (
        <div className="App">
            <Router>
                <Link to="/"><input className="submit" type="submit" id="Intro"
                                            name="Intro"
                                            value="Intro"/></Link>

                <Link to="/Name"><input className="submit" type="submit" id="Name"
                                            name="Name"
                                            value="Name"/></Link>

                <Link to="/Feeling"><input className="submit" type="submit" id="Feeling"
                                            name="Feeling"
                                            value="Feeling"/></Link>

                <Link to="/Experience"><input className="submit" type="submit" id="Experience"
                                            name="Experience"
                                            value="Experience"/></Link>

                <Link to="/Guidance"><input className="submit" type="submit" id="Guidance"
                                            name="Guidance"
                                            value="Guidance"/></Link>

                <Link to="/Breathing"><input className="submit" type="submit" id="Breathing"
                                            name="Breathing"
                                            value="Breathing"/></Link>

                <Link to="/Grounding"><input className="submit" type="submit" id="Grounding"
                                            name="Grounding"
                                            value="Grounding"/></Link>

                <Link to="/Help"><input className="submit" type="submit" id="Help"
                                            name="Help"
                                            value="Help"/></Link>

                <Link to="/Entries"><input className="submit" type="submit" id="Entries"
                                            name="Entries"
                                            value="Entries"/></Link>
                <Switch>
                    <Route path="/" exact component={Intro}/>
                    <Route path="/Name" component={Name}/>
                    <FeelingContext.Provider value={{feel, setFeel}}>
                        <Route path="/Feeling" component={Feeling}/>
                        <SymptomsContext.Provider value={{checkboxes, setCheckboxes}}>
                            <Route path="/Experience" component={Experience}/>
                            <Route path="/Guidance" exact component={Guidance}/>
                            <Route path="/Breathing" component={Breathing}/>
                            <Route path="/Grounding" component={Grounding}/>
                            <Route path="/Help" component={Help}/>
                            <Route path="/Entries" component={Entries}/>
                        </SymptomsContext.Provider>
                    </FeelingContext.Provider>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
