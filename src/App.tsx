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
        <Content>
          In 2019, I graduated from Rensselaer Polytechnic Institute with a Bachelors in Computer Science.
        </Content>
        <Content>
          While there, I was a crew chief and chair for UPAC Sound, a board member for the Events Programming Team, and messed around on the soccer pitch during intramurals.
        </Content>
        <Content>
          Since 2019, I have worked as a full-stack web developer for Travelers Insurance.

          I mainly work in a React/TS stack with AWS hosted applications (both public and internal).
          Because of this, I'm often working with Terraform OSS to configure and deploy our applications.
          I also regularly develop for existing applications in .NET.
        </Content>
        <Content>
          Before this role, I also worked on the Travelers Application Security Team.

          Here, I used OWASP Zap and AppScan to identify security vulnerabilities within Travelers web applications.
        </Content>
        <Content>
          In my free time, I strive to travel. When that's not possible, I can be found cooking, visiting breweries, playing some game off Steam, or shaving strokes off my golf game.
        </Content>
        <EndIconContainer>
          <img src={endIcon} alt='end of content' />
        </EndIconContainer>
      </ContentContainer>
    </AppContainer>
  )
}

export default App;
