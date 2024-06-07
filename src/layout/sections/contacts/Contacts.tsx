import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import Icon from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Contacts = () => {
	return (
		<StyledContacts>
			<SectionTitle>#contacts</SectionTitle>
			<FlexWrapper justifyContent={'space-between'}>
				<Text>
					I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to
					contact me
				</Text>

				<MessageMeDiv>
					<h4>Message me here</h4>

					<SocialList>
						<SocialItem>
							<Icon iconId={'Github'} height={'20px'} width={'20px'} viewBox={'0 0 20 20'}/>
						</SocialItem>
						<SocialItem>
							<Icon iconId={'Discord'} height={'20px'} width={'20px'} viewBox={'0 0 20 20'}/>
						</SocialItem>
					</SocialList>

				</MessageMeDiv>
			</FlexWrapper>

		</StyledContacts>
	);
};

const StyledContacts = styled.section`
  min-height: 60vh;
`

const Text = styled.div`
	max-width: 503px;
`

const MessageMeDiv = styled.div`
  background-color: #e60707;
	display: flex;
	flex-direction: column;
`

const SocialList = styled.ul`
  background-color: #e60707;
`

const SocialItem = styled.li`
  background-color: #e60707;
`