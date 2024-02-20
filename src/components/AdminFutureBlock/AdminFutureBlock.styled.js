import styled from '@emotion/styled';

export const AdminFutureContainer = styled.div`
	border: 1px solid #525df966;
	border-radius: 6px;

	padding: 16px;

	background: #fff;
	color: #202020;
	text-align: left;
`;

export const Title = styled.h2`
	font-weight: 600;
	font-size: 14px;
	line-height: 22px;
	margin-bottom: 3px;
`;

export const Subtitle = styled.p`
	color: #838383;
	font-size: 14px;
	margin-bottom: 16px;
`;

export const Contacts = styled.div`
	font-size: 14px;
	line-height: 22px;
	color: #838383;
	cursor: pointer;
	opacity: 0.8;
	text-decoration: underline;
	transition: all 0.1s ease-in-out;

	&:hover {
		opacity: 1;
	}
`;
