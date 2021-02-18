import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    //APi request
    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san diego'
                }
            }).catch(error => console.log('error=', error));

            setResult(response.data.businesses);
        } catch (err) {
            console.log('err=', err);
            setErrorMessage('Something went wrong');
        }
    }
    useEffect(() => {
        searchAPI('sushi')

    }, [])
    return [searchAPI, result, errorMessage]
};