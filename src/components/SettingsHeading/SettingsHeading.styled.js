import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeadingContainer = styled.div`
	border-bottom: 1px solid #d9d9d9;
	font-size: 24px;
	padding: 24px 32px;
`;

export const HeadingTitle = styled.div`
	font-size: 24px;
	margin: 0 0 8px;
`;

export const HeadingSubTitle = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;

	color: #646464;
	font-size: 14px;
`;

export const AditionalInfo = styled(Link)`
	margin-left: 8px;
	line-height: 22px;
	font-size: 14px;
	color: #6e56cf;
	text-decoration: underline;
	transition: all 0.1s ease-in-out;
`;
