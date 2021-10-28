// import React from 'react';
// import './Maptest.css';
// import mapboxgl from '!mapbox-gl';
//
// function Maptest(props) {
//
//     mapboxgl.accessToken = 'pk.eyJ1IjoiaG94eXJ1amkiLCJhIjoiY2t2OWF6cnc4NXRqMTJ1czd6cjk4bHI5bCJ9.DLeK3rldWvDavu68EomwsQ';
//     const map = new mapboxgl.Map({
//         container: 'map', // container ID
//         style: 'mapbox://styles/mapbox/streets-v11', // style URL
//         center: [-74.5, 40], // starting position [lng, lat]
//         zoom: 9 // starting zoom
//     });
//     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=d558391af4161e2ee2e747ad0ce49859&units=metric`)
//         .then(
//             response => response.json())
//
//     return (
//         <>
//             <div id='map' style='width: 400px; height: 300px;'> </div>
//         </>
//     );
// }
//
// export default Maptest;
//
//
