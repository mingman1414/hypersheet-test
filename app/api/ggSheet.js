import { Proxy } from "../Proxy";

export async function readGoogleSheet() {
    return await Proxy("get",process.env.SHEET_URL);
}

export async function createGoogleSheet(request) {
    return await Proxy("post",process.env.SHEET_URL, request);
}


export async function updateGoogleSheet(request) {
    return await Proxy("put",process.env.SHEET_URL+`/${request.id}`, request);
}

export async function deleteGoogleSheet(request) {
    return await Proxy("post",process.env.SHEET_URL+`/${request.id}`, request);
}
  