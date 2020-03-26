const fs = require("fs");
const axios = require("axios");

const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;    
    axios.get(queryUrl).then(function(response) {
      var photo = response.data.avator_url;
      var email = response.data.email;
        return photo;
        return email;
  })
}};

module.exports = api;
