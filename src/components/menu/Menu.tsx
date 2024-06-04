import React from 'react';
import styled from "styled-components";


export const Menu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledMenu>
			<ul>
				{
					props.menuItems.map((item, id) => {
						id = Date.now()
						return (
							<li key={id}>
								<a href='https://'>{item}</a>
							</li>
						)
					})
				}
			</ul>
		</StyledMenu>
	);
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px
  }
`