// api.ts
import axios from 'axios';


if(!process.env.BETTER_AUTH_URL)
  throw Error("Must define BETTER_AUTH_URL for api access");

const baseURL = process.env.BETTER_AUTH_URL + '/api/v2';

console.log('HERE', baseURL);

const api = axios.create({baseURL: baseURL});
export default api;