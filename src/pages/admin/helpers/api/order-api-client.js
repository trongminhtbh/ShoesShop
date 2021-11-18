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

    static async remove(id) {
        alert("removed");
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
}