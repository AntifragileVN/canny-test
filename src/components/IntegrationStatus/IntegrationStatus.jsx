import { IntergrationInfo, IntergrationStyledLink } from './IntegrationStatus.styled';

export const IntegrationStatus = ({ plan = 'Free', integrationQuantity = '0' }) => {
	return (
		<IntergrationInfo>
			<p>
				<strong>Current plan: </strong>
				{plan}
			</p>
			<p>
				<strong>Integrations installed:</strong>
				{` ${integrationQuantity}/1 `}
				<IntergrationStyledLink>Get more integrations</IntergrationStyledLink>
			</p>
		</IntergrationInfo>
	);
};
