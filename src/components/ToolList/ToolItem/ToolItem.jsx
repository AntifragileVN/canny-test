import React from 'react';
import {
	ToolItemStyled,
	StyledLink,
	ToolLogo,
	ToolInfo,
	ToolTitle,
	ToolContent,
	ToolSettingsImg,
} from './ToolItem.styled';

export const ToolItem = ({ title, content, path, imgUrl, alt = '' }) => {
	return (
		<ToolItemStyled>
			<StyledLink to={`/admin/settings/${path}`}>
				<ToolLogo src={imgUrl} alt={alt} />
				<ToolInfo>
					<ToolTitle>{title}</ToolTitle>
					<ToolContent>{content}</ToolContent>
				</ToolInfo>
				<ToolSettingsImg src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjUwNiA5LjQ5NGMtLjgwOS0uODQ0LTEuODEtMS4yNjUtMy4wMDYtMS4yNjUtMS4xOTUgMC0yLjIxNS40MjEtMy4wNTkgMS4yNjUtLjgwOC44MDktMS4yMTIgMS44MS0xLjIxMiAzLjAwNiAwIDEuMTk1LjQwNCAyLjIxNSAxLjIxMiAzLjA1OS44NDQuODA4IDEuODY0IDEuMjEzIDMuMDU5IDEuMjEzczIuMTk3LS40MDUgMy4wMDYtMS4yMTNjLjg0NC0uODQ0IDEuMjY1LTEuODY0IDEuMjY1LTMuMDU5cy0uNDIxLTIuMTk3LTEuMjY1LTMuMDA2Wm01LjUzNyA1LjQ4NS0uNzM4IDEuODQ1IDEuMzcgMi42OS4xNTkuMzY5LTEuODk4IDEuODk4LTMuMTEyLTEuNDc2LTEuODQ2LjczOC0uOTQ5IDIuOS0uMTA1LjM3aC0yLjY5bC0xLjE2LTMuMjctMS44OTgtLjczOC0yLjY5IDEuMzctLjM2OS4xNTktMS44OTgtMS44OTggMS40NzYtMy4xMTItLjczOC0xLjg0Ni0yLjktLjk0OS0uMzctLjEwNXYtMi42OWwzLjI3LTEuMTYuNzM4LTEuODk4LTEuMzctMi42OS0uMTU5LS4zNjlMNS4wNjQgMy4yMmwzLjExMiAxLjQ3NiAxLjg0NS0uNzM4Ljk1LTIuOS4xMDUtLjM3aDIuNjlsMS4xNiAzLjI3IDEuODk4LjczOCAyLjY5LTEuMzcuMzY5LS4xNTkgMS44OTggMS44OTgtMS40NzYgMy4xMTIuNzM4IDEuODQ1IDIuOS45NS4zNy4xMDV2Mi42OWwtMy4yNyAxLjIxM1oiIGZpbGw9IiM5OTkiLz48L3N2Zz4=" />
			</StyledLink>
		</ToolItemStyled>
	);
};
