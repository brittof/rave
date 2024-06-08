import { Link, NavLink } from "react-router-dom";
import logo from "#/assets/logo.png";
import styles from "./menu.module.css";

export default function Menu() {
	return (
		<header className={styles.container}>
			<nav>
				<menu>
					<li>
						<NavLink to="/projects">Projects</NavLink>
					</li>
					<Link to="/">
						<img src={logo} alt="Logotype" width={48} />
					</Link>
					<li>
						<NavLink to="/blog">Blog</NavLink>
					</li>
				</menu>
			</nav>
		</header>
	);
}
