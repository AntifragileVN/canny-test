import { ToolItem } from './ToolItem/ToolItem';

export const ToolList = ({ integrations }) => {
	return (
		<ul>
			{integrations.map(({ title, content, path, imgUrl, alt }) => (
				<ToolItem
					key={title}
					title={title}
					content={content}
					path={path}
					imgUrl={imgUrl}
					alt={alt}
				/>
			))}
		</ul>
	);
};
