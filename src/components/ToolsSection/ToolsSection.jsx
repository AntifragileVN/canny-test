import { Section, Title } from './ToolsSection.styled';

export const ToolsSection = ({ title, children }) => {
	return (
		<Section>
			<Title>{title}</Title>
			{children}
		</Section>
	);
};
