import type React from "react";
import { Body, Meta } from "#/builtin/components";

export const Home: React.FC = () => {
	return (
		<>
			<Meta title="Rave / Home" />

			<Body>
				<h1>Home</h1>
				<p>Welcome to the home page!</p>
			</Body>
		</>
	);
};
