import React from "react";
import { Sidebar } from "../../../components/sidebar";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { UsersList, UserEdit } from "../user";
import { OrdersList, OrderEdit } from "../order";
import { ProductsList, ProductEdit, ProductAdd } from "../product";
import styles from "./dashboard.module.scss";
import { DiscountAdd, DiscountEdit, DiscountList } from "../discount";

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
        linkText: "Products Management",
    },

    {
        key: 3,
        path: "/admin/discounts/",
        linkText: "Discounts Management"
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

                        <Route path="/admin/discounts/" exact>
                            <DiscountList />
                        </Route>

                        <Route path="/admin/discounts/edit/:id" exact>
                            <DiscountEdit />
                        </Route>

                        <Route path="/admin/discounts/add" exact>
                            <DiscountAdd />
                        </Route>
                        
                        <Redirect to="/admin/users" />
                    </Switch>
                </Router>
            </div>
        </section>
    )
}