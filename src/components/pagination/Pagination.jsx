import React, { useState } from 'react';
import styles from "./pagination.module.scss";

export default function Pagination(props) {
    const [active, setActive] = useState(1)

    const pageIndexes = Array.from(Array(props.pagesCount), (_, index) => index + 1);

    return <div className={styles["pagination"]}>
        <ul className={`${styles["pagination__list"]} ${props.className}`}>
            <li className={styles["pagination__item"]}>
                <button className={styles["pagination__link"]}>
                    &lt;
                </button>
            </li>
            {
                pageIndexes && pageIndexes.map(index =>
                    <li key={index} className={styles["pagination__item"]}>
                        <button className={styles["pagination__link"]}
                            onClick={() => setActive(index)}>
                            {index}
                        </button>
                    </li>
                )
            }
            <li className={styles["pagination__item"]}>
                <button className={styles["pagination__link"]}>
                    &gt;
                </button>
            </li>
        </ul>
    </div>
}

