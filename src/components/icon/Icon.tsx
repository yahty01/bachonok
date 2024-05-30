import React from 'react';
import iconsSprite from '../../assets/img/icons-sprite.svg'

type IconProps = {
    iconId: string,
    width?: string, //?: значит опционально, может быть, может отсутствовать
    height?: string,
    viewBox?: string,
}

const Icon = (props: IconProps) => {
    return (
        <svg width={props.width || "32"} height={props.height || "32"} viewBox={props.width || "0 0 32 32"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
        </svg>
        );
};

export default Icon;