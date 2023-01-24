import React from 'react';

function Pizza(props){
    return(
        <div>
            <h3>Pizza { props[0].name }</h3>
            <img src = { props[0].photo } alt= {props[0].alt }/>
            <p> { props[0].description } </p>
            <p>prix pour la petite { props[0].price_small } €</p>
            <p>prix pour la moyenne { props[0].price_medium } €</p>
            <p>prix pour la grande, les gourmands { props[0].price_large } €</p>
        </div>
    )
}

export default Pizza