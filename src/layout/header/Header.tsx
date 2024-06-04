import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const headerItems = ['home', 'works', 'about-me', 'contacts' ]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={headerItems}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(9, 145, 38, 0.45);
    display: flex;
    justify-content: space-between;
`



