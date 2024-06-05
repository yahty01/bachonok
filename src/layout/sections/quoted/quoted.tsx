import React from 'react';
import styled from "styled-components";

export const Quoted = () => {
	return (
		<StyledQuoted>
			<blockquote>
				<p>"With great power comes great electricity bill"</p>
				<cite>Dr. Who</cite>
			</blockquote>
		</StyledQuoted>
	);
};

const StyledQuoted = styled.section`
  min-height: 30vh;
  background-color: #282C33;

  blockquote {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  blockquote > * {
    color: #f4f9f9;
  }
`