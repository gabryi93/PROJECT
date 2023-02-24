import log from "../utils/coolog";
import { useEffect, useState, rad } from "react";
import retrieveUser from "../logic/retrieveUser";
import getCoords from "../logic/getCoords";
import { useContext } from "react";
import Context from "../components/Context";
import Maps from "../components/Maps";
import LoaderGif from "../components/loaderGif";
import { errors } from "com";
import logoUber from "../assets/Uber.jpg"; // Tell webpack this JS file uses this image
import logoCabify from "../assets/cabify.png"; // Tell webpack this JS file uses this image
import logoBolt from "../assets/bolt.png"; // Tell webpack this JS file uses this image

const { FormatError, AuthError, LengthError, NotFoundError } = errors;

function Home() {
  const arrayEmp = [
    {
      name: "Uber",
      info: "Uber Technologies, Inc. conocida simplemente como Uber es una empresa estadounidense proveedora de movilidad como un servicio. ",
      img : logoUber,
      price: "2.05",
      color: "dark",
    },
    {
      name: "Cabify",
      info: "Cabify es una empresa española de red de transporte a través de su aplicación móvil para teléfonos inteligentes. Los vehículos son conducidos por proveedores de servicios autónomos. ",
      img: logoCabify,
      price: "2.18",
      color: "purple",
    },
    {
      name: "Bolt",
      info: "Bolt, anteriormente Taxify,1 es una compañía tecnológica proveedora de servicios de movilidad fundada y radicada en Tallin, Estonia. La empresa desarrolla y opera la aplicación móvil Bolt, que permite a sus clientes solicitar un taxi o un conductor privado, alquilar patinetes eléctricos, bicicletas eléctricas o automóviles, pedir comida a domicilio o hacer la compra desde su teléfono. ",
      img: logoBolt,
      price: "2.02",
      color: "green",
    },
  ];

  log.info("Home -> render");

  const [setUser] = useState();
  const [addressToSearch, setAddressToSearch] = useState(null);
  const { showAlert } = useContext(Context);
  const [infoDestination, setInfoDestination] = useState(null);
  const [distance, setDistance] = useState(0);
  let latitud = localStorage.getItem("latitude");
  let longitud = localStorage.getItem("longitude");

  useEffect(() => {
   
    try {
      retrieveUser(sessionStorage.token)
        .then((user) => setUser(user))
        .catch((error) => {
          if (
            error instanceof TypeError ||
            error instanceof FormatError ||
            error instanceof LengthError
          )
            showAlert(error.message, "warn");
          else if (error instanceof AuthError || error instanceof NotFoundError)
            showAlert(error.message, "error");
          else showAlert(error.message, "fatal");
        });
    } catch (error) {
      if (error instanceof TypeError ||  error instanceof FormatError || error instanceof LengthError)
        showAlert(error.message, "warn");
      else showAlert(error.message, "fatal");
    }
  });


  function getPosition() {
    getCoords("GET", addressToSearch, function (err, info) {
      if (err) {
        throw err;
      }

      let objectAdrress = JSON.parse(info);
      let userAddress = objectAdrress["data"][0];
      //calculamos distancia entre origen y destino

      setInfoDestination(userAddress);
      setDistance(
        getKilometros(
          latitud,
          longitud,
          infoDestination.latitude,
          infoDestination.longitude
        )
      );
    });
  }

  function getKilometros(lat1, lon1, lat2, lon2) {
    rad = function (x) {
      return (x * Math.PI) / 180;
    };
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad(lat2 - lat1);
    console.log(dLat, "dLat");
    var dLong = rad(lon2 - lon1);
    console.log(dLong, "dLong");
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(lat1)) *
        Math.cos(rad(lat2)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    d = Math.round(d);

    return d;
  }

  return (
    <center>
    <div className="container mt-5 mb-5">
      <div className="row flex justify-center">
        <div className="col-lg-10  form">
          <i className="fa fa-search"></i>
          <input
            type="text"
            className="form-control form-input"
            onChange={(e) => setAddressToSearch(e.target.value)}
            placeholder="Calle Inventada 7 , Madrid ..."
          />
        </div>

        <div className="col-lg-1  ">
          <button className="btn btn-info" onClick={getPosition}>
            Buscar
          </button>
        </div>
      </div>
    </div>
    <div className="container mb-10">
        <div className="row flex justify-center">
          <div className="col-lg-6 col-xs-12 col-sm-12">
            <center>
                <p style={{'fontSize':'20px'}}>Ubicación actual: </p>
                <Maps />
            </center>
            
          </div>
          <div className="col-lg-6 col-xs-12 col-sm-12">
            {infoDestination == null ? (
              <LoaderGif />
            ) : (
              <section>                
                <p style={{'fontSize':'20px'}}>Destino: {addressToSearch}</p>
                <iframe title="ee" src={infoDestination.map_url}></iframe>
              </section>
            )}
          </div>
        </div>
    </div>
      <div className="container">
        <div className="row mt-20">
            {infoDestination == null && distance === 0
            ? ""
            : arrayEmp.map((emp) => (
                <div className="mt-10 col-lg-4 col-sm-4 col-xs-4">
                    <img
                    className="img-cards"
                    src={emp.img}
                    alt={emp.name}
                    />
                    <div className="card-body">
                    <button  className="btn btn-primary mt-4">
                        {(distance * parseFloat(emp.price)).toFixed(2)} €
                    </button>
                    </div>
                </div>
                ))}
        </div>
      </div>
    </center>
  );
}

export default Home;

