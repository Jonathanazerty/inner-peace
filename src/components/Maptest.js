import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

function Maptest(props) {

    mapboxgl.accessToken = 'pk.eyJ1IjoiaG94eXJ1amkiLCJhIjoiY2t2YjJjMHJxMDhyajJwbHFzaXBjb2h2cCJ9.dVLGcxaPEVA0zptC3Nu9WA';

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });


    return (
        <>
            <div ref={mapContainer} className="map-container" />
        </>
    );
}

export default Maptest;