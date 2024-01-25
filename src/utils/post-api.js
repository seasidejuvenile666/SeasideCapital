// import fetch from 'node-fetch';
const fetch = require('node-fetch')

const url = "";
const payload = [];

const headers = new Headers({

});

const requestOptions = {
  method: "POST",
  headers: headers,
  body: JSON.stringify(payload),
};

fetch(url, requestOptions)
  .then(response => {
    console.log("Status Code:", response.status);
    return response.text();
  })
  .then(data => {
    console.log("Response Data:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });