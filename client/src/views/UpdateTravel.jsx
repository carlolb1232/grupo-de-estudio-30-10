import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import TravelForm from '../components/TravelForm';
import { simpleGet } from '../services/simpleGet';
import { simpleUpdate } from '../services/simpleUpdate';

export default function UpdateTravel() {
  const { id } = useParams();
  const [travel, setTravel] = useState();
  const navigate = useNavigate();
  
  const getTravel = async () => {
    const travel = await simpleGet(`http://localhost:8080/api/travels/${id}`);
    console.log(travel.data.Travel)
    setTravel(travel.data.Travel)
  }

  useEffect(() => {
    getTravel();
  }, []);

  const updateTravel = async (editado) => {
    try {
      const travelEditado = await simpleUpdate(`http://localhost:8080/api/travels/update/${id}`, editado)
      navigate("/")
      console.log("Viaje editdaso", travelEditado)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>New Travel {id}
      {
        travel&&
        <TravelForm travel={travel} onSubmitProp={updateTravel}/>
      }
    </div>
  )
}
