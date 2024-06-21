import styled from "styled-components";

type FlexWrapperPropsType = {
    flexDirection?: string,
    justifyContent?: string,
    alignItems?: string,
    flexWrap?: string,
    alignContent?: string,
    gap?: string,
    rowGap?: string,
    columnGap?: string,
    width?: string,
    maxWidth?: string,
    height?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'stretch'};
    flex-wrap: ${props => props.flexWrap || 'no-wrap'};
    align-content: ${props => props.alignContent || 'flex-start'};
    gap: ${props => props.gap};
    row-gap: ${props => props.rowGap};
    column-gap: ${props => props.columnGap};
    width: ${props => props.width};
    max-width: ${props => props.maxWidth};
    height: ${props => props.height};
`
