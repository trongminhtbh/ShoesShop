import React from "react";
import { Sidebar } from "../../../components/sidebar";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { UsersList, UserEdit } from "../user";
import { OrdersList, OrderEdit } from "../order";
import { ProductsList, ProductEdit, ProductAdd } from "../product";
import styles from "./dashboard.module.scss";

const routeConfig = [
    {
        key: 0,
        path: "/admin/users/",
        linkText: "Users Management"
    },

    {
        key: 1,
        path: "/admin/orders/",
        linkText: "Orders Management",
    },

    {
        key: 2,
        path: "/admin/products/",
        linkText: "Products Summary",
    }
]

export default function Dashboard() {

    return (
        <section className={styles["view-container"]}>
            <div className={styles["flex-container"]}>
                <Router>
                    <Sidebar routeConfig={routeConfig} />

                    <Switch>
                        <Route path="/admin/users" exact>
                            <UsersList />
                        </Route>

                        <Route path="/admin/users/edit/:id" exact>
                            <UserEdit />
                        </Route>

                        <Route path="/admin/orders" exact>
                            <OrdersList />
                        </Route>

                        <Route path="/admin/orders/edit/:id" exact>
                            <OrderEdit />
                        </Route>

                        <Route path="/admin/products" exact >
                            <ProductsList />
                        </Route>

                        <Route path="/admin/products/add" exact >
                            <ProductAdd />
                        </Route>

                        <Route path="/admin/products/edit/:id" exact>
                            <ProductEdit />
                        </Route>

                        <Route path="/admin" >
                            <UsersList />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </section>
    )
}