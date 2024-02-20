import styled from '@emotion/styled';

export const StyledButton = styled.button`
	position: relative;
	display: flex;
	justify-content: center;
	overflow: hidden;

	padding: 14px 16px;

	border: none;
	border-radius: 6px;
	background: #525df9;

	color: white;
	font-weight: 700;
	text-transform: uppercase;
	transition: all 0.1s ease-in-out;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}
`;
