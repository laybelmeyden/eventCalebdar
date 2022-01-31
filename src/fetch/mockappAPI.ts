import axios from "axios";
import { IUuser } from "../models/IUuser";

const BASE_API_URL = 'https://6102c79279ed680017482303.mockapi.io/users';


export const AuthAPI = {
    postLogin: () => {
        return axios.get<IUuser[]>(BASE_API_URL);
    }
}