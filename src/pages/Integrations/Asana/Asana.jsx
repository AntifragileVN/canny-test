import { Button } from 'components/Button/Button';
import { Content } from 'components/Layout/Layout.styled';
import { SettingsHeading } from 'components/SettingsHeading/SettingsHeading';
import { NavLink } from 'react-router-dom';
import { Text, StyledLink } from '../Integrations.styled';

const Asana = () => {
	return (
		<>
			<SettingsHeading title={'Asana Integration'} />
			<Content>
				<Text>
					Canny for Asana lets you link Canny posts with Asana tasks and sync
					fields from Asana to Canny. This helps your engineering and product
					management teams communicate priorities.
				</Text>
				<Text>
					Check out{' '}
					<StyledLink to="http://help.canny.io/en/articles/7065590-asana-integration">
						this help article
					</StyledLink>{' '}
					to see how this integration works.
				</Text>
				<NavLink to="https://app.asana.com/-/oauth_authorize?client_id=1204095351455949&redirect_uri=https%3A%2F%2Fcanny.io%2Fasana-redirect&response_type=code&state=eyJhbGciOiJIUzI1NiJ9.eyJpbnRlZ3JhdGlvbiI6ImFzYW5hIiwic3ViZG9tYWluIjoiYW50aWZyYWdpbGl0eSIsImhhc2giOiJkYjJiMjY0ZmRiNzhhNTcyMjE1MTY2OTEzMTA3Y2ExODdjN2Q0YzhjNDdkN2FiMzYxMjFlNWY1YTg0ZmQ1NjliIiwiZXhwIjoxNzA4NDM4NjI4fQ.95x4kOyEQLNLBtzq_vIC8TBPFxhLRXnEsTiZtXSp7JM">
					<Button>
						<span>Install Asana</span>
					</Button>
				</NavLink>
			</Content>
		</>
	);
};

export default Asana;
