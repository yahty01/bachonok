import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Button} from "../Button";

export const Contacts = () => {
	return (
		<StyledContacts>
				<StyledForm>
					<FlexWrapper alignItems='center' justifyContent='center' flexDirection={'column'} gap={'16px'}>
						<FlexWrapper justifyContent={'space-between'} width='505px' gap={'16px'}>
							<StyledField placeholder={'Name'}/>
							<StyledField placeholder={'Email'}/>
						</FlexWrapper>
						<StyledField placeholder={'Title'}/>
						<StyledField placeholder={'Message'} as={'textarea'}/>
					</FlexWrapper>
					<Button type='submit'>Send</Button>
				</StyledForm>
		</StyledContacts>
	);
};

const StyledContacts = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 50vh;
	background-color: darkolivegreen;
`

const StyledForm = styled.form`
	max-width: 505px;
	width: 100%;
`

const StyledField = styled.input`
	width: 100%;
	min-height: 30px;
`
