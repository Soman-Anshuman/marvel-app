import axios from "axios";
import { generateHash, public_key } from "../assets/config";

export const fetchData = async (name, type) => {
    const timestamp = new Date().getTime();
    const hash = generateHash(timestamp);
    const term = (type === 'characters') ? 'name' : 'title';

    const url = `https://gateway.marvel.com:443/v1/public/${type}`;
    const params = {
        apikey: public_key,
        hash: hash,
        ts: timestamp,
        [`${term}StartsWith`]: name,
        limit: 50,
    }

    try {
        let response = await axios.get(url, { params });
        let arr = response?.data?.data.results;
        return arr;

    } catch (error) {
        console.log(error.message);
        // console.log(error.response.status);
        console.log(error.response?.data);
        return null;
    }
}