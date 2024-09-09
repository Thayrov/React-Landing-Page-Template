import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Lo que Ofrecemos</h2>
          <p>
          Delicadeza, color y vida en cada diseño floral. 🌷
          </p>
        </div>
        {/*
        La clase row de bootstrap tiene problemas en un tamaño muy especifico de pantalla
        en este tamaño renderiza 3 col en la 1ra fil 1 col en la 2da fil y 2 col en la 3ra
          es mejor esperar a desplegar el producto final para hacer una mejor evaluación
        */}
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
