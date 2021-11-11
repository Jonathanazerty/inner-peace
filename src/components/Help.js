import React from "react";
import './Help.css';
import speak from '../images/conversation.png';
import heart from '../images/heart.png';
import help from '../images/help.png';
import find from '../images/find.png';


const Help = (props) => {
    
    return (
          <div className="helps">
              <div className="near">
                <h2> Help near you</h2>
                    <div className="speak">
                        <p className="text">Dear friends,</p>
                        <img className="icon-help" src={speak} alt="read"/>
                        <p className="text">On the map you can find psychologists in Flanders.</p>
                        <p className="text">Don't hesitate to ask for help !</p>
                    </div>
                    <div className="help">
                        <img className="icon-help" src={help} alt="read"/>
                        <p className="text">The biggest step is being aware of it and the next step is the most courageous one,</p>
                        <p className="text"><b>asking for help !</b></p>
                    </div>
                    <div className="heart">
                        <p className="text">When we are physically hurt, we go to the doctor so</p>
                        <p className="text">when we are mentally hurt, we go to the psychologist.</p>
                        <img className="icon-help" src={heart} alt="read"/>
                        <p className="text">Fight the taboo and fight for yourself !</p>
                    </div>
              </div>
              <div className="asking">
                <img className="icon-find" src={find} alt="read"/>
                <h2 className="ask"> Asking for help is brave !</h2>
                <div className="map-psychologists">
                  <iframe title="Psychologists Map of Flanders in Belgium" src="https://www.google.com/maps/d/embed?mid=1_NIgJ2l5J8IzI7hfAP6ESRYHeX8"/>
                </div>
              </div>
        </div>
  )
  }

export default Help;