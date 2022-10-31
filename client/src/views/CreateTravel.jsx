import React from 'react'
import { useNavigate } from 'react-router-dom';
import TravelForm from '../components/TravelForm'
import { simplePost } from '../services/simplePost';

export default function CreateTravel() {
  const navigate = useNavigate();
  const travel = {
    packageName: "",
    destination: "",
    origin: "",
    price: "",
    arrive_date: "",
  }

  const createTravel = async (values) => {
    console.log("Valores desde el formik", values);
    const newTravel = await simplePost(`http://localhost:8080/api/travels/new`, values);
    navigate("/")
    console.log("Nuevo viajecito", newTravel)
  }

  return (
    <div>
      <TravelForm travel={travel} onSubmitProp={createTravel}/>
    </div>
  )
}
