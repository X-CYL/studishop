import React from "react";


const TestComponent = (props) => {
  return (
    <div>
      <h5>Voici votre compte avec une variable let : { props.point }</h5>
      <button onClick={props.functionClick}>Appuyez Ici</button>
    </div>
  );
};

export default TestComponent;
