import React from 'react';
import iconsSprite from '../../assets/img/icons-sprite.svg'
import styled from "styled-components";

type IconProps = {
    iconId: string,
    width?: string, //?: значит опционально, может быть, может отсутствовать
    height?: string,
    viewBox?: string,
}

const Icon = (props: IconProps) => {
    return (
        <StyledIcon width={props.width || "32"} height={props.height || "32"} viewBox={props.width || "0 0 32 32"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
        </StyledIcon>
        );
};

export default Icon;

const StyledIcon = styled.svg``