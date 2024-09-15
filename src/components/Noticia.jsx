import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Noticia = ({noticia}) => {
  return (
    <>
     <Card className="d-flex col-12 col-md-3 mb-4">
  <Card.Img 
    variant="top" 
    src={noticia.image_url || "https://images.pexels.com/photos/4947408/pexels-photo-4947408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
    alt={noticia.title}
  />
  <Card.Body className="d-flex flex-column">
    <Card.Title>{noticia.title || "Sin título"}</Card.Title>
    <Card.Text>
      {noticia.description || "No hay descripción disponible para esta noticia."}
    </Card.Text>
    <Button variant="secondary" className="mt-auto" href={noticia.link} target="_blank">
      Ver noticia completa
    </Button>
  </Card.Body>
</Card>
    </>
  );
};

export default Noticia;
