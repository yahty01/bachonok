import React from 'react';
import styled from "styled-components";
import {SmallText} from "../../../../components/SmallText";
import {Link} from "../../../../components/Link";

type ProjectPropsType = {
	src: string,
	title: string,
	description: string,
	frameworks: string,
}

export const Project = (props: ProjectPropsType) => {
	return (
		<StyledProject>
			<Img src={props.src} alt="Project"/>
			<SmallText>{props.frameworks}</SmallText>
			<Title>{props.title}</Title>
			<SmallText>{props.description}</SmallText>
			<Link>Live &lt;~&gt; </Link>
		</StyledProject>
	);
};

const StyledProject = styled.div`
	background-color: darkolivegreen;
`

const Img = styled.img`

`

const Title = styled.h3` 
	
`