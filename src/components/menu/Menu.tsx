import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">home</a></li>
                <li><a href="">works</a></li>
                <li><a href="">about-me</a></li>
                <li><a href="">contacts</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px
    }
`