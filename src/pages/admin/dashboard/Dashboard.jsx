import React from "react";
import { Sidebar } from "../../../components/sidebar";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { UsersList, UserEdit } from "../user";
import { OrdersList, OrderEdit } from "../order";
import { ProductsList, ProductEdit, ProductAdd } from "../product";
import { DiscountAdd, DiscountEdit, DiscountList } from "../discount";
import { ServiceList, ServiceDetail } from "../service-schedule";
import styles from "./dashboard.module.scss";


const routeConfig = [
    {
        key: 0,
        path: "/admin/users/",
        linkText: "User Management"
    },

    {
        key: 1,
        path: "/admin/orders/",
        linkText: "Order Management",
    },

    {
        key: 2,
        path: "/admin/products/",
        linkText: "Product Management",
    },

    {
        key: 3,
        path: "/admin/discounts/",
        linkText: "Discount Management"
    },

    {
        key: 4,
        path: "/admin/schedules",
        linkText: "Schedule Management"
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

                        <Route path="/admin/schedules" exact>
                            <ServiceList />
                        </Route>

                        <Route path="/admin/schedules/:id" >
                            <ServiceDetail />
                        </Route>

                        {/* <Redirect to="/admin/users" /> */}
                    </Switch>
                </Router>
            </div>
        </section>
    )
}