import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async(url) => {
    try {
        const {data} = await axios.get((url),{
            headers: {
                'X-RapidAPI-Key': ,
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