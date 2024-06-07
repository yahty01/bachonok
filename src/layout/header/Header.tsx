import React from 'react';
import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {Button} from "../../components/Button";

const headerItems = ['home', 'works', 'about-me', 'contacts']

export const Header = () => {
	return (
		<StyledHeader as={'header'}>
			<Logo/>
			<Menu menuItems={headerItems}/>
			<SelectLanguage>
				EN
				<Button>
					<Icon iconId={`Selector-not-open`} width='10' height='7' viewBox='0 0 10 7'/>
				</Button>
			</SelectLanguage>
		</StyledHeader>
	);
};

const StyledHeader = styled(Container)`
  display: flex;
  justify-content: space-between;
`

const SelectLanguage = styled.div`

`


