import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/img/men-one.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import Icon from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/theme";
import {SmallText} from "../../../components/SmallText";
import {ColoredText} from "../../../components/ColoredText";

export const Main = () => {
	return (
		<StyledMain>
			<FlexWrapper height={'100%'} alignItems={'center'} justifyContent={'space-between'}>
				<div>
					<MainText>Egor Savelev is a <AccentText>front-end developer</AccentText></MainText><br/>
					<MainSmallText>
						Experienced with modern frameworks and libraries, always looking to improve user experience and
						performance. s
					</MainSmallText>
					<Button>Contact me!!</Button>
				</div>

				<FlexWrapper justifyContent={'space-between'} flexDirection={'column'} alignItems={'center'}>
					<PhotoWrapper>
						<Photo src={photo} alt=''/>
					</PhotoWrapper>
					<WorkingNow>
						<Icon iconId={'Rectangle'} width={'16px'} height={'16px'} viewBox={'0 0 16 16'}/>
						<ColoredText color={theme.colors.stroke}>
							Currently working on
						</ColoredText>
						Portfolio
					</WorkingNow>
				</FlexWrapper>
			</FlexWrapper>

		</StyledMain>
	);
};

const StyledMain = styled(Container)`
  margin-top: 52px;
`
const PhotoWrapper = styled.div`
  position: relative;
	border: red solid 1px;
`
const Photo = styled.img`
  width: 457px;
  height: 100%;
  object-fit: cover;
`


const MainText = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 42px;
`
const AccentText = styled.span`
  color: ${theme.colors.accent};
  font-size: 32px;
  font-weight: 600;
  line-height: 42px;
`
const WorkingNow = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 83%;
  border: rgb(171, 178, 191, 0.7) solid 1px;
  padding: 8px 0 8px 8px;
  gap: 10px;
`
const MainSmallText = styled(SmallText)`
  margin: 32px 0 24px 0;
`

