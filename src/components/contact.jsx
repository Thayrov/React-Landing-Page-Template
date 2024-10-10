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
              <ul className="monospace">
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
                  <i className="fa fa-users"></i> ¡Estamos solo en Facebook!
                </span>
                {props.data ? props.data.rrss : "Leyendo información ..."}
              </p>
              <a className="facebook-link" href={props.data ? props.data.facebook : "/"} target="_blank" rel="noopener noreferrer">
                <div className="icon-container">
                  <i className="fa fa-facebook"></i>
                  <span className="icon-text">Facebook</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>Floristería Cabaña de las Flores.</p>
          <p className="recognition-text">
            Sitio web desarrollado por
            <a href="https://porfolio-rigoberto.vercel.app/" target="_blank" rel="noopener noreferrer"> Rigoberto </a>
            y
            <a href="https://www.thayrov.com/" target="_blank" rel="noopener noreferrer"> Thayrov</a>,
            usando la plantilla del equipo de <a href="https://github.com/issaafalkattan/React-Landing-Page-Template/graphs/contributors" target="_blank" rel="noopener noreferrer">Issaaf Kattan</a>. [MIT License]
          </p>
        </div>
      </div>
    </div>
  );
};