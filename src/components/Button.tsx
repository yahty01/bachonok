import styled from "styled-components";
import {theme} from "../styles/theme";

export const Button = styled.button`
	padding: 8px 16px 8px 16px;
	border: ${theme.colors.accent} solid 1px;
	color: ${theme.colors.text};
	font-weight: 500;
	font-style: 16px;
	&:hover {
		cursor: pointer;
		background-color: ${theme.colors.accent02};
	}
`