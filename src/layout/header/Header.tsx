import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {HeaderMenu} from "./header-menu/HeaderMenu";

const headerItems = ['home', 'works', 'about-me', 'contacts']

export const Header = () => {
	return (
		<StyledHeader as={'header'}>
			<Logo/>
			<HeaderMenu menuItems={headerItems}/>
		</StyledHeader>
	);
};

const StyledHeader = styled(Container)`
	background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  //position: fixed;
  //top: 0;
  //left: 0;
  //right: 0;
	//z-index: 666;
	height: 61px;
`


