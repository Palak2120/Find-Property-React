import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async(url) => {
    try {
        const {data} = await axios.get((url),{
            headers: {
                'X-RapidAPI-Key': 'c981ccae00msh374e30c11e9998dp10aa46jsn75d14493cfac',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
              }
        })
        console.log(data.hits);
        return data;
    }
    catch(error) {
        console.log("error in fetching : " , error);
    }
}

