import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.scss";

export default function SideBar(props) {
    const links = props.routeConfig;

    return (
        <aside>
            <ul className={styles["sidebar"]}>
                {links && links.map((link) =>
                    <li key={link.key}>
                        <NavLink to={link.path}
                            className={styles["sidebar__link"]}
                            activeClassName={styles["active"]}>
                            {link.linkText}

                        </NavLink>
                    </li>)
                }
            </ul>
        </aside>
    )
}