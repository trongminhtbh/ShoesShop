export default class UserApiClient {
    static BASE_URL = "https://pacific-ridge-30189.herokuapp.com";

    static async findOne(id, callback) {
        const path = "customer";
        const queryString = `?id=${id}`;
        const response = await fetch(`${this.BASE_URL}/${path}/${queryString}`)
            .then((response) => response.json())
            .catch((error) => console.log(error));

        return response;
    }

    static async findAll() {
        const path = "user/list/";
        const response = await fetch(`${this.BASE_URL}/${path}`)
            .then((response) => response.json())
            .catch(error => { console.log(error) });

        console.log(response);
        return response;
    }

    static remove(id) {

    }

    static update(id) {

    }

    static create() {

    }
}