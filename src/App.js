import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';

// Components
import Experience from "./components/Experience";
import Project from "./components/Project";
import SectionButton from "./components/SectionButton";

// Data
import { experienceList, projectList, sections } from './data';

// Icons
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Mountains from "./mountains.svg";


// Theme
import theme from "./theme";

import { useLocation } from 'react-router-dom'
import { PropaneSharp } from '@mui/icons-material';

const MainDiv = styled('div')({
  height: '100%',
  width: '100%',
  maxWidth: '100vw',
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
  margin: 0,
  // overflowX: 'clip',
  [theme.breakpoints.down('desktop')]: { // smaller than a laptop/desktop
    flexDirection: 'column',
    justifyContent: 'left',
  },

  // backgroundColor: theme.palette.background, /*241818*/
});

const GradientOverlay = styled('div')(({ props }) => ({
  height: '100%',
  width: '100%',
  padding: 0,
  margin: 0,
  position: 'fixed',
  background: `radial-gradient(circle at ${props.mouseX}px ${props.mouseY}px, #203E2580, #0E1B10 60%)`
}));


const LeftSide = styled('div')({
  position: 'relative',
  top: '6rem',
  width: '40vw',
  minWidth: '420px',
  maxWidth: '528px',
  margin: 0,
  marginLeft: '6rem',
  marginTop: '6rem',
  [theme.breakpoints.up('desktop')]: { // smaller than a desktop
    position: 'sticky',
    height: '80vh',
  },
  [theme.breakpoints.down('desktop')]: { // smaller than a desktop
    textWrap: 'wrap',
    margin: 0,
    marginLeft: '3rem',
    marginTop: '0rem',  
    maxWidth: '100vw',
    minWidth: '85vw',
  },
  [theme.breakpoints.down('tablet')]: { // phone changes
    marginLeft: '2rem',
    marginTop: '0rem',
    paddingTop: '0rem',
  },

  // backgroundColor: theme.palette.background, /*241818*/
});

const RightSide = styled('div')({
  padding: 0,
  paddingRight: '6rem',
  paddingTop: '6rem',
  minWidth: '420px',
  maxWidth: '528px',
  width: 'calc(60vw - 84px)',
  position: 'relative',
  [theme.breakpoints.down('desktop')]: {
    padding: '3rem',
    alignSelf: 'left',
    width: 'auto',
    marginTop: '6rem',
    minWidth: '70vw',
    maxWidth: '100vw',

  },
  [theme.breakpoints.down('tablet')]: {
    padding: '3rem',
    alignSelf: 'left',
    width: 'auto',
    maxWidth: '80vw',
    marginTop: '5vh',
  },
  [theme.breakpoints.down('tablet')]: { // phone changes
    paddingLeft: '2rem',
    maxWidth: '100vw',
  },
  // backgroundColor: theme.palette.background, /*241818*/
});

