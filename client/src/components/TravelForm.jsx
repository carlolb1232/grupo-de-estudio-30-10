import React from 'react';
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import moment from 'moment';


const TravelForm = (props) => {

  const { travel, onSubmitProp } = props;

  return (
    <div>
      <Formik
        initialValues={
          {
            packageName:travel.packageName,
            destination:travel.destination,
            origin:travel.origin,
            price:travel.price,
            arrive_date: moment(travel.arrive_date).format("yyyy-DD-MM")
          }
        }

        validationSchema={
          Yup.object().shape(
            {
              packageName: Yup
                .string()
                .min(3, "Debe ingresar el nombre del paquete")
                .max(20, "El nombre del paquete es muy largo ")
                .required("Debe ingresar el nombre del paquete"),
              destination: Yup
                .string()
                .min(3, "El nombre del destino debe tener 3 caracteres como mínimo")
                .max(20, "El nombre del destino es muy largo")
                .required("Debe ingresar el nombre del destiono"),
              origin: Yup
                .string()
                .min(3, "El nombre del origen debe tener 3 caracteres como mínimo")
                .max(20, "El nombre del origen es muy largo")
                .required("Debe ingresar el nombre del origen"),
              price: Yup
                .number()
                .min(1, "El precio debe ser al menos 1")
                .required("Debe ingresar un precio"),
              arrive_date: Yup
                .date()
                .required("Los paquetes deben tener fecha de llegada")
            }
          )
        }

        onSubmit={(values,{setSubmitting})=>{
          // console.log("INFO DEL FORMIK",values);
          onSubmitProp(values);
        }}
      >

      {({errors, touched, handleSubmit})=>{
        return(
          <div className='travel-form'>
            <h2>Formulario del formulario</h2>
            <Form>
              <div className="form-group">
                <label htmlFor="packageName">Nombre del paquete: </label>
                <Field
                  id="packageName"
                  type="text"
                  placeholder="Ingresa nombre del paquete"
                  name="packageName"
                  className="form-control"
                />
                {errors.packageName && touched.packageName && <p className='errorcito'> {errors.packageName} </p>}
              </div>
              <div className="form-group">
                <label htmlFor="destination">Nombre del destino: </label>
                <Field
                  id="destination"
                  type="text"
                  placeholder="Ingresa nombre del destino"
                  name="destination"
                  className="form-control"
                />
                {errors.destination && touched.destination && <p className='errorcito'> {errors.destination} </p>}
              </div>
              <div className="form-group">
                <label htmlFor="origin">Nombre del origen: </label>
                <Field
                  id="origin"
                  type="text"
                  placeholder="Ingresa nombre del paquete"
                  name="origin"
                  className="form-control"
                />
                {errors.origin && touched.origin && <p className='errorcito'> {errors.origin} </p>}
              </div>
              <div className="form-group">
                <label htmlFor="price">Precio: </label>
                <Field
                  id="price"
                  type="number"
                  placeholder="Ingresa el precio del paquete"
                  name="price"
                  className="form-control"
                />
                {errors.price && touched.price && <p className='errorcito'> {errors.price} </p>}
              </div>
              <div className="form-group">
                <label htmlFor="arrive_date">Fecha de salida: </label>
                <Field
                  id="arrive_date"
                  type="date"
                  placeholder="Ingresa la fecha"
                  name="arrive_date"
                  className="form-control"
                />
                {errors.arrive_date && touched.arrive_date && <p className='errorcito'> {errors.arrive_date} </p>}
              </div>
              <button className='mt-3 btn btn-primary btn-lg' type='submit' disabled={Object.values(errors).length>0}>ENVIAR</button>
            </Form>
          </div>
        )
      }}

      </Formik>
    </div>
  );
}

export default TravelForm;
