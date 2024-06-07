import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "./project/Project";
import styled from "styled-components";
import {Link} from "../../../components/Link";
import {FlexWrapper} from "../../../components/FlexWrapper";
import projectOne from '../../../assets/img/project-1.webp'
import projectTwo from '../../../assets/img/project-2.webp'
import projectThree from '../../../assets/img/project-3.webp'

export const Projects = () => {
	return (
		<StyledProjects>

			<FlexWrapper alignItems="center" justifyContent="space-around">
				<SectionTitle>#Projects</SectionTitle>
				<Link>View all</Link>
			</FlexWrapper>

			<FlexWrapper alignItems="flex-start" justifyContent="center" gap={'16px'}>
				<Project src={projectOne} frameworks={'HTML SCSS Python Flask'} title={'ChertNodes'}
				         description={'Minecraft servers hosting'}/>
				<Project src={projectTwo} frameworks={'React Express Discord.js Node.js HTML SCSS Python Flask'}
				         title={'ProtectX'} description={'Discord anti-crash bot'}/>
				<Project src={projectThree} frameworks={'CSS Express Node.js'} title={'Kahoot Answers Viewer'}
				         description={'Get answers to your kahoot quiz'}/>
			</FlexWrapper>

		</StyledProjects>
	);
};

const StyledProjects = styled.section`
  min-height: 70vh;

`

