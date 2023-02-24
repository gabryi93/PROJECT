import log from '../utils/coolog'
import authenticateUser from '../logic/authenticateUser'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../components/Context'

function Login() {
    
    log.info('Login -> render')
    const { login} = useContext(Context)

    const handleLogin = event => {
        log.info('Login -> handleLogin')

        event.preventDefault()

        const { email: { value: email }, password: { value: password } } = event.target
        
        try {
            authenticateUser(email, password)
           
                 .then(token => login(token,email))
                
                .catch(error => {
                    })
        } catch (error)  {
        
            event.target.password.value = '' // TODO improve this, do not manipulate the dom directly, do it by means of React
        }
    }

    return <center className='test'>
            <div className="row" >

            
                <form onSubmit={handleLogin}>
                    <h1 class="h3 mb-3 fw-normal">Inicia sesión</h1>                   
                        <div class="form-floating">
                        <input type="email" name="email" class="form-control inputForm" id="floatingInput" placeholder="name@example.com" />
                        </div>
                        <div class="form-floating">
                        <input type="password" name="password" class="form-control inputForm" id="floatingPassword" placeholder="Contraseña ..."/>
                    </div>
                    <div class="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                        <button className="btn btn-info p-2 border rounded-xl hover:animate-spin"><b>Login</b></button>   
                </form>
                <Link to="/register" className="underline">Registro</Link>
                    
            </div>
        </center>
   

}

export default Login