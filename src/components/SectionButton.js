import React from "react";
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

// Theme
import theme from "../theme";
import './SectionButton.css';



const Button = styled('div')({
    padding: '7px 10px',
    marginRight: '1rem',
    marginBottom: '1rem',
    justifyContent: 'center',
    borderRadius: '8px',
    fontWeight: 600,
    backgroundColor: '#DDFFED89', /*241818*/
    "&:hover": {
        cursor: 'pointer',
      },
});


function SectionButton({ title, activeSection, sections, changeSection }) {

    return (
        <Button onClick={() => {changeSection(title)}} className={`button transition-all ${activeSection === title ? 'on' : 'off' }`} >
            <Typography className="button" variant="timeline" color="#FFFFFF" fontSize='14px' textAlign="center" fontWeight="600">
                {title}
            </Typography>
        </Button>
    );
}

export default SectionButton;
