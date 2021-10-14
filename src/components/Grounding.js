import React, {useState} from "react";
import './Grounding.css';

const Grounding = () => {

    const [showStartButton, setShowStartButton] = useState(true);
    const [showFive, setShowFive] = useState(false);
    const [showFour, setShowFour] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showOne, setShowOne] = useState(false);


    const StartButton = () => <button className='groundingButton' onClick={startGrounding}> I'm ready to start</button>
    const Five = () => <p> 5 things you hear </p>
    const Four = () => <p> 4 things you see </p>
    const Three = () => <p> 3 things you can touch from where you're sitting </p>
    const Two = () => <p> 2 things you can smell </p>
    const One = () => <p> 1 thing you can taste</p>


    function startGrounding() {
        setShowStartButton(false)
        setShowFive(true)
        setShowFour(true)
        setShowThree(true)
        setShowTwo(true)
        setShowOne(true)
    }

    return (
        <body className="groundingBody">
        <h2 className='groundingTitle'> Ground yourself </h2>
        <h4> The 5-4-3-2-1 method </h4>

        <p> Make an effort to notice the little things you might not always pay attention to,
            such as the color of the flecks in the carpet or the hum of your computer.
        </p>
        {showStartButton ? <StartButton/> : null}
        {showFive ? <Five/> : null}
        {showFour ? <Four/> : null}
        {showThree ? <Three/> : null}
        {showTwo ? <Two/> : null}
        {showOne ? <One/> : null}
        </body>
    )
}

export default Grounding;