import type React from "react";

type BodyProps = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Body: React.FC<BodyProps> = ({ children, ...props }) => {
	return <main {...props}>{children}</main>;
};
