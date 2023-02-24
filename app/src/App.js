import Login from './pages/Login'
import Home from './pages/Home'
// import Search from './pages/Search'
import SobreNosotros from './pages/SobreNosotros'
import UserProfile from './pages/UserProfile'
import log from './utils/coolog'
import Register from './pages/Register'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Context from './components/Context'
import Alert from './components/Alert'
import { ReactNotifications } from 'react-notifications-component'
import NavBar from './components/NavBar'
import Footer from "./components/Footer";

function App() {
 
  log.info('App -> render')


  //declaro las variables de estado que voy a usar en la app
  const [loggedIn, setLoggedIn] = useState(!!sessionStorage.token) //para saber si está logeado o no
  const [message, setMessage] = useState()
  const [level, setLevel] = useState()
  const [userEmail, setUserEmail] = useState()
  const navigate = useNavigate()



  const login = (token,email) => {
    
   
    sessionStorage.token = token
     
    setLoggedIn(true)
    console.log(email)

    //actualizo el email del usuario
    if(email != null){
      setUserEmail(email)
      
    }

    navigate('/')
  }

  const logout = () => {
    delete sessionStorage.token

    setLoggedIn(false)
   
  }

  const showAlert = (message, level) => {
    setMessage(message)
    setLevel(level)
  }


  //no recice parametros y lo unico que hace es vaciar el mensaje
  const closeAlert = () => setMessage()

  return <Context.Provider value={{ login, logout, showAlert, }}>
    <ReactNotifications />

    {/* si el login es true */}
    {loggedIn ? 
    <>
      <NavBar />
      <body>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
          <Route path="/userProfile" element={<UserProfile />} />
          {/* //toda la ruta que no tenga contemplada me lleva a la home */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </body>
      <Footer />
      
    </>
      :
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
        
      </Routes>}

      {message && <Alert message={message} level={level} onClose={closeAlert} />}
  </Context.Provider>
}

export default App;
