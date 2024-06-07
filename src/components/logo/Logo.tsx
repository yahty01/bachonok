import React from 'react';
import styled from "styled-components";
import Icon from "../icon/Icon";
import {theme} from "../../styles/theme";

export const Logo = () => {
    return (
        <StyledLogo>
            <StyledIcon href="">
                <Icon iconId={`Logo-white`} width='32' height='32' viewBox='0 0 32 32'/>
            </StyledIcon>
            <NameText>Egor Savelev</NameText>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
  display: flex;
`

const StyledIcon = styled.a``

const NameText = styled.span`
  color: ${theme.colors.text};
  
`

