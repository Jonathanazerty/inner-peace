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
    const [emoji, setEmoji] = useState(SentimentNeutralIcon)

    const valuetextAndChangeEmoji = (value) => {
        if (value <= 20) {
            setEmoji(SentimentVeryDissatisfiedIcon)
            console.log('worst')
        }
        if (value <= 40 && value > 20) {
            setEmoji(SentimentDissatisfiedIcon)
            console.log('bad')
        }
        if (value <= 60 && value > 40) {
            setEmoji(SentimentNeutralIcon)
            console.log('medium')
        }
        if (value <= 80 && value > 60) {
            setEmoji(SentimentSatisfiedIcon)
            console.log('ok')
        }
        if (value <= 100 && value > 80) {
            setEmoji(SentimentSatisfiedAltIcon)
            console.log('good')
        }
    }



    return (
        <div className='feelingWrapper'>
            <div className='feelingEmojiWrapper'>
                <img src={emoji} alt='emoji'/>
            </div>


            <Stack sx={{height: 300}} spacing={1} direction="row">
                <Slider
                    aria-label="Temperature"
                    orientation="vertical"
                    getAriaValueText={valuetextAndChangeEmoji}
                    defaultValue={30}
                />
            </Stack>

            <div>
                <a href='Experience' className='feelingSubmit'> Submit </a>
            </div>
        </div>
    )
}

export default Feeling;