const hoverSX = {
  fontSize: 32,
  marginRight: '20px',
  marginTop: '1rem',
  color: theme.palette.secondary.main,
  "&:hover": {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
};

function App({ theme }) {
  const [hover, setHover] = useState(0); // 0 = none
  // const location = useLocation();
  const [hash, setHash] = useState('about'); 
  const [section, setSection] = useState('Tech'); 
  const [focusedExperience, setFocusedExperience] = useState(0);
  const [mouseX, setMouseX] = useState(100); // 0 = none
  const [mouseY, setMouseY] = useState(0); // 0 = none


  // Device Type
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const changeBoxFocus = (newFocus) => {
    // console.log(focusedExperience, newFocus);
    setFocusedExperience(newFocus);
  }

  const changeSection = (s) => {
    console.log(section, s);
    setSection(s);
  }

  // Background Effect
  const glowingRef = React.useRef(null)
    
  // add a useEffect to check that our glowingRef has a value
  function mouseMoveEvent(e) {
    const { x, y } = glowingRef.current.getBoundingClientRect();
    glowingRef.current.style.setProperty('--x', e.clientX - x);
    glowingRef.current.style.setProperty('--y', e.clientY - y);
    
    setMouseX((e.clientX));
    setMouseY((e.clientY));
  }

  React.useEffect(() => {
    if (glowingRef) {
      glowingRef.current.addEventListener('mousemove', mouseMoveEvent)
    }
    // don't forget to *remove* the eventListener
    // when your component unmounts!
    return () => glowingRef.current.removeEventListener('mousemove', mouseMoveEvent)
  }, [glowingRef])
  
  return (
    <MainDiv ref={glowingRef} className="App" >
      <GradientOverlay props={{ mouseX, mouseY }} />
      <img src={Mountains} key="mountains" alt="mountain background" style={{
        position: 'fixed',
        top: '56%',
        left: '0',
        maxWidth: '90vw',
      }}/>


      <LeftSide className="transition-all">
          <Typography className="transition-all" variant="h3" color={theme.palette.primary.main} textAlign="left" component="h2" position='inherit' fontWeight={600}>
            Josiah Turnquist
          </Typography>
          <Typography className="transition-all" variant="h6" color={theme.palette.primary.main} textAlign="left" marginTop="10px" component="h2">
            Technical Project Manager
          </Typography>
          <Typography className="transition-all" variant="subtitle1" color={theme.palette.secondary.main} textAlign="left" width="340px" marginTop="10px" component="h2">
            I'm a communicator and teamplayer with 
            a diverse background in technical 
            and creative fields.
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 'calc(100% - 12rem)'}}>
            <ul className='nav-wrapper transition-all' onMouseLeave={() => setHover(0)} style={{ display: (width > theme.breakpoints.values.tablet ? 'block' : 'none') }}>
              <li>
                <a className={`nav-item-wrapper ${hover === 1 || hash === 'about' ? 'active' : ''}`} href="#about" onMouseEnter={() => setHover(1)} onMouseDown={() => setHash("about")}>
                  <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                </a>
              </li>
              <li>
                <a className={`nav-item-wrapper ${hover === 2 || hash === 'experience'  ? 'active' : ''}`} href="#experience" onMouseEnter={() => setHover(2)} onMouseDown={() => setHash("experience")} >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                </a>
              </li>
              <li>
                <a className={`nav-item-wrapper ${hover === 3 || hash === 'projects'  ? 'active' : ''}`} href="#projects" onMouseEnter={() => setHover(3)} onMouseDown={() => setHash("projects")} >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                </a>
              </li>
              <li>
                <a className={`nav-item-wrapper ${hover === 4 || hash === 'other'  ? 'active' : ''}`} href="#other" onMouseEnter={() => setHover(4)} onMouseDown={() => setHash("other")} >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Other</span>
                </a>
              </li>
            </ul>

            <div className='icons-link-wrapper'>
              <a href="https://github.com/Josiah-turnquist"><GitHubIcon sx={hoverSX}/></a>
              <a href="https://www.instagram.com/josiah_obadiah"><InstagramIcon sx={hoverSX} /></a>
              <a href="https://www.linkedin.com/in/jturnq/"><LinkedInIcon sx={hoverSX} /></a>
            </div>
          </div>
      </LeftSide>
      <RightSide >
        
        <div style={{ display: (width > theme.breakpoints.values.desktop ? 'none' : 'block') }} className='fix-scroll'>
          <Typography variant="body1" color={theme.palette.secondary.main} textAlign="left" paddingY="1rem" component="h2" fontWeight="600">
            ABOUT ME
          </Typography>
        </div>

        <Typography id="about" variant="body1" className="fix-scroll" color={theme.palette.secondary.main} textAlign="left" marginTop="10px">
        Inspired by my oldest brother, I discovered the art of video game development when I was only 12 years old. From then on I spent hundreds - or thousands - of hours rebuilding old classics like Pac-Man and Pong before moving on to bigger RPG games like Runescape lookalikes.
        <br /><br />
        I finally aged out of developing video games when I took my first real computer science course at <a className="text-link transition-all" href="wasd">Diablo Valley College</a> - where I quickly impressed the faculty and started a <a className="text-link transition-all" href="https://www.dvc.edu/tutoring">school-funded COMSC tutoring department</a>. The new department was so successful that I ended up teaching high school COMSC classes for underprivileged first-generation college students for <a className="text-link transition-all" href="wasd">Upward Bound</a> and <a className="text-link transition-all" href="wasd">Educational Talent Search</a>.
        <br /><br />
        Years later I’ve acquired a vast breadth of experience across countless fields. I’ve built proprietary software for fire departments, COVID virtual streaming software, and even some biomedical tracking plugins for an <a className="text-link transition-all" href="https://www.togetherai.com/">AI company in Australia</a>. Scroll down to check out my fuller experience! It may not be quite what you expect...
        </Typography>

        <div id="experience" className='fix-scroll transition-all'>
          <Typography variant="body1" color={theme.palette.secondary.main} textAlign="left"  paddingBottom="2rem" paddingTop="15vmin" component="h2" fontWeight="600">
            EXPERIENCE
          </Typography>

          <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {sections.map((item, index) => (
              <SectionButton 
                key={`${item} button`} 
                index={index} 
                title={item}
                activeSection={section}
                sections={sections}
                changeSection={changeSection} />
            ))}
          </div>

            {experienceList.map((item, index) => (
              <Experience 
                key={`${item.position}, ${item.company}`} 
                index={index + 1} 
                focusedBox={focusedExperience} 
                changeBoxFocus={changeBoxFocus}
                beginDate={item.beginDate} 
                endDate={item.endDate} 
                position={item.position} 
                company={item.company} 
                url={item.url} 
                description={item.description} 
                tags={item.tags} 
                sections={item.sections} 
                allSections={sections}
                activeSection={section} // Currently selected section - component will filter itself
                className="transition-all" />
            ))}
        </div>

        <div id="projects" className='fix-scroll transition-all'>
          <Typography variant="body1" color={theme.palette.secondary.main} textAlign="left" paddingTop="15vmin" paddingBottom="2rem" component="h2" fontWeight="600">
            PROJECTS
          </Typography>

          {projectList.map((item, index) => (
              <Project 
                image={item.img}
                key={`${item.description}`} 
                index={index + 1 + experienceList.length} 
                focusedBox={focusedExperience} 
                changeBoxFocus={changeBoxFocus}
                title={item.title} 
                company={item.company} 
                url={item.url} 
                description={item.description} 
                tags={item.tags} 
                sections={item.sections} 
                className="transition-all" />
            ))}
        </div>

        {/* <div id="other" className='fix-scroll'>
          <Typography variant="body1" color={theme.palette.secondary.main} textAlign="left" paddingY="10rem" component="h2" fontWeight="600">
            OTHER
          </Typography>
        </div> */}
      </RightSide>
    </MainDiv>
  );
}

export default App;
