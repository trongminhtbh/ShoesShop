export default class UserApiClient {
    static USER_BASE_URL = ""

    static findOne(id, callback) {
        fetch({
            method: "get",
            url: this.USER_BASE_URL
        })
            .then((response) => response.json())
            .then((response) => callback(response))
            .catch((error) => {
                console.log(error);
            });
    }

    static findAll(callback) {
        fetch({
            method: "get",
            url: this.USER_BASE_URL
        })
            .then((response) => response.json())
            .then((response) => callback(response))
            .catch((error) => {
                console.log(error);
            });
    }

    static remove(id) {

    }

    static update(id) {

    }

    static create() {

    }
}