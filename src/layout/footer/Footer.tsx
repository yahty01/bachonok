import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import Icon from "../../components/icon/Icon";

export const Footer = () => {
	return (
		<StyledFooter>
			<FlexWrapper maxWidth="346px" flexWrap={'wrap'}>
				<Logo/>
				<span>elias@elias-dev.ml</span>
				<h4>Web designer and front-end developer</h4>
			</FlexWrapper>
			<FlexWrapper flexDirection={'column'} alignItems={'center'}>
				<h4>Media</h4>
				<SocialList>
					<SocialItem>
						<Icon iconId={'Github'} height={'20px'} width={'20px'} viewBox={'0 0 20 20'}/>
					</SocialItem>
					<SocialItem>
						<Icon iconId={'Figma'} height={'20px'} width={'20px'} viewBox={'0 0 20 20'}/>
					</SocialItem>
					<SocialItem>
						<Icon iconId={'Discord'} height={'20px'} width={'20px'} viewBox={'0 0 20 20'} />
					</SocialItem>
				</SocialList>
			</FlexWrapper>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	display: flex;
	justify-content: space-between;
  min-height: 15vh;
`

const SocialList = styled.ul`
	display: flex;
	gap: 10px;
`

const SocialItem = styled.li`

`
