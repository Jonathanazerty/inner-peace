import React from "react";
import './Breathing.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';


const Breathing = () => {
    
    return (
      <div className="breathing">
        <div className="in">    
          <CountdownCircleTimer
            isPlaying
            duration={4}
            colors={[
              ['#004777', 0.33],
              ['#57bbff', 0.33],
              ['#ff0000', 0.33],
            ]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
        <div className="hold">   
          <CountdownCircleTimer
            isPlaying
            duration={8}
            colors={[
              ['#004777', 0.33],
              ['#57bbff', 0.33],
              ['#ff0000', 0.33],
            ]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
        <div className="out">   
          <CountdownCircleTimer
            isPlaying
            duration={7}
            colors={[
              ['#004777', 0.33],
              ['#57bbff', 0.33],
              ['#ff0000', 0.33],
            ]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
      </div>
    )
}

export default Breathing;