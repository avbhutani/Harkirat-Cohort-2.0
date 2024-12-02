const { default: axios } = require("axios");

async function fetchJokes() {
    const response = await axios.get('https://api.freeapi.app/api/v1/public/randomjokes')
    console.log(response.data.data.data[0]);
}

fetchJokes()