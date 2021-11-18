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
    const directToProductAdd = (event) => {
        event.preventDefault();
        const pathToProductAdd = `${match.path}/add`;
        history.push(pathToProductAdd);
    }


    return (
        <section>
            <header className={styles["product-list-header"]}>
                <h3 className={styles["product-list-title"]}>
                    Products List
                </h3>
                <button className={styles["product-list-action"]}
                    onClick={(event) => directToProductAdd(event)}>
                    Add New Item
                    <AddCircle />
                </button>
            </header>
            <table className={styles["product-table"]}>
                <ProductTableHead />
                <ProductTableBody />
            </table>
            <Pagination pagesCount={5} />
        </section>)
}


const ProductTableHead = (props) => {
    return (
        <thead>
            <tr>
                <th className={styles["product-id"]}>Id</th>
                <th className={styles["product-name"]}>Name</th>
                <th className={styles["product-brand"]}>Brand</th>
                <th className={styles["product-price"]}>Price</th>
                <th className={styles["product-gender"]}>Gender</th>
                <th className={styles["product-link"]}>Image Link</th>
                <th className={styles["product-discount"]}>Discount</th>
                <th className={styles["product-actions"]}>Actions</th>
            </tr>
        </thead >
    )
}

const ProductTableBody = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => onMounted(), [])
    const onMounted = () => {
        (async () => {
            const shoes = await ShoeApiClient.findAll();
            if (shoes) {
                setProducts(shoes);
            }
        })();
    }

    const onProductDeleted = (id) => {
        const deleted = products.filter(product =>
            product._id !== id);
        setProducts(deleted);
    }

    return (
        <tbody>
            {products.map((product) =>
                <ProductTableRow key={product._id} product={product}
                    onProductDeleted={onProductDeleted} />)}
        </tbody>
    )
}

const ProductTableRow = (props) => {
    const { _id, name, brand, price, gender, link, discount } = props.product
    const rowDeleteCallBack = props.onProductDeleted;

    const match = useRouteMatch();
    const history = useHistory();
    const directToProductEdit = (event, id) => {
        event.preventDefault();
        const pathToProductEdit = `${match.path}/edit/${id}`
        history.push(pathToProductEdit);
    }

    const deleteProduct = async (event, id) => {
        event.preventDefault();
        await ShoeApiClient.remove(id);
    }

    return (
        <tr>
            <td className={styles["product-id"]}>
                {_id}
            </td>
            <td className={styles["product-name"]}>
                {name}
            </td>
            <td className={styles["product-brand"]}>
                {brand}
            </td>
            <td className={styles["product-price"]}>
                {price}
            </td>
            <td className={styles["product-gender"]}>
                {gender}
            </td>
            <td className={styles["product-link"]}>
                {link}
            </td>
            <td className={styles["product-discount"]}>
                {discount || "0"}%
            </td>
            <td className={styles["product-actions"]}>
                <button className={styles["product-action"]}
                    onClick={(event) => {
                        props.onProductDeleted();
                        directToProductEdit(event, _id)
                    }}>
                    <Edit />
                </button>
                <button className={styles["product-action"]}
                    onClick={async (event) => {
                        await deleteProduct(event, _id)
                        rowDeleteCallBack(_id);
                    }}>
                    <Delete />
                </button>
            </td>
        </tr>
    )
}

