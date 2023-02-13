import log from '../utils/coolog'
import { useEffect, useState,rad } from 'react'
import retrieveUser from '../logic/retrieveUser'
import getCoords from '../logic/getCoords'
import Header from '../components/Header'
import { useContext } from 'react'
import Context from '../components/Context'
import Maps from '../components/Maps'
import NavBar from '../components/NavBar'
import LoaderGif from '../components/loaderGif'
import { errors } from 'com'
import data from '../data/prices'

const { FormatError, AuthError, LengthError, NotFoundError } = errors


function Home() {


    const arrayEmp= [
        {   'name':'Uber',
            'info':'Uber Technologies, Inc. conocida simplemente como Uber es una empresa estadounidense proveedora de movilidad como un servicio. ',
            'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/320px-Uber_logo_2018.svg.png',
            'price' : '0.5',
            'color': 'dark'
        },
        {   'name' : 'Cabify',
            'info':'Cabify es una empresa española de red de transporte a través de su aplicación móvil para teléfonos inteligentes. Los vehículos son conducidos por proveedores de servicios autónomos. ',
            'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Cabify-Logo-Moradul-RGB.png/300px-Cabify-Logo-Moradul-RGB.png',
            'price' :'0.45',
            'color':'purple'
        },
        {   'name':'Volt',
            'info':'Bolt, anteriormente Taxify,1​ es una compañía tecnológica proveedora de servicios de movilidad fundada y radicada en Tallin, Estonia. La empresa desarrolla y opera la aplicación móvil Bolt, que permite a sus clientes solicitar un taxi o un conductor privado, alquilar patinetes eléctricos, bicicletas eléctricas o automóviles, pedir comida a domicilio o hacer la compra desde su teléfono. ',
            'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bolt_logo.png/320px-Bolt_logo.png',
            'price' : '0.60',
            'color':'green'
        }

    ];
    
    log.info('Home -> render')

   

    const [user, setUser] = useState()
    const [addressToSearch, setAddressToSearch] = useState(null)
    const { showAlert,logout } = useContext(Context)
    const [ infoDestination,setInfoDestination ] = useState(null)
    const [ distance,setDistance ] = useState(0)

    let latitud = localStorage.getItem('latitude');
    let longitud = localStorage.getItem('longitude');

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setUser(user))
                .catch(error => {
                    if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                        showAlert(error.message, 'warn')
                    else if (error instanceof AuthError || error instanceof NotFoundError)
                        showAlert(error.message, 'error')
                    else
                        showAlert(error.message, 'fatal')
                })
        } catch (error) {
            if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                showAlert(error.message, 'warn')
            else
                showAlert(error.message, 'fatal')
        }
    }, [])

    function getPosition(){

        getCoords('GET', addressToSearch, function (err, info) {
            if (err) { throw err; }
            
            let objectAdrress = JSON.parse(info)
            let userAddress = objectAdrress['data'][0];
            //calculamos distancia entre origen y destino
         
            setInfoDestination(userAddress)
            setDistance(getKilometros(latitud,longitud,infoDestination.latitude,infoDestination.longitude))

        
        
        });

       
    }

    function getKilometros (lat1,lon1,lat2,lon2)
    {
        rad = function(x) {return x*Math.PI/180;}
        var R = 6378.137; //Radio de la tierra en km
        var dLat = rad( lat2 - lat1 );
        console.log(dLat,'dLat')
        var dLong = rad( lon2 - lon1 );
        console.log(dLong,'dLong')
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        d = Math.round(d)

        return d;
    }


    return <center>
   

    <div className="row m-5">
        <div className="col-10  form">
            <i className="fa fa-search"></i>
            <input type="text" className="form-control form-input" onChange={(e) => setAddressToSearch(e.target.value)} placeholder="Calle Inventada 7 , Madrid ..."/>   
        </div>

        <div className="col-2  form">
        <button className='btn btn-info' onClick={getPosition}>Buscar</button>
        </div>
    </div>

    <div className='row'>
        <div className='col-5'>
        <h1>Ubicación actual: </h1>
            <Maps/>
        </div>
        <div className='col-5'>
            {infoDestination == null ? <LoaderGif /> : 
            
            <section>
                {/* Longitud destino : {infoDestination.longitude}
                Latitud destino : {infoDestination.latitude}
                Provincia : {infoDestination.locality}
                <hr></hr>
                Mi latitud: {localStorage.getItem('latitude')}
                Mi longitud: {localStorage.getItem('longitude')} */}
                <h1>Destino: {addressToSearch}</h1>
                <iframe title="ee" src={infoDestination.map_url}></iframe>
            </section>
            }
        </div>
    </div>
    <div className='row col-12 mt-2'>
        
             {
                infoDestination == null && distance == 0 ? '' :
                
                arrayEmp.map(emp =>
                   
                    <div className="card col-4" width="50%">
                        <img className="card-img-top" src={emp.img} alt="Card image cap" /> 
                        <div className="card-body">
                            <h5 className="card-title">{emp.name}</h5>
                           
                            <a  className="btn btn-primary">{distance* parseFloat(emp.price)} €</a>
                        </div>
                    </div>
                 
                 
                )
              
                } 
       
    </div>

    
            
    </center>
}

export default Home


//Prueba de Home

