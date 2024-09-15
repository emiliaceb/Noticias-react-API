import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const [listadeNoticias, setListadeNoticias] = useState([]);

  // useEffect(() => {
  //   consultarAPI();
  // }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_535427b77eab9a4db1a45eb9147231d84169d&q=football"
      );
      const datos = await respuesta.json();
      console.log(respuesta);
      if(respuesta.status === 200){
        setListadeNoticias(datos.results);
      }
    } catch (error) {
      console.error("Error al consultar la API:", error);
    }
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3 d-flex justify-content-center">
          <Form.Label className="pe-5">Buscar por categoria</Form.Label>
          <Form.Select className="w-50">
            <option>Opciones</option>
            <option value="1">One</option>
            <optio value="2">Two</optio>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <ListaNoticias listadeNoticias={listadeNoticias}></ListaNoticias>
    </>
  );
};

export default Formulario;