import axios from "axios";

const instance = axios.create({

    baseURL: "https://www.bungie.net/Platform",
});

export default instance