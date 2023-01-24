import React from "react";

function CardArticle (props) {

    return (
        <div>
            <h1>Pizza {props.name}</h1>
            <h2> {props.price} €</h2>
        </div>
    )
}
export default CardArticle