export default class OrderApiClient {
    static BASE_URL = "https://pacific-ridge-30189.herokuapp.com";

    static async findOne(id) {
        const path = "customer";
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

    static remove(id) {

    }

    static update(id) {

    }

    static create() {

    }
}