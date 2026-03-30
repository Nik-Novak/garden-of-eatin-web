// api.ts
import axios from 'axios';


if(!process.env.AUTH_URL)
  throw Error("Must define EXPO_PUBLIC_FRONTEND_WEB for api access");

const baseURL = process.env.AUTH_URL + '/api/v2';

console.log('HERE', baseURL);

const api = axios.create({baseURL: baseURL});
export default api;