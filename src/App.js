import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { Integrations } from 'pages/Integrations/Integrations';

const Asana = lazy(() => import('pages/Integrations/Asana/Asana'));
const AzureDevops = lazy(() => import('pages/Integrations/AzureDevops/AzureDevops'));

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Integrations />} />
				<Route path="asana" element={<Asana />} />
				<Route path="azure-devops" element={<AzureDevops />} />
			</Route>
		</Routes>
	);
}

export default App;
