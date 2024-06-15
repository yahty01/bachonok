import styled from "styled-components";

type ColoredTextPropsType = {
	color: string | object
}

export const ColoredText = styled.span<ColoredTextPropsType>`
	color: ${props => props.color};
`