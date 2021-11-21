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

        return response;
    }

    static async remove(id) {
        const path = "customer";
        const query = `?id=${id}`;

        const response = await fetch(`${this.BASE_URL}/${path}/${query}`)
            .catch(error => console.log(error));

        return response;
    }

    static async update(id, user) {
        const path = "customer";
        const query = `?id=${id}`;
        const marshalled = JSON.stringify(user);

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

    static create() {

    }
}