import React, {useState, useEffect} from 'react';
import './Intro.css';

const Intro = ({ text }) => {

  const [fadeProp, setFadeProp] = useState ({
        fade: 'fade-in',
  });

  useEffect (() => {
      const timeout = setInterval(() => {
          if(fadeProp.fade === 'fade-in'){
            setFadeProp({
              fade: 'fade-out'
            })
          } else {
              window.location="/Name";
          }
      }, 2000);

      return () => clearInterval(timeout)
    }, [fadeProp])


  return (

      <div className={fadeProp.fade}  style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        flexFlow: "column",
        minHeight: "80vh"
        
      }}>{text}
        <div className="step" style={{
            fontSize: "50px"
      }}>
          “ You’ve already taken the most important step,<br></br>
          coming here “
        </div><br></br>
        <div className="name" style={{
            fontSize: "20px"
      }}>
          - Inner Peace -
        </div>
      </div>
  )
}


export default Intro;