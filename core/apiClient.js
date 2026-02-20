import fetch from "node-fetch";

export async function callAdminAPI({ url, method = "POST", token, body, contentType = "text/yaml" }) {
    return fetch(url, {
        method,
        headers: {
            "Content-Type": contentType,
            "x-auth-token": token
        },
        body
    });
}
