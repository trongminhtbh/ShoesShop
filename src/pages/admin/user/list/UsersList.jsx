import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { UserApiClient } from "../../helpers/api";
import styles from "./users-list.module.scss";
import { DeleteButtonWithStyles, EditButtonWithStyles } from "../../helpers";

export default function UsersList(props) {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => onMounted(), [])
    const onMounted = () => {
        (async function () {
            const fetched = await UserApiClient.findAll();
            if (fetched) {
                setUsers(fetched);
            }
        })();
    }

    const onUserDeleted = (id) => {
        const deleted = users.filter(user => user._id !== id);
        setUsers(deleted);
    }

    const onUserSearch = (event) => {
        event.preventDefault();
        const text = event.target.value;
        setSearchTerm(text);
    }

    return (
        <div>
            <header className={styles["user-list-header"]}>
                <h3 className={styles["user-list-title"]}>
                    Users List
                </h3>
            </header>
            <input type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={onUserSearch}
                style={{
                    padding: "7px 15px",
                    minWidth: "440px",
                    borderRadius: "5px",
                    outline: "none",
                    border: "1px solid rgba(0, 0, 0, 0.25)",
                    marginBottom: "10px"
                }} />

            <table className={styles["user-table"]}>
                <thead>
                    <tr>
                        <th className={styles["user-id"]}>
                            Id
                        </th>
                        <th className={styles["user-name"]}>
                            Name
                        </th>
                        <th className={styles["user-phone"]}>
                            Phone
                        </th>
                        <th className={styles["user-email"]}>
                            Email
                        </th>
                        <th className={styles["user-date-of-birth"]}>Date Of Birth</th>
                        <th className={styles["user-actions"]}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users
                        .filter(user => Object.values(user)
                            .some(property => property
                                .toString()
                                .includes(searchTerm)))
                        .map((user) =>
                            <UserTableRow key={user._id} user={user} onUserDeleted={onUserDeleted} />)
                    }
                </tbody>
            </table>
        </div>
    )
}


const UserTableRow = (props) => {
    const { _id, name, phone, email, dob } = props.user;

    const history = useHistory();
    const match = useRouteMatch();

    const directToUserEdit = (id) => {
        const pathToUserEdit = `${match.path}/edit/${id}`;
        history.push(pathToUserEdit);
    }

    const deleteUser = async (id) => {
        await UserApiClient.remove(id);
        props.onUserDeleted(id);
        alert("User deleted");
    }

    return (
        <tr>
            <td className={styles["user-id"]}>
                {_id}
            </td>
            <td className={styles["user-name"]}>
                {name}
            </td>
            <td className={styles["user-phone"]}>
                {phone}
            </td>
            <td className={styles["user-email"]}>
                {email}
            </td>
            <td className={styles["user-date-of-birth"]}>
                {dob}
            </td>
            <td className={styles["user-actions"]}>
                <EditButtonWithStyles onClick={() => directToUserEdit(_id)} />
                <DeleteButtonWithStyles onClick={() => deleteUser(_id)} />
            </td>
        </tr>
    )
}
