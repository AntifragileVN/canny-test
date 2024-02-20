import {
	AdminFutureContainer,
	Title,
	Subtitle,
	Contacts,
} from './AdminFutureBlock.styled';

export const AdminFutureBlock = ({ title, subtitle, onClick }) => {
	return (
		<AdminFutureContainer>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
			<Contacts onClick={onClick}>Contact use</Contacts>
		</AdminFutureContainer>
	);
};
