import React from 'react';

function Pizza(props){
    return(
        <div>
            <h3>{props.categorie} { props.name }</h3>
            <img src = { props.photo } alt= { props.alt }/>
            <p> { props.description } </p>
            <p>Prix { props.price } €</p>
        </div>
    )
}

export default Pizza