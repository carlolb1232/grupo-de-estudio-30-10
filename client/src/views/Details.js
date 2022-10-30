import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';


const Details = () => {

    const {id} = useParams();

    const [travel, setTravel] = useState();

    const getTravel = async() =>{
        const response = await simpleGet('http://localhost:8080/api/travels/'+id);
        console.log(response.data.Travel);
        setTravel(response.data.Travel);
    }
    useEffect(() => {
        getTravel();
    }, []);

    return (
        <div>
            {travel && 
                ( <div>
                    <p>{travel.packageName}</p>
                    <p>{travel.destination}</p>
                    <p>{travel.origin}</p>
                    <p>{travel.price}</p>
                    <p>{travel.arrive_date}</p>
                </div>                
            )            
            }
            
        </div>
    );
}

export default Details;
