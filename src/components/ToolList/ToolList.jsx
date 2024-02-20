import { ToolItem } from './ToolItem/ToolItem';

export const ToolList = ({ integrations }) => {
	return (
		<>
			{integrations ? (
				<ul>
					{integrations.map(({ title, content, path, imgUrl }) => (
						<ToolItem
							key={title}
							title={title}
							content={content}
							path={path}
							imgUrl={imgUrl}
						/>
					))}
				</ul>
			) : null}
		</>
	);
};
