import React from 'react';
import styled from "styled-components";
import Icon from "../icon/Icon";
import {theme} from "../../styles/theme";

export const Logo = () => {
    return (
        <StyledLogo>
            <StyledIcon href="">
                <Icon iconId={`Logo-white`} width='16' height='16' viewBox='0 0 16 16'/>
            </StyledIcon>
            <NameText>Egor Savelev</NameText>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
  display: flex;
  gap: 8px;
`

const StyledIcon = styled.a`
`

const NameText = styled.span`
  color: ${theme.colors.text};
  font-size: 16px;
  line-height: 21px;
  font-weight: 600;
`

