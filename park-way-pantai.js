const axios = require("axios");
require("dotenv").config();

axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.TOKEN,
};

async function getAllUserList() {
    try {
        const api = await axios.get(
            process.env.URL + "/d2l/api/lp/1.19/users/"
        );
        const { data } = api;
        console.log(data);
    } catch (err) {
        const {
            response: { data },
        } = err;

        console.log(data);
    }
}

async function getUserById(user_id) {
    try {
        const api = await axios.get(
            process.env.URL + "/d2l/api/lp/1.23/users/" + user_id
        );
        const { data } = api;
        console.log(data);
    } catch (err) {
        const {
            response: { data },
        } = err;

        console.log(data);
    }
}

module.exports = {
    allUserList: getAllUserList,
    userById: getUserById,
};
