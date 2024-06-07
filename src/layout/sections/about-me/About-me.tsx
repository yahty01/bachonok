import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import photo from "../../../assets/img/men-two.webp";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const AboutMe = () => {
	return (
		<StyledAboutMe>
			<SectionTitle>about-me</SectionTitle>

			<FlexWrapper justifyContent="space-around">
				<TextArea>
					<Text>Hello, i’m Elias!<br/>

						I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch
						and
						raise them into modern user-friendly web experiences.<br/>

						Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been
						helping various clients to establish their presence online. I always strive to learn about the newest
						technologies and frameworks.</Text><br/>
					<Button>Read more</Button>
				</TextArea>
				<Photo src={photo} alt=''/>
			</FlexWrapper>

		</StyledAboutMe>
	);
};

const StyledAboutMe = styled.section`
  min-height: 60vh;
  color: #ABB2BF;
`
const TextArea = styled.p`
  max-width: 515px
`
const Text = styled.p`
`

const Photo = styled.img`
  width: 35vh;
  height: 100%;
  object-fit: cover;
`