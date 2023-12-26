
import axios from "axios";
import { urlAPI } from "./config";


const httpAxios = axios.create({
    baseURL: urlAPI,
    timeout: 9000,
    headers:{'X-Custom-Header':'footer'}
});
export default httpAxios;