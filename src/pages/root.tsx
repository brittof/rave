import type React from "react";
import { Outlet } from "react-router-dom";

import Menu from "#/components/menu";

export const Root: React.FC = () => {
	return (
		<>
			<Menu />

			<Outlet />
		</>
	);
};
