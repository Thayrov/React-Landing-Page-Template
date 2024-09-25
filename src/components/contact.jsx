import React from "react";
import { MapCab } from "./MapCab";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contacto</h2>
                <p>
                  Aquí te damos toda la información para que puedas contactarnos. Abajo verás un mapa interactivo con la ubicación de nuestra floristería. 🌸 Somos una empresa atendida por sus dueños y estaremos felices de ayudarte si tienes problemas para encontrarnos. 😊
                </p>
                {/* Reemplazamos el formulario por el mapa */}
                <div className="map-cab">
                  <MapCab />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Info. de contacto</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Dirección:
                </span>
                {props.data ? props.data.address : "Leyendo información ..."}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-whatsapp"></i> Llámanos o escríbenos a:
                </span>
                {/*{props.data ? props.data.phone : "Leyendo información ..."}*/}
              </p>
              <ul>
                <li>
                  <a href={props.data ? props.data.whatsapp1 : "/"} target="_blank" rel="noopener noreferrer">
                    {props.data ? props.data.phone1 : "Número no disponible"} 
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.whatsapp2 : "/"} target="_blank" rel="noopener noreferrer">
                    {props.data ? props.data.phone2 : "Número no disponible"} 
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* Redes sociales */}
            <div className="social">
              <h3>Redes Sociales</h3>
              <p>
                <span>
                  <i className="fa fa-users"></i>¡Estamos solo en Facebook!
                </span>
                {props.data ? props.data.rrss : "Leyendo información ..."}
              </p>
              <ul>
                <li>
                  <a href={props.data ? props.data.facebook : "/"} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook">acebook</i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? false : "/"}>
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2024 Floristería Cabaña de las Flores.</p>
        </div>
      </div>
    </div>
  );
};
