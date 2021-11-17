import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Pagination } from "../../../../components/pagination";
import { AddCircle, Edit, Delete } from "@material-ui/icons";
import styles from "./products-list.module.scss";
import { ShoeApiClient } from "../../helpers/api";

export default function ProductsList(props) {
    const match = useRouteMatch();
    const history = useHistory();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async function () {
            const shoes = await ShoeApiClient.findAll();
            if (shoes) {
                setProducts(shoes);
            }
        })();
    }, [])

    const directToProductAdd = (event) => {
        event.preventDefault();
        const pathToProductAdd = `${match.path}/add`;
        history.push(pathToProductAdd);
    }

    const directToProductEdit = (event, id) => {
        event.preventDefault();
        const pathToProductEdit = `${match.path}/edit/${id}`
        history.push(pathToProductEdit);
    }

    const handleDelete = async (event, id) => {
        event.preventDefault();
        await ShoeApiClient.remove(id);

        const removed = products.filter(product => product._id != id);
        setProducts(removed);
    }

    return (
        <section>
            <header className={styles["products-list__header"]}>
                <h3 className={styles["products-list__title"]}>
                    Products List
                    <i></i>
                </h3>
                <button className={styles["products-list__action"]}
                    onClick={(event) => directToProductAdd(event)}>
                    Add New Item
                    <AddCircle />
                </button>
            </header>
            <table className={styles["products-list"]}>
                <thead className={styles["products-list__head"]}>
                    <tr>
                        <th className={styles["products-list__id"]}>Id</th>
                        <th className={styles["products-list__name"]}>Name</th>
                        <th className={styles["products-list__brand"]}>Brand</th>
                        <th className={styles["products-list__price"]}>Price</th>
                        <th className={styles["products-list__gender"]}>Gender</th>
                        <th className={styles["products-list__link"]}>Image Link</th>
                        <th className={styles["products-list__discount"]}>Discount</th>
                        <th className={styles["products-list__actions"]}>Actions</th>
                    </tr>
                </thead>
                <tbody className="products-list__body">
                    {
                        products.map((product) =>
                            <tr key={product._id}>
                                <td className={styles["products-list__id"]}>{product._id}</td>
                                <td className={styles["products-list__name"]}>{product.name}</td>
                                <td className={styles["products-list__brand"]}>{product.brand}</td>
                                <td className={styles["products-list__price"]}>{product.price}</td>
                                <td className={styles["products-list__gender"]}>{product.gender}</td>
                                <td className={styles["products-list__link"]}>{product.link}</td>
                                <td className={styles["products-list__discount"]}>{product.discount * 100}%</td>
                                <td className={styles["products-list__actions"]}>
                                    <button className={styles["products-list__action"]}
                                        onClick={(event) => directToProductEdit(event, product._id)}>
                                        <Edit />
                                    </button>
                                    <button className={styles["products-list__action"]}
                                        onClick={(event) => handleDelete(event, product._id)}>
                                        <Delete />
                                    </button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
            <Pagination pagesCount={5} />
        </section>)
}