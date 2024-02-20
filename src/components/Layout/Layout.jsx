import { Suspense } from 'react';
import { MainContainer } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<MainContainer>
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
		</MainContainer>
	);
};
