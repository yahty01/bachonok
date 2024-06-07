import React from 'react';
import photo from '../../../assets/img/men-one.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper alignItems={'center'} justifyContent={'space-between'}>
                <div>
                    <h1>Elias is a web designer and front-end developer</h1>
                    <h2>He crafts responsive websites where technologies meet creativity</h2>
                    <Button>Contact me!!</Button>
                </div>
                <FlexWrapper justifyContent={'space-between'} flexDirection={'column'} alignItems={'center'}>
                    <Photo src={photo} alt=''/>
                    <span>Currently working on Portfolio</span>
                </FlexWrapper>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
`

const Photo = styled.img`
    width: 35vh;
    height: 100%;
    object-fit: cover;
`

