import { md5 } from "js-md5";

const private_key = import.meta.env.VITE_PRIVATE_KEY;
const public_key = import.meta.env.VITE_PUBLIC_KEY;

export function generateHash(timestamp) {
  return md5(timestamp + private_key + public_key);
}
