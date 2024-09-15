import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Noticia = ({noticia}) => {
  return (
    <>
      <Card className="col-12 col-md-3 mb-4">
      <Card.Img 
        variant="top" 
        src={noticia.image_url || "https://via.placeholder.com/150"} // Si no hay imagen, usa una de placeholder
        alt={noticia.title}
      />
      <Card.Body>
        <Card.Title>{noticia.title || "Sin título"}</Card.Title>
        <Card.Text>
          {noticia.description || "No hay descripción disponible para esta noticia."}
        </Card.Text>
        <Button variant="primary" href={noticia.link} target="_blank">
          Ver noticia completa
        </Button>
      </Card.Body>
    </Card>
    </>
  );
};

export default Noticia;
