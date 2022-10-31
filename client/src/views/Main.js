import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { simpleDelete } from '../services/simpleDelete';
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

    const deleteTravel = async (id) => {
        const viajeBorrado = await simpleDelete(id);
        console.log("Viaje borradito", viajeBorrado);
        setTravels(travels.filter(travel=>travel._id !== id))
    }

    return (
        <div>
            <h2>Viajes</h2>
            <ul>
            {travels?.map((travel)=> <li key={travel._id}><Link to={`/${travel._id}`}>{travel.packageName}</Link><button><Link to={`/update/${travel._id}`}>Actualizar</Link></button><button onClick={()=>deleteTravel(travel._id)}>DELETE</button></li>)}
            </ul>
        </div>
    );
}

export default Main;
