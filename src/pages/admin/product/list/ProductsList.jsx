import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { AddCircle } from "@material-ui/icons";
import styles from "./products-list.module.scss";
import { ShoeApiClient } from "../../helpers/api";
import { DeleteButtonWithStyles, EditButtonWithStyles } from "../../helpers";

export default function ProductsList(props) {
    const match = useRouteMatch();
    const history = useHistory();
    const directToProductAdd = (event) => {
        event.preventDefault();
        const pathToProductAdd = `${match.path}/add`;
        history.push(pathToProductAdd);
    }

    const [products, setProducts] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

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

    const onProductSearch = (event) => {
        event.preventDefault();
        const text = event.target.value;
        setSearchTerm(text);
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
            <input type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={onProductSearch}
                style={{
                    padding: "7px 15px",
                    minWidth: "440px",
                    borderRadius: "5px",
                    outline: "none",
                    border: "1px solid rgba(0, 0, 0, 0.25)",
                    marginBottom: "10px"
                }} />
            <table className={styles["product-table"]}>
                <thead>
                    <tr>
                        <th className={styles["product-id"]}>
                            Id
                        </th>
                        <th className={styles["product-name"]}>
                            Name
                        </th>
                        <th className={styles["product-brand"]}>
                            Brand
                        </th>
                        <th className={styles["product-price"]}>
                            Origin Price
                        </th>
                        <th className={styles["product-price"]}>
                            Discount Price
                        </th>
                        <th className={styles["product-gender"]}>
                            Gender
                        </th>

                        <th className={styles["product-link"]}>
                            Image
                        </th>
                        <th className={styles["product-actions"]}>
                            #
                        </th>
                    </tr>
                </thead >
                <tbody>
                    {products.filter(product => Object.values(product).some(property => property
                        .toString()
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()))
                    ).map((product) =>
                        <ProductTableRow key={product._id} product={product} onUserDeleted={onProductDeleted} />)
                    }
                </tbody>
            </table>
        </section>)
}


const ProductTableRow = (props) => {
    const { _id, name, brand, origin_price, discount_price, gender, link } = props.product
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
        const answer = window.confirm("Are you sure want to delete the record!");
        if (!answer) {
            return;
        }

        await ShoeApiClient.remove(id);
        rowDeleteCallBack(_id);
    }

    return (
        <tr className="product-table-row">
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
                {origin_price}
            </td>
            <td className={styles["product-price"]}>
                {discount_price}
            </td>
            <td className={styles["product-gender"]}>
                {gender}
            </td>
            <td className={styles["product-link"]}>
                <img src={"http://localhost:3000/product-img/" + link} width="60px" height="60px" alt="product" />
            </td>
            <td className={styles["product-actions"]}>
                <EditButtonWithStyles onClick={(event) => {
                    directToProductEdit(event, _id)
                }} />
                <DeleteButtonWithStyles onClick={async (event) => {
                    await deleteProduct(event, _id)
                }} />
            </td>
        </tr>
    )
}

