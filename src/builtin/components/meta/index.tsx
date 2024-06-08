import type React from "react";

type Metadata = { title: string; description?: string };

export const Meta: React.FC<Metadata> = ({ title, description }) => {
	return (
		<>
			<title>{title}</title>
			{description && <meta name="description" content={description} />}
		</>
	);
};
