import md5 from "js-md5";

const private_key = import.meta.env.VITE_PRIVATE_KEY;
const public_key = import.meta.env.VITE_PUBLIC_KEY;

const generateHash = (timestamp) => {
  return md5(timestamp + private_key + public_key);
};

async function promiseResult(name, type) {
  const timestamp = new Date().getTime();
  const hash = generateHash(timestamp);
  const term = type === "characters" ? "name" : "title";
  const url = `https://gateway.marvel.com:443/v1/public/${type}?apikey=${public_key}&hash=${hash}&ts=${timestamp}&${term}StartsWith=${name}&limit=50`;

  try {
    let response = await fetch(url);
    let jsonObj = await response.json();
    let arr = jsonObj?.data?.results;
    // console.log(arr)
    return arr;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default promiseResult;
