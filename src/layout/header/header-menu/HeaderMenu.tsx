import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {Button} from "../../../components/Button";
import Icon from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Link} from "../../../components/Link";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledHeaderMenu>
			<FlexWrapper gap={'32px'}>
				<ul>
					{
						props.menuItems.map((item, id) => {
							id = (Date.now() + 3 / 2)
							return (
								<ListItem key={id}>
									<HeaderLink href='https://'><ColorHash>#</ColorHash>{item}
										<Mask><span><ColorHash>#</ColorHash>{item}</span></Mask>
										<Mask><span><ColorHash>#</ColorHash>{item}</span></Mask>
									</HeaderLink>
								</ListItem>
							)
						})
					}
				</ul>
				<SelectLanguage>
					<Button>
						<ButtonText>EN</ButtonText><Icon iconId={`Selector-not-open`} width='10' height='7' viewBox='0 0 10 7'/>
					</Button>
				</SelectLanguage>
			</FlexWrapper>
		</StyledHeaderMenu>
	);
};
const ColorHash = styled.span`
  color: ${theme.colors.accent};
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
	
`

const HeaderLink = styled(Link)`
  color: transparent;

  ${ColorHash} {color: transparent}
`
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
	color: ${theme.colors.stroke};
	
	& + & {
		top: 50%;
		
		span {
			display: inline-block;
			transform: translateY(-50%);
		}
    
		span > ${ColorHash} {
			display: inline-block;
      transform: translateY(0%);
      color: ${theme.colors.accent};
		}
	}
	
	${ColorHash} {
    color: ${theme.colors.accent};
	}
`

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    color: ${theme.colors.text};
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
  }
`
const SelectLanguage = styled.div`
  display: flex;
  row-gap: 9px;
`

const ListItem = styled.li`
  position: relative;
	&::before {
		content: '';
		display: inline-block;
		height: 1px;
		background-color: ${theme.colors.accent};
		position: absolute;
		top: 50%;
		left: -5px;
		right: -5px;
		z-index: 1;
		transform: scale(0);
	}
	
	&:hover{
		&::before{
			transform: scale(1);
		}
		
		${Mask} {
			transform: skewX(10deg) translateX(3px);
			color: ${theme.colors.text};
			& + ${Mask} {
        transform: skewX(10deg) translateX(-3px);
			}
		}
	}
`

const ButtonText = styled.span`
  color: ${theme.colors.stroke};
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
	margin-right: 8px;
	
	&:hover {
		cursor: pointer;
	}
`


