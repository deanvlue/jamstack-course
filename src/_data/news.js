const axios = require('axios');
require('dotenv').config();


const NEWS_API_KEY=process.env.NEWS_API_KEY;

const URL=`http://newsapi.org/v2/top-headlines?country=mx&apiKey=${NEWS_API_KEY}&pageSize=5`;

 module.exports = async function (){
    try{
        const response = await axios.get(URL);
        //console.log(response.data);
        return response.data;

    } catch (error){
        console.error(error);
    }
}
