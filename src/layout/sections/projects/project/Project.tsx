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
	max-width: 330px;
	width: 100%;
`

const Img = styled.img`
	width: 100%;
	height: 201px;
	object-fit: cover;
`

const Title = styled.h3` 
	
`