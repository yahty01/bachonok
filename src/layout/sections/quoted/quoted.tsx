import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/theme";

export const Quoted = () => {
	return (
		<StyledQuoted>
			<blockquote>
				<p>With great power comes great electricity bill</p>
				<cite>Dr. Who</cite>
			</blockquote>
		</StyledQuoted>
	);
};

const StyledQuoted = styled(Container)`
  min-height: 30vh;
	display: flex;
	justify-content: center;
	margin-top: 112px;
  font-size: 24px;
	line-height: 32px;

  blockquote {
	  display: flex;
	  flex-wrap: wrap;
	  width: 714px;
  }
	
	p {
    padding: 32px;
		border: ${theme.colors.stroke} 1px solid;
		width: 100%;
		height: fit-content;
	}
	
	cite {
    height: fit-content;
		padding: 16px;
    border: ${theme.colors.stroke} 1px solid;
	}
`