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
            <ul className='viajes-container'>
                {travels?.map((travel)=>
                <li className='list-container' key={travel._id}>
                    <Link className='link-container' to={`/${travel._id}`}>{travel.packageName}</Link>
                    <button className='btn btn-warning'>
                        <Link className='btn-color' to={`/update/${travel._id}`}>Actualizar</Link>
                    </button>
                    <button className='btn btn-danger' onClick={()=>deleteTravel(travel._id)}>Delete</button>
                </li>)}
            </ul>
        </div>
    );
}

export default Main;
