import {
	HeadingContainer,
	HeadingTitle,
	HeadingSubTitle,
	AditionalInfo,
} from './SettingsHeading.styled';

export const SettingsHeading = ({ title, subtitle, learnMoreLink }) => {
	return (
		<HeadingContainer>
			<HeadingTitle>{title}</HeadingTitle>
			<HeadingSubTitle>
				{subtitle}
				{learnMoreLink && (
					<AditionalInfo to={learnMoreLink}>Learn more</AditionalInfo>
				)}
			</HeadingSubTitle>
		</HeadingContainer>
	);
};
