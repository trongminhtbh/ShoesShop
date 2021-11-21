export default class OrderApiClient {
    static BASE_URL = "https://pacific-ridge-30189.herokuapp.com";

    static async findOne(id) {
        const path = "order/one";
        const queryString = `?id=${id}`;
        const response = await fetch(`${this.BASE_URL}/${path}/${queryString}`)
            .then((response) => response.json())
            .catch((error) => console.log(error));

        return response;
    }

    static async findAll() {
        const path = "order/list";
        const fetched = await fetch(`${this.BASE_URL}/${path}`)
            .then((response) => response.json())
            .catch((error) => console.log(error));
        ;

        return fetched;
    }


    static async cal_ship_fee(addr) {
        const url = `
            https://apistg.ahamove.com/v1/order/estimated_fee?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhaGEiLCJ0eXAiOiJ1c2VyIiwiY2lkIjoiODQ5MDg4NDIyODAiLCJzdGF0dXMiOiJPTkxJTkUiLCJlb2MiOiJ0ZXN0QGdt
YWlsLmNvbSIsIm5vYyI6IkRyaW5raWVzIFRlc3QgQWNjb3VudCIsImN0eSI6IlNHTiIsImFjY291bnRfc3RhdHVzIjoiQ
UNUSVZBVEVEIiwiZXhwIjoxNjM3MDYwNjIwLCJwYXJ0bmVyIjoidGVzdF9rZXkiLCJ0eXBlIjoiYXBpIn0.
0JcO9Pjag39247XB2hAjxivKyOjt2HeVQZgvwyh5tQ4&order_time=0&
path=
[{"address":"725 Hẻm số 7 Thành Thái, Phường 14, Quận 10, Hồ Chí Minh, Việt Nam"},
{"address":"`+ String(addr) + `"}]
&service_id=SGN-BIKE&requests=[]
`
        const response = await fetch(url)
            .then((response) => response.json())
            .catch((error) => console.log(error));

        return response;
    }


    static async update(id, order) {
        const path = "order";
        const query = `?id=${id}`;
        const marshalled = JSON.stringify(order);

        const response = await fetch(`${this.BASE_URL}/${path}/${query}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: marshalled
        }).then(response => response.json())
            .catch(error => console.log(error));

        return response
    }

    static async remove(id) {
        const path = "order";
        const query = `?id=${id}`;

        const response = await fetch(`${this.BASE_URL}/${path}/${query}`, {
            method: "DELETE"
        })

        return response;
    }
}


