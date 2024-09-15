import React from 'react';
import Noticia from './Noticia';

const ListaNoticias = ({listadeNoticias}) => {
    return (
        <>
        <section className='container d-flex row justify-content-center align-content-center'>
            {
                listadeNoticias.map((card,indice)=> <Noticia key={indice} noticia={card}></Noticia> )
            }
        </section>
        </>
    );
};

export default ListaNoticias;