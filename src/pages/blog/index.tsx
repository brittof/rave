import type React from "react";
import { Body, Meta } from "#/builtin/components";

export const Blog: React.FC = () => {
	return (
		<>
			<Meta title="Rave / Blog" />

			<Body>
				<h1>Blog</h1>
				<p>Welcome to the blog page!</p>
			</Body>
		</>
	);
};
