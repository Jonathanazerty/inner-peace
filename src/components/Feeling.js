import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import './Feeling.css';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';


const Feeling = (props) => {

    const [emoji, setEmoji] = useState(<SentimentNeutralIcon sx={{fontSize: 500}}/>)

    const [feeling, setFeeling] = useState('');

    let history = useHistory();

    const submit = () => {
        history.push('/Experience', [feeling])
    }

    const handleFeeling = (event) => {
        event.preventDefault();
        console.log({feeling});
        submit();
    }

    const valuetext = (value) => {
        return value
    }
    const changeEmoji = (event, value) => {
        if (value <= 20) {
            setEmoji(<SentimentVeryDissatisfiedIcon sx={{fontSize: 500}}/>)
            setFeeling("I really feel bad")
        } else if (value <= 40 && value > 20) {
            setEmoji(<SentimentDissatisfiedIcon sx={{fontSize: 500}}/>)
            setFeeling("I'm not that great")
        } else if (value <= 60 && value > 40) {
            setEmoji(<SentimentNeutralIcon sx={{fontSize: 500}}/>)
            setFeeling("I'm feeling ok")
        } else if (value <= 80 && value > 60) {
            setEmoji(<SentimentSatisfiedIcon sx={{fontSize: 500}}/>)
            setFeeling("I'm feeling good")
        } else if (value <= 100 && value > 80) {
            setEmoji(<SentimentSatisfiedAltIcon sx={{fontSize: 500}}/>)
            setFeeling("I'm feeling amazing!")
        }
    }

    return (
        <>
            <h2 className='feelingTitle'> How are you feeling today {props.location.state}? </h2>
            <div className='feelingWrapper'>
                <div className='feelingEmojiWrapper'>
                    {emoji}
                </div>

                <Stack sx={{height: 300}} spacing={1} direction="row">
                    <Slider
                        aria-label="Temperature"
                        orientation="vertical"
                        getAriaValueText={valuetext}
                        defaultValue={30}
                        onChange={changeEmoji}
                    />
                </Stack>
            </div>
            <div className='feelingSubmitWrapper'>
                <input type="submit" className='feelingSubmit'  required value={feeling}  onClick={(event) => handleFeeling(event)} />
            </div>
        </>
    )
}

export default Feeling;
