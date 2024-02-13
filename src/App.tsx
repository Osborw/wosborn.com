import React from 'react';
import mapPinIcon from './assets/map-pin.svg';
import githubIcon from './assets/github.svg';
import mailIcon from './assets/mail.svg';
import linkedInIcon from './assets/linkedin.svg';
import endIcon from './assets/more-horizontal.svg';
import profPic from './assets/prof-pic.webp'
import styled from 'styled-components'

const MapPinImg = styled.img`
  margin-right: .2em;
`

const MediaLinkImg = styled.img`
  margin-right: .4em;
`

const AppContainer = styled.div`
  font-family: Ubuntu;
  background-color: #1c1f20;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`

const ContentContainer = styled.div`
  margin: 5vmin;
  max-width: 700px;
`

const TopItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ProfPicContainer = styled.div`
  margin-right: 1em;
`

const ContactHeaders = styled.h3`
  margin-block-start: .2rem;
  margin-block-end: .2rem;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
`

const Location = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: .5em;
`

const OnlineLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: .5em;
`

const Content = styled.p`
  color: #919191;
  line-height: 1.6;
  margin-block-start: 2em;
  margin-block-end: 2em;
`

const EndIconContainer = styled.div`
  display: flex;
  justify-content:center;
`

const App = () => {
  return (
    <AppContainer>
      <ContentContainer>
        <TopItemsContainer>
          <ProfPicContainer>
            <img src={profPic} alt='profile' width='200px' />
          </ProfPicContainer>
          <div>
            <h1>Wayne Osborn</h1>
            <ContactInfo>
              <Location>
                <MapPinImg src={mapPinIcon} alt='map pin' />
                <ContactHeaders>Essex, CT</ContactHeaders>
              </Location>
              <ContactHeaders>Full-stack web dev at Travelers</ContactHeaders>
              <OnlineLinks>
                <a href='mailto:jacobwayne1513@gmail.com' target="_blank" rel="noopener noreferrer">
                  <MediaLinkImg src={mailIcon} alt='mail' />
                </a>
                <a href='https://www.linkedin.com/in/wayne-osborn/' target="_blank" rel="noopener noreferrer">
                  <MediaLinkImg src={linkedInIcon} alt='linkedIn' />
                </a>
                <a href='https://github.com/Osborw' target="_blank" rel="noopener noreferrer">
                  <MediaLinkImg src={githubIcon} alt='github' />
                </a>
              </OnlineLinks>
            </ContactInfo>
          </div>
        </TopItemsContainer>
      </ContentContainer>
    </AppContainer>
  )
}

export default App;
