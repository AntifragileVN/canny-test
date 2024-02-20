import { Content } from 'components/Layout/Layout.styled';
import { Text } from '../Integrations.styled';
import { SettingsHeading } from 'components/SettingsHeading/SettingsHeading';
import { AdminFutureBlock } from 'components/AdminFutureBlock/AdminFutureBlock';

const AzureDevops = () => {
	return (
		<>
			<SettingsHeading title={'Azure DevOps Integration'} />
			<Content>
				<Text>
					Canny for Azure DevOps lets you link Canny posts with Azure DevOps
					work items, and sync states from Azure DevOps to Canny. This helps
					your engineering and product management teams communicate priorities.
				</Text>
				<AdminFutureBlock
					title={'Upgrade for Azure DevOps Integration'}
					subtitle={
						'Link posts to work items, and sync states from Azure DevOps to Canny.'
					}
				/>
			</Content>
		</>
	);
};

export default AzureDevops;
