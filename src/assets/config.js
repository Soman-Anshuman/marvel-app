import { md5 } from "js-md5";

export const public_key = "01e7ef128369c5bcc5af069568155cef";
export const private_key = "eccf8e5c1bae76db14069e3576641751ebf9de5e";

export function generateHash(timestamp){
    return md5(timestamp + private_key + public_key);
}