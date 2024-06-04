import React from 'react';
import styled from "styled-components";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Skills = () => {
	return (
		<StyledSkills>
			<SectionTitle>#Skills</SectionTitle>
			<FlexWrapper justifyContent="space-between">
				<StyledBackground>BACKGROUND</StyledBackground>
				<FlexWrapper>

					<FlexWrapperSmallSkills gap={'16px'} flexDirection={'row-reverse'} flexWrap={'wrap'}>
						<Skill title={'Databases'} description={'SQLite PostgreSQL Mongo'}/>
						<Skill title={'Languages'} description={'TypeScript Lua Python JavaScript'}/>
						<Skill title={'Other'} description={'HTML CSS EJS SCSS REST Jinja'}/>
					</FlexWrapperSmallSkills>

					<FlexWrapper flexDirection={'column'} gap={'16px'}>
						<Skill title={'Tools'} description={'VSCode Neovim Linux Figma XFCE Arch Git FontAwesome'}/>
						<Skill title={'Frameworks'} description={'React Vue Disnake Discord.js Flask Express.js'}/>
					</FlexWrapper>

				</FlexWrapper>
			</FlexWrapper>
		</StyledSkills>
	);
};

const StyledSkills = styled.section`
  background-color: orange;
  min-height: 365px;
`
const StyledBackground = styled.div`
  background-color: rgba(201, 44, 18, 0.84);
  width: 50%;
	align-items: flex-end;
`

const FlexWrapperSmallSkills = styled(FlexWrapper)`
	margin-right: 16px;
	max-width: 533px;
`