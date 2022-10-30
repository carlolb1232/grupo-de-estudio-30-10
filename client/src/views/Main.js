import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';

const Main = () => {

    const [travels, setTravels] = useState();

    const getTravels = async() =>{
        const response = await simpleGet('http://localhost:8080/api/travels');
        console.log(response.data.Travels);
        setTravels(response.data.Travels);
    }
    
    useEffect(() => {
        getTravels();
    }, []);

    return (
        <div>
            <h2>Viajes</h2>
            <ul>
            {travels?.map((travel)=> <li key={travel._id}><Link to={`/${travel._id}`}>{travel.packageName}</Link></li>)}
            </ul>
        </div>
    );
}

export default Main;
