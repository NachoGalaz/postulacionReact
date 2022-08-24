import axios from 'axios';

const baseUrl = "https://finfasteastussoapapi.azurewebsites.net/api/test/getactivities"

const getActivities = async(PruebaTecnica)=>{
// que sea asincrona significa que trabaja en paralalelo mientras corre el resto
const res = await axios.get(baseUrl+PruebaTecnica);

console.log(res.data)//deberia traer el json
return res.data;
}

const baseUrl2 = "https://finfasteastussoapapi.azurewebsites.net/api/Test/GetSecurePrime"

const getSecurePrime = async(rut)=>{
    const res = await axios.post(baseUrl2+rut);
    return res.data;
}

//probando consumir la API, no fue posible


export {getActivities,getSecurePrime}