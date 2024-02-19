import {
	HeadingContainer,
	HeadingTitle,
	HeadingSubTitle,
	AditionalInfo,
} from './SettingsHeading.styled';

export const SettingsHeading = ({ title, subtitle, learnMore }) => {
	return (
		<HeadingContainer>
			<HeadingTitle>{title}</HeadingTitle>
			<HeadingSubTitle>
				{subtitle}
				{learnMore && <AditionalInfo>Learn more</AditionalInfo>}
			</HeadingSubTitle>
		</HeadingContainer>
	);
};
