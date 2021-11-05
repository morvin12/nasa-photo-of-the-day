import React from "react";
import styled from 'styled-components';

const StyledImageContainer = styled.div`
margin: 1%;
padding: 1%;
background-color: ${props => props.theme.navyblue};
color: ${props => props.theme.lightred};
`
const StyledPic = styled.img`
border-radius: 1%;
width: 100%;
`
export default function Image(props) {
    return (
        <StyledImageContainer className='photoContainer'>
            <h3>Title: {props.imageInfo.title}</h3>
            <p>{props.imageInfo.date}</p>
            <StyledPic src={props.imageInfo.url} className='picture' alt='Nasa pic of the day'/>
        { props.imageInfo.copyright ? (<p><b>Photographer:</b> {props.imageInfo.copyright}</p>) : null }
        <p><b><em>About the photo:</em></b> {props.imageInfo.explanation}</p>
        </StyledImageContainer>
    )
};