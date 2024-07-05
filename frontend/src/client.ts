// Conexao com o backend

import axios from "axios";

import {ProjectCardProps} from './types'

let baseURL = "http://localhost:5000";


const getAllProjects = async () =>{
    try{
        const response = await axios.get(`${baseURL}/api/project`)
        return response.data
    } catch(error){
        console.log(error)
        return null;
    }
}