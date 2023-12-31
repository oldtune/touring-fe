import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import "./interactive-map.css";
export const InteractiveMap = () => {
  const [canCreateTour, setCanCreateTour] = useState(true);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicXVhY2thYmxlcXVhY2txdWFjayIsImEiOiJjbHFxcnkweGoxNWdoMmttdzJwbG1iYWFyIn0.SKHFlUQtKMFhZrE4qHkVMQ";
    const map = new mapboxgl.Map({
      container: "map", // container ID
      projection: "globe",
      //nha Cun
      // center: [106.71162633060226, 20.8624044180728],
      //go HP
      center: [106.709302, 20.844379], // starting position [lng, lat]
      //paris
      // center: [2.294, 48.8598],
      zoom: 16.04, // starting zoom
      style: "mapbox://styles/quackablequackquack/clqpfzy2000vj01qv2j3f8bib",
      pitch: "6",
      antialias: false,
      optimizeForTerrain: false,
    });

    map.on("style.load", () => {
      map.setFog({
        color: "rgb(186, 210, 235)", // Lower atmosphere
        "high-color": "rgb(36, 92, 223)", // Upper atmosphere
        "horizon-blend": 0.02, // Atmosphere thickness (default 0.2 at low zooms)
        "space-color": "rgb(11, 11, 25)", // Background color
        "star-intensity": 0.6, // Background star brightness (default 0.35 at low zoooms )
      });
    });
  }, []);

  const height = window.innerHeight;
  const width = window.innerWidth;

  return <div id="map" style={{ height: height, width: width }}></div>;
};
