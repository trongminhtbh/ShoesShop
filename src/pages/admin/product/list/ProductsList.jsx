import React from "react"
import { useHistory } from "react-router";
import { Pagination } from "../../../../components/pagination";
import { AddCircle, Edit, Delete } from "@material-ui/icons";
import styles from "./products-list.module.scss";

const products = [
    {
        id: 1,
        name: "sandal",
        brand: "nike",
        price: 100000,
        link: "",
        gender: "male",
        description: "",
        discount: .2
    },

    {
        id: 2,
        name: "sandal",
        brand: "nike",
        price: 100000,
        link: "",
        gender: "male",
        description: "",
        discount: .2
    },

    {
        id: 3,
        name: "sandal",
        brand: "nike",
        price: 100000,
        link: "",
        gender: "male",
        description: "",
        discount: .2
    },

    {
        id: 4,
        name: "sandal",
        brand: "nike",
        price: 100000,
        link: "",
        gender: "male",
        description: "",
        discount: .2
    },

    {
        id: 5,
        name: "sandal",
        brand: "nike",
        price: 100000,
        link: "",
        gender: "male",
        description: "",
        discount: .2
    },
    {
        id: 5,
        name: "sandal",
        brand: "nike",
        price: 100000,
        link: "",
        gender: "male",
        description: "",
        discount: .2
    }
]

export default function ProductsList(props) {
    const history = useHistory();

    const directToProductAdd = (event) => {
        history.push("/products/add");
    }

    const directToProductEdit = (event, id) => {
        history.push(`/products/edit/${id}`);
    }

    const handleDelete = (event, id) => {

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
                            <tr>
                                <td className={styles["products-list__id"]}>{product.id}</td>
                                <td className={styles["products-list__name"]}>{product.name}</td>
                                <td className={styles["products-list__brand"]}>{product.brand}</td>
                                <td className={styles["products-list__price"]}>{product.price}</td>
                                <td className={styles["products-list__gender"]}>{product.gender}</td>
                                <td className={styles["products-list__link"]}>{product.link}</td>
                                <td className={styles["products-list__discount"]}>{product.discount * 100}%</td>
                                <td className={styles["products-list__actions"]}>
                                    <button className={styles["products-list__action"]} 
                                        onClick={(event) => directToProductEdit(event, product.id)}>
                                        <Edit />
                                    </button>
                                    <button className={styles["products-list__action"]} 
                                        onClick={(event) => handleDelete(event, product.id)}>
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