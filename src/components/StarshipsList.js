import { useState, useEffect } from 'react';
import axios from 'axios';
import { CLIENT_URL } from '../services/sw-api';
import Starship from '../components/Starship';

function StarShipsList () {

    const [starships, setStarships] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(CLIENT_URL);
                // console.log(response)
                const { results } = response.data;
                // console.log(results);
                setStarships(results);
            } catch (error) {
                console.log(error)
            }
        }
    fetchData();
    }, [])

//return statement below will display data!

    return(
        <ul className="container-boxes">
            {
                //if there is no data, return empty array
                (starships || []).map((starship, index) => {
                    // deconstruct to obtain name and url
                    const { name, url } = starship;
                    //using the Starship component
                    return <Starship name={name} url={url} key={index} />
                })
            }
            
        </ul>
    )
}

export default StarShipsList;