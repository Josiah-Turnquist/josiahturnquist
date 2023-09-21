import React from "react";
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

// Theme
import theme from "../theme";
import './Project.css';



const ProjectBox = styled('div')({
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3rem',
    padding: '1rem',
    paddingBottom: '1.5rem',
    margin: 0,
    borderRadius: '8px',
    backgroundColor: '#00000000', /*241818*/
    "&:hover": {
        backgroundColor: theme.palette.experience.box,
      },
      [theme.breakpoints.down('tablet')]: { // smaller than a desktop
        paddingLeft: '1.5rem',
        marginLeft: '-1rem',
    },
});

const Timeline = styled('div')({
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
});

const ContentWrapper = styled('div')({
    height: '100%',
    width: '100%',
    marginLeft: '20px',
});


function Project({ index, focusedBox, changeBoxFocus, image, title, company, url, description, tags, sections}) {
    const data = {
        image,
        title,
        company,
        url,
        description,
        tags,
        sections,
    }

    return (
        <a href={data.url}>
            <ProjectBox className={`transition-all ${focusedBox === index ? 'highlight' : focusedBox !== 0 ? 'dimmed' : '' }`} onMouseEnter={() => changeBoxFocus(index)} onMouseLeave={() => changeBoxFocus(0)}>
                <Timeline>
                    <img src={image} key={data.description} style={{ maxWidth: '110px' }} alt={data.title} className="image-shadow"/>
                </Timeline>

                <ContentWrapper>
                    <Typography className="subtitle" variant="subtitle1" color={theme.palette.primary.main} textAlign="left" marginBottom="0.75rem" fontWeight="600">
                        {data.title}
                    </Typography>
                    <Typography variant="subtitle2" color={theme.palette.secondary.main} textAlign="left">
                        {data.description}
                    </Typography>

                    {/* {sections.map((item, index) => (
                        <div 
                            key={`${item.description}, ${item}`} 
                            className="transition-all section-tags"> 
                            {item}
                            </div>
                        ))} */}
                </ContentWrapper>
            </ProjectBox>
        </a>
    );
}

export default Project;
