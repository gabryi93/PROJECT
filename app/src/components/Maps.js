import { MapContainer, TileLayer,Marker,Popup} from "react-leaflet";
import { useState ,useEffect} from "react";
import 'leaflet/dist/leaflet.css'




export default function  Maps ()  {

  const [long,setLongitude] = useState(null);
  const [lat,setLatitude] = useState(null);

  
  
  function getCoords () {
    
    const location = window.navigator && window.navigator.geolocation
      
    if (location) {
      location.getCurrentPosition((position) => {
       
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        // })
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }
  }

  useEffect(() => {
    getCoords ()
  }, [long])

  useEffect(() => {
    getCoords ()
  }, [lat])
    

  {lat == null && long == null ? <h1>Cargando mapa ...</h1> : <h1>Mapa cargado</h1>}

};
  
    
  //   <div className="map__container">
  //    <MapContainer
  //       center={[40.4030398,-3.694051]}
  //       zoom={13}
  //       style={{width: '100%', height: 600}}
  //     >
  //       <TileLayer
  //         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       />
  //     </MapContainer>
    
  // </div>
  // );


 
