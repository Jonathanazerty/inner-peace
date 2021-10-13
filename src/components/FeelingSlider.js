import React from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}`;
}

export default function VerticalSlider() {
    return (
        <Stack sx={{height: 300}} spacing={1} direction="row">
            <Slider
                aria-label="Temperature"
                orientation="vertical"
                getAriaValueText={valuetext}
                defaultValue={30}
            />
        </Stack>
    );
}