import {React, useEffect, useState } from 'react';
import updateUser from '../logic/updateUser';

import {

    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';

  import getUserInfo from '../logic/getUserInfo'
  import Spinner from '../components/Spinner';
  import { ReactNotifications } from 'react-notifications-component'
  import 'react-notifications-component/dist/theme.css'
  import { Store } from 'react-notifications-component';
  import logoCheap from '../assets/CheapMoveLogo.png'; // Tell webpack this JS file uses this image


export default function UserProfile(){

  const [infoUser,setInfoUser] = useState(null);
  const [email,setEmail] = useState(null);
  const [phone,setPhone] = useState(null);
  const [address,setAddress] = useState(null);
  const [nameU,setNameU] = useState(null);
  const [idU,setId] = useState(null);

  const todoOk = () => {

    Store.addNotification({
        title: "Éxito!",
        message: "Información actualizada con éxito",
        type: "success",
        insert: "top",
        container: "top-right",
        animation : ["bounce_in"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });
}


    useEffect(() => {
      // hacemos petición al cargar la pagina servidor para obtener la información del usuario logead
      
      let email = localStorage.getItem('login_email')
      //con fetch funciona sin problemaa
              fetch('http://localhost:3001/users/info?email='+email).then(response => {
                return response.json();
              }).then(json => {
                setEmail(json.email)
                setPhone(json.phone)
                setAddress(json.address)
                setNameU(json.name)
                setId(json._id);

                setInfoUser(json);
                
              }).catch('error');
    
        
    },[])

    function saveForm(e){

      //para que el formulario no recargue la pagina , y encargarme yo de lo que quiero hacer ocn los datos
      e.preventDefault();

      const { name: { value: nameU }, id: { value: idU }, phone: { value: phone }, address : {value :address} } = e.target
     console.log(e.target)
      updateUser(idU, nameU,address,phone)
      .then(todoOk())
      .catch(error => {
      })
     
    }
      return (
        <>
          {infoUser  == null ? <Spinner /> :  
         
          <section>
            <MDBContainer className="user_information py-5">
              <MDBRow className="user_information-container py-5">
                <MDBCol lg="4" className="user_information-user">
                  <MDBCard className="mb-4">
                    <MDBCardBody className="text-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '150px' }}
                        fluid />
                        <br></br>
                        <br></br>
                      <div className="d-flex justify-content-center mb-2">             
                      </div>
                    </MDBCardBody>
                  </MDBCard>

                
                </MDBCol>
                <form onSubmit={saveForm}>
                  <MDBCol lg="8" className="user_information-info">
                    <MDBCard className="mb-4">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Nombre</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                          <input type="text" name="name" class="form-control" placeholder="Introduce nombre ..." value={nameU} onChange={(e) => setNameU(e.target.value)}></input>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Email</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <input type="email" name="email" class="form-control" disabled placeholder="Introduce Email ..." value={email} onChange={(e) => setEmail(e.target.value)}></input>                           
                          </MDBCol>
                        </MDBRow>
                        <hr />
                      
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Movil</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                          <input type="number" name="phone" placeholder="Introduce movil ..." class="form-control" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Dirección</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                          <input type="text" name="address" class="form-control" placeholder="Introduce dirección ..." value={address} onChange={(e) => setAddress(e.target.value)}></input>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow >

                         <MDBBtn  type="submit">
                              Actualizar información
                          </MDBBtn> 
                         
                            
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
                    <input type="hidden" value={idU} name="id"></input>
                    
                  </MDBCol>
                </form>
              </MDBRow>
            </MDBContainer>
          </section>
          }
          
        </>
      )

    
}