import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Pagination } from "../../../../components/pagination";
import { Edit, Delete } from "@material-ui/icons";
import { UserApiClient } from "../../helpers/api";
import styles from "./users-list.module.scss";

export default function UsersList(props) {
    const history = useHistory();
    const match = useRouteMatch();

    const [users, setUsers] = useState([])

    useEffect(() => {
        (async function () {
            const response = await UserApiClient.findAll();
            if (response != null) {
                setUsers(response);
            }
        })();
    }, [])

    const directToUserEdit = (id) => {
        const pathToUserEdit = `${match.path}/edit/${id}`;
        history.push(pathToUserEdit);
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
                        users.map((user) => <tr key={user._id}>
                            <td className={styles["users-list__id"]}>{user._id}</td>
                            <td className={styles["users-list__name"]}>{user.name}</td>
                            <td className={styles["users-list__phone"]}>{user.phone}</td>
                            <td className={styles["users-list__email"]}>{user.email}</td>
                            <td className={styles["users-list__date-of-birth"]}>{user.dob}</td>
                            <td className={styles["users-list__actions"]}>
                                <button onClick={() => directToUserEdit(user._id)}
                                    className={styles["users-list__action"]}>
                                    <Edit />
                                </button>
                                <button className={styles["users-list__action"]}>
                                    <Delete className={styles["users-list__action"]} />
                                </button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
            <Pagination pagesCount={5} />
        </div>
    )
}