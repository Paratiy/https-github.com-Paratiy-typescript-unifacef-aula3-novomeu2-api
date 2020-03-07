import axios from 'axios';
import { executionAsyncId } from 'async_hooks';

const baseURL = "https://typescript-unifacef-aula3-novo.herokuapp.com/";

export const getFilms = async()=>{
    return axios.request({
        baseURL,
        url:'films'
    })
}

export const getFilmById = async(id:number)=>{
    return axios.request({
        baseURL,
        url: `films/${id}`
    })
}