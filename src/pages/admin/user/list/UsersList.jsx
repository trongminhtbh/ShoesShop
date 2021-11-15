import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Pagination } from "../../../../components/pagination";
import { UserApiClient } from "../../helpers";
import styles from "./users-list.module.scss";

const users = [
    {
        id: 1,
        name: "Tang Minh Nhat",
        phone: "0999888999",
        email: "mnhat71.t@gmail.com",
        dateOfBirth: "07/01/2000"
    },

    {
        id: 2,
        name: "Tang Minh Nhat",
        phone: "0999888999",
        email: "mnhat71.t@gmail.com",
        dateOfBirth: "07/01/2000"
    },

    {
        id: 3,
        name: "Tang Minh Nhat",
        phone: "0999888999",
        email: "mnhat71.t@gmail.com",
        dateOfBirth: "07/01/2000"
    },

    {
        id: 4,
        name: "Tang Minh Nhat",
        phone: "0999888999",
        email: "mnhat71.t@gmail.com",
        dateOfBirth: "07/01/2000"
    },

    {
        id: 5,
        name: "Tang Minh Nhat",
        phone: "0999888999",
        email: "mnhat71.t@gmail.com",
        dateOfBirth: "07/01/2000"
    },
]


export default function UsersList(props) {
    const history = useHistory();

    const [users, setUsers] = useState([])

    useEffect(() => {
        UserApiClient.findAll();
    }, [])

    const directToUserEdit = (id) => {
        history.push(`/users/edit/${id}`);
    }

    return (
        <div>
            <header className={styles["users-list__header"]}>
                <h3 className={styles["users-list__title"]}>Users List</h3>
            </header>
            <table className={styles["users-list"]}>
                <thead className={styles["users-list__head"]}>
                    <tr>
                        <th className={styles["users-list__id"]}>Id</th>
                        <th className={styles["users-list__name"]}>Name</th>
                        <th className={styles["users-list__phone"]}>Phone</th>
                        <th className={styles["users-list__email"]}>Email</th>
                        <th className={styles["users-list__date-of-birth"]}>Date Of Birth</th>
                        <th className={styles["users-list__actions"]}>Actions</th>
                    </tr>
                </thead>
                <tbody className={styles["users-list__body"]}>
                    {
                        users.map((user) => <tr>
                            <td className={styles["users-list__id"]}>{user.id}</td>
                            <td className={styles["users-list__name"]}>{user.name}</td>
                            <td className={styles["users-list__phone"]}>{user.phone}</td>
                            <td className={styles["users-list__email"]}>{user.email}</td>
                            <td className={styles["users-list__date-of-birth"]}>{user.dateOfBirth}</td>
                            <td className={styles["users-list__actions"]}>
                                <button onClick={() => directToUserEdit(user.id)}>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
            <Pagination pagesCount={5} />
        </div>
    )
}