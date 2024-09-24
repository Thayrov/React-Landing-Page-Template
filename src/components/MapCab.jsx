import React from "react"
import { Map, Marker } from "pigeon-maps"

/*
defaultCenter = [latitude, longitude]
anchor = [latitude, longitude] este es el mojón geográfico
*/
export const MapCab = () => {
  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Map>
  )
};