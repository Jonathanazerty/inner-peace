import React, {useState} from "react";
import './Feeling.css';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

const Feeling = () => {
    const [emoji, setEmoji] = useState(<SentimentNeutralIcon/>)

    const valuetext = (value) => {
        return value
    }
    const changeEmoji = (event, value) => {
        if (value <= 20) {
            setEmoji(<SentimentVeryDissatisfiedIcon/>)
            console.log('worst')
        }
        else if (value <= 40 && value > 20) {
            setEmoji(<SentimentDissatisfiedIcon/>)
            console.log('bad')
        }
        else if (value <= 60 && value > 40) {
            setEmoji(<SentimentNeutralIcon/>)
            console.log('medium')
        }
        else if (value <= 80 && value > 60) {
            setEmoji(<SentimentSatisfiedIcon/>)
            console.log('ok')
        }
        else if (value <= 100 && value > 80) {
            setEmoji(<SentimentSatisfiedAltIcon/>)
            console.log('good')
        }
    }


    return (
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

            <div>
                <a href='Experience' className='feelingSubmit'> Submit </a>
            </div>
        </div>

    )
}

export default Feeling;
