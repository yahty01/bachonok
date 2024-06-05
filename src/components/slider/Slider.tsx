import React from 'react';
import styled from "styled-components";
import {Slide} from "./slide/Slide";

export const Slider = () => {
	return (
		<StyledSlider>
			<Slide/>
		</StyledSlider>
	);
};

const StyledSlider = styled.div`
	background-color: darkolivegreen;
`