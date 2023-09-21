import React from "react";
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

// Theme
import theme from "../theme";
import './Experience.css';



const ExperienceBox = styled('div')({
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3rem',
    padding: '1rem',
    margin: 0,
    borderRadius: '8px',
    backgroundColor: '#00000000', /*241818*/
    "&:hover": {
        backgroundColor: theme.palette.experience.box,
    },
    [theme.breakpoints.down('tablet')]: { // smaller than a desktop
        flexWrap: 'wrap',
        margin: '-1rem',
        paddingBottom: '1rem',
        marginBottom: '2rem',
    },
});

const Timeline = styled('div')({
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    [theme.breakpoints.down('tablet')]: { // smaller than a desktop
        textAlign: 'left',
        marginBottom: '20px',
        marginRight: 'auto',
    },
});

const ContentWrapper = styled('div')({
    height: '100%',
    width: '100%',
    marginLeft: '20px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    [theme.breakpoints.down('tablet')]: { // smaller than a desktop
        marginLeft: 0
    },
});


function Experience({ index, focusedBox, changeBoxFocus, beginDate, endDate, position, company, url, description, tags, sections, allSections, activeSection}) {
    const data = {
        beginDate,
        endDate,
        position,
        company,
        url,
        description,
        tags,
        sections,
        activeSection
    }

    return ( //style={{ display: (sections.includes(activeSection) ? 'flex' : 'none') }}
        <a href={data.url} style={{ display: (sections.includes(activeSection) ||  activeSection === allSections[0] ? 'flex' : 'none') }} className="transition-all">
            <ExperienceBox className={`transition-all ${focusedBox === index ? 'highlight' : focusedBox !== 0 ? 'dimmed' : '' }`} onMouseEnter={() => changeBoxFocus(index)} onMouseLeave={() => changeBoxFocus(0)}>
                <Timeline  className="transition-all">
                    <Typography variant="timeline" color={theme.palette.secondary.main} textAlign="left" marginTop="8px" fontWeight="600">
                        {data.beginDate} - {data.endDate}
                    </Typography>
                </Timeline>

                <ContentWrapper className="transition-all">
                    <Typography className="subtitle" variant="subtitle1" color={theme.palette.primary.main} textAlign="left" marginBottom="0.75rem" fontWeight="600">
                        {data.position} - {data.company}
                    </Typography>
                    <Typography variant="subtitle2" color={theme.palette.secondary.main} textAlign="left">
                        {data.description}
                    </Typography>

                    {/* {sections.map((item, index) => (
                        <div 
                            key={`${item.description}, ${item}`} 
                            className="transition-all activeSection-tags"> 
                            {item}
                        </div>
                    ))} */}
                </ContentWrapper>
            </ExperienceBox>
        </a>
    );
}

export default Experience;
