import { MapContainer, TileLayer,Marker,Popup} from "react-leaflet";
import { useState ,useEffect} from "react";
import 'leaflet/dist/leaflet.css'




export default function  Maps ({lati})  {

  const [long,setLongitude] = useState(null);
  const [lat,setLatitude] = useState(null);

  const location = window.navigator && window.navigator.geolocation
   
    if (location) {
      location.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)

        //guardo en localstorage mi latitud y longiutud
        localStorage.setItem('latitude',position.coords.latitude)
        localStorage.setItem('longitude',position.coords.longitude)
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }

    const L = require('leaflet');


    const myIcon = L.icon({
      iconUrl: require('../assets/marker.png'),
      iconSize: [40,45],
      iconAnchor: [32, 64],
      popupAnchor: null,
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null
  });
    // function forceCoords(){
    //   setLatitude('43.3602900')
    //   setLongitude('-5.8447600')
    //   console.log(lat)
    //   console.log(long)

    // }
  
    

  return (
    <>
      
      {lat  == null && long == null ? <h1>Sin datos de tus coordenadas ... permita el uso de ellas</h1> : 
      <div className="map__container">
           <MapContainer
              center={[lat,long]}
              zoom={13}
              style={{width: '100%', height: 600}}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

        <Marker position={[lat,long]} icon={myIcon}>
              <Popup >
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            </MapContainer>
       
        </div>
      
      }
    </>
  );

 
};
  
    
 
  // );


 
