export default class ShoeApiClient {
    static BASE_URL = "https://pacific-ridge-30189.herokuapp.com";

    static async findOne(id) {
        const path = `shoes/id/${id}`;
        const response = await fetch(`${this.BASE_URL}/${path}`)
            .then((response) => response.json())
            .catch((error) => console.log(error));

        return response;
    }

    static async findAll() {
        const path = "shoes";
        const response = await fetch(`${this.BASE_URL}/${path}`)
            .then((response) => response.json())
            .catch((error) => console.log(error));

        return response;
    }

    static async remove(id) {
        const path = "shoes";
        const query = `?id=${id}`;
        const response = await fetch(`${this.BASE_URL}/${path}/${query}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
        .catch(error => console.log(error));

        return response;
    }

    static async update(id, shoe) {
        const path = "shoes";
        const query = `?id=${id}`;
        const response = await fetch(`${this.BASE_URL}/${path}/${query}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shoe)
        }).then(response => response.json())
            .catch(error => console.log(error));

        return response
    }

    static async create(shoe) {
        const path = "shoes";
        const response = await fetch(`${this.BASE_URL}/${path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shoe)
        }).then(response => response.json())
            .catch(error => console.log(error));

        return response;
    }

}