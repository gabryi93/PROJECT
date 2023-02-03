import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import Header from '../components/Header'
import { useContext } from 'react'
import Context from '../components/Context'
import Maps from '../components/Maps'
import NavBar from '../components/NavBar'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Home() {
    console.log(sessionStorage)
    log.info('Home -> render')

    const [user, setUser] = useState()
    const { showAlert,logout } = useContext(Context)

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


    console.log(user)
    // return  <div>
                
    //             {/* <Maps /> */}
    //         </div>
    return <center>

    <div className="row m-5">
        <div className="col-12  form">
            <i className="fa fa-search"></i>
            <input type="text" className="form-control form-input" placeholder="Buscar destino ..."/>   
        </div>
    </div>

    <div className="row">
        <div className="col-12 mt-5" >
            <Maps />
        </div>
    </div>
            
    </center>
}

export default Home


//Prueba de Home

