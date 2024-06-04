import React from 'react';
import styled from "styled-components";
import Icon from "../icon/Icon";

export const Logo = () => {
    return (
        <StyledLogo>
            <StyledIcon href="">
                <Icon iconId={`Logo-white`} width='52' height='52' viewBox='0 0 52 52'/>
            </StyledIcon>
            <span>Elias</span>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`

`

const StyledIcon = styled.a`
    margin: 10px;
`


