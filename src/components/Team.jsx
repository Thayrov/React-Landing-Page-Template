import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Nuestro Equipo</h2>
          <h3>
          Pasión y Experiencia en Cada Arreglo.
          </h3>
          <br />
          <p>
            Ana y José, fundadores y apasionados por el arte floral, llevan más de 15 años transformando momentos especiales en recuerdos inolvidables con cada diseño floral. Su atención personalizada y su amor por cada detalle es lo que los distingue.
            </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
