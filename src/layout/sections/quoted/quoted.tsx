import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/theme";
import Quotes from "../../../assets/img/upperdot.svg"

export const Quoted = () => {
	return (
		<StyledQuoted>
			<blockquote>
				<MainText>With great power comes great electricity bill</MainText>
				<cite>- Dr. Who</cite>
			</blockquote>
		</StyledQuoted>
	);
};

const StyledQuoted = styled(Container)`
	display: flex;
	justify-content: center;
	margin-top: 112px;
	margin-bottom: 72px;
  font-size: 24px;
	line-height: 32px;

	
  blockquote {
	  display: flex;
	  flex-wrap: wrap;
	  flex-direction: column;
	  width: 714px;
	  align-items: flex-end;
	  position: relative;
	  height: fit-content;
  }
	
	cite {
    height: fit-content;
		padding: 16px;
    border: ${theme.colors.stroke} 1px solid;
		border-top: none;
		font-size: 24px;
	}
`

const MainText = styled.p`
  padding: 32px;
  border: ${theme.colors.stroke} 1px solid;
  width: 100%;
  height: fit-content;

  &::after {
    content: "";
    display: inline-block;
    width: 41px;
    height: 29px;
    background-image: url(${Quotes});
    background-size: cover;
    position: absolute;
    top: -14px;
    left: 11px;
  }

  &::before {
    content: "";
    display: inline-block;
    width: 41px;
    height: 29px;
    background-image: url(${Quotes});
    background-size: cover;
    position: absolute;
    right: 11px;
    bottom: 50px;
  }
`