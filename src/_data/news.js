const axios = require('axios');
require('dotenv').config();


const API_KEY=process.env.API_KEY;

const URL=`http://newsapi.org/v2/top-headlines?country=mx&apiKey=${API_KEY}&pageSize=5`;

 module.exports = async function (){
    try{
        const response = await axios.get(URL);
        console.log(response.data);
        return response.data;

    } catch (error){
        console.error(error);
    }
}
