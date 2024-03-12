import { Proxy } from "../Proxy";

export async function Translate(request) {
    return await Proxy("post",process.env.API_TRANSLATE_URL_5, request);
}
  