import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const [listadeNoticias, setListadeNoticias] = useState([]);
  const [categoria, setcategoria] = useState('');

  useEffect(() => {
      consultarAPI();
  }, []);

  useEffect(() => {
    if (categoria) {
      consultarAPI();
    }
  }, [categoria]);


  const consultarAPI = async () => {
    try {
      const url = categoria
        ? `https://newsdata.io/api/1/news?apikey=pub_535427b77eab9a4db1a45eb9147231d84169d&q=${categoria}&language=es`
        : `https://newsdata.io/api/1/news?apikey=pub_535427b77eab9a4db1a45eb9147231d84169d&country=us&language=es`; // Noticias en español

      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      if (respuesta.status === 200) {
        setListadeNoticias(datos.results);
      }
    } catch (error) {
      console.error("Error al consultar la API:", error);
    }
  };

  const manejadorCategoria = (e) => {
    setcategoria(e.target.value); 
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3 ">
          <Form.Label className="ms-5 me-3">Buscar por</Form.Label>
          <Form.Select className="w-25 btn btn-secondary dropdown-toggle"  onChange={manejadorCategoria}>
            <option>Categoria</option>
            <option value="business">Economia</option>
            <option value="sports">Deportes</option>
            <option value="politics">Sociedad</option>
            <option value="technology">Tecnologia</option>
            <option value="environmental">Medio Ambiente</option>
            <option value="security">Seguridad</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <section className="container d-flex justify-content-center">
      <ListaNoticias listadeNoticias={listadeNoticias}></ListaNoticias>
      </section>
    </>
  );
};

export default Formulario;