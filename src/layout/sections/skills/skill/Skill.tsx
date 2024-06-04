import React from 'react';
import styled from "styled-components";
import {SmallText} from "../../../../components/SmallText";

type SkillPropsType = {
	title: string;
	description: string;
}

export const Skill = (props: SkillPropsType) => {
	return (
		<StyledSkill>
			<SkillTitle>{props.title}</SkillTitle>
			<SmallText>{props.description}</SmallText>
		</StyledSkill>
	);
};

const StyledSkill = styled.div`
  background-color: rgba(0, 111, 139, 0.73);
  width: 178px;
	min-height: 103px;
  border: 1px solid red;
  box-sizing: border-box;
`

export const SkillTitle = styled.h3`

`
