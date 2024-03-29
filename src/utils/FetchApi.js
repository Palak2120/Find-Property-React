import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    try {
        const { data } = await axios.get((url), {
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            }
        })
        return data;
    }
    catch (error) {
        console.log("error in fetching : ", error);
    }
}