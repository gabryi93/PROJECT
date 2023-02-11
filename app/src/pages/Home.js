import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import getCoords from '../logic/getCoords'
import Header from '../components/Header'
import { useContext } from 'react'
import Context from '../components/Context'
import Maps from '../components/Maps'
import NavBar from '../components/NavBar'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Home() {
    
    log.info('Home -> render')

    const [user, setUser] = useState()
    const [addressToSearch, setAddressToSearch] = useState(null)
    const { showAlert,logout } = useContext(Context)
    const [ infoDestination,setInfoDestination ] = useState(null)

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
            setInfoDestination(userAddress)
        });
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

    <div className="row">
        <div className="col-12 mt-5" >
        {infoDestination == null ? 'Sin datos de destino ...' : 
        
        <section>
            Longitud destino : {infoDestination.longitude}
            Latitud destino : {infoDestination.latitude}
            Provincia : {infoDestination.locality}
            <hr></hr>
            Mi latitud: {localStorage.getItem('latitude')}
            Mi longitud: {localStorage.getItem('longitude')}
            <iframe title="ee" src={infoDestination.map_url}></iframe>
        </section>
        }
            <Maps/>
        </div>
    </div>
            
    </center>
}

export default Home


//Prueba de Home

