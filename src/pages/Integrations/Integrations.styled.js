import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Text = styled.p`
	font-size: 14px;
	line-height: 22px;
	margin-bottom: 16px;
`;

export const StyledLink = styled(NavLink)`
	text-decoration: underline;
	transition: all 0.1s ease-in-out;

	&:hover {
		opacity: 0.7;
	}
`;
