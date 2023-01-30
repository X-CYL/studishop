
import React from "react";
import Pizza from "../micro/Pizza";



function ListPizzas(props){ 
      let formatedPiz = props.elements.map((cat) => (
        <Pizza
        categorie={cat.category}
        name={cat.name}
        photo={cat.photo}
        alt={cat.alt}
        description={cat.description}
        price={ cat.price } 
      />
      ));
      
      return <div>{ formatedPiz }</div>;
   } 

export default ListPizzas