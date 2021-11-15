import React from "react";
import { Sidebar } from "../../../components/sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UsersList, UserEdit } from "../user";
import { OrdersList, OrderEdit } from "../order";
import { ProductsList, ProductEdit, ProductAdd } from "../product";
import styles from "./dashboard.module.scss";

const routeConfig = [
    {
        key: 0,
        path: "/users",
        linkText: "Users Management"
    },

    {
        key: 1,
        path: "/orders",
        linkText: "Orders Management",
    },

    {
        key: 2,
        path: "/products",
        linkText: "Products Summary",
    }
]

export default function Dashboard() {
    return (
        <section>
            <div className={styles["flex-container"]}>
                <Router>
                    <Sidebar routeConfig={routeConfig} />

                    <Switch>
                        <Route path="/users" exact>
                            <UsersList />
                        </Route>

                        <Route path="/users/edit/:id" exact>
                            <UserEdit />
                        </Route>

                        <Route path="/orders" exact>
                            <OrdersList />
                        </Route>

                        <Route path="/orders/edit/:id" exact>
                            <OrderEdit />
                        </Route>

                        <Route path="/products" exact >
                            <ProductsList />
                        </Route>

                        <Route path="/products/add" exact >
                            <ProductAdd  />
                        </Route>

                        <Route path="/products/edit/:id" exact>
                            <ProductEdit /> 
                        </Route>
                    </Switch>
                </Router>
            </div>
        </section>
    )
}