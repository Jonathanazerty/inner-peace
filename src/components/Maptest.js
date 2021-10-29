// import React, {useEffect, useRef, useState} from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import 'mapbox-gl/dist/mapbox-gl.css';
// import './Maptest.css'
//
// function Maptest(props) {
//
//     mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;
//
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(4.4699);
//     const [lat, setLat] = useState(50.5039);
//     const [zoom, setZoom] = useState(6);
//
//     useEffect(() => {
//         if (map.current) return; // initialize map only once
//         map.current = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: 'mapbox://styles/mapbox/streets-v11',
//             center: [lng, lat],
//             zoom: zoom
//         });
//     });
//
//
//     return (
//         <>
//             <div ref={mapContainer} className="map-container" />
//         </>
//     );
// }
//
// export default Maptest;