import React from "react"
import { Map, Marker } from "pigeon-maps"

/*
defaultCenter = [latitude, longitude]
anchor = [latitude, longitude] este es el mojón geográfico
*/
export const MapCab = () => {
  return (
    <Map height={300} defaultCenter={[19.584721, -101.631008]} defaultZoom={16}>
      <Marker width={50} anchor={[19.584721, -101.631008]} />
    </Map>
  )
};