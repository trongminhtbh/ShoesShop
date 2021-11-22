import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { OrderApiClient, UserApiClient } from "../../helpers";

export function useOrderInfoFetch() {
    const [order, setOrder] = useState({});
    const [customer, setCustomer] = useState({});

    const { id } = useParams();

    useEffect(() => onMounted(), [])
    const onMounted = () => {
        (async () => {
            const orderFetched = await OrderApiClient.findOne(id);
            if (orderFetched) {
                setOrder(orderFetched);
            }
        })();
    }

    useEffect(() => onOrderFetched(), [order]);
    const onOrderFetched = () => {
        (async function () {
            if (order?.user_id){
                const customerFetched = await UserApiClient.findOne(order.user_id);
                if (customerFetched) {
                    setCustomer(customerFetched);
                }
            }
        })();
    }

    return [order, customer];
}