import styled from "styled-components";
import {theme} from "../styles/theme";

export const Link = styled.a`
	color: ${theme.colors.stroke};
	font-weight: 400;
	font-size: 16px;
  line-height: 21px;
  & > * {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
  }
`