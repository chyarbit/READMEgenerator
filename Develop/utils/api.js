// require axios since we are going to call the gitHub API
const axios = require("axios");

const api = {
  getUser(username) {
    return axios
      .get(
        `https://api.github.com/users/${username}`
      )
      .catch(err => {
        console.log(`User not found`);
        console.log(err);
        process.exit(1);
      });
  }
};

module.exports = api;