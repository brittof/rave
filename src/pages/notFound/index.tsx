import type React from "react";
import { Body, Meta } from "#/builtin/components";
import banner from "#/assets/hero.png";
import styles from "./styles.module.css";

export const NotFound: React.FC = () => {
	return (
		<>
			<Meta title="404 Not Found" />

			<Body className={styles.container}>
				<img src={banner} alt="404 Not Found" />

				<h1>404 Not Found</h1>
				<p>Sorry, the page you are looking for does not exist.</p>
			</Body>
		</>
	);
};
