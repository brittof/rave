import type React from "react";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements
} from "react-router-dom";

import { Root } from "#/pages/root";
import { Projects } from "#/pages/projects";
import { Home } from "#/pages/home";
import { Blog } from "#/pages/blog";
import { NotFound } from "#/pages/notFound";

const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route index element={<Home />} />
			<Route path="projects" element={<Projects />} />
			<Route path="blog" element={<Blog />} />

			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

export const App: React.FC = () => {
	return <RouterProvider router={routes} />;
};
