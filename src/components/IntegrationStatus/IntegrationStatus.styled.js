import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const IntergrationInfo = styled.div`
	font-size: 14px;
	line-height: 22px;
	margin-bottom: 40px;
`;

export const IntergrationStyledLink = styled(NavLink)`
	color: #525df9;
	cursor: pointer;
	text-decoration: underline;
	transition: all 0.1s ease-in-out;
`;
