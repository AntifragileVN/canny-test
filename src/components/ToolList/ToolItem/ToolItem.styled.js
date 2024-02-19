import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ToolItemStyled = styled.li`
	position: relative;
	border: 1px solid #d9d9d9;
	border-radius: 10px;
	padding: 20px;

	font-size: 14px;
	letter-spacing: normal;
	line-height: 22px;

	&:not(:last-child) {
		margin-bottom: 16px;
	}
`;

export const StyledLink = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: black;
	cursor: pointer;
`;

export const ToolLogo = styled.img`
	margin-right: 16px;
	width: 50px;
`;

export const ToolInfo = styled.div`
	color: #646464;
	width: 100%;
`;

export const ToolTitle = styled.h3`
	text-transform: none;
	margin-bottom: 5px;
	color: #202020;
`;

export const ToolContent = styled.p``;

export const ToolSettingsImg = styled.img`
	width: 25px;
	height: 25px;
`;
