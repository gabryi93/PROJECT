export default function Footer() {
   
    return <footer className=" mt-10 text-center text-lg-start text-white">
    
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
     
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
        
      <div>
        <a  className="me-4 text-reset">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a  className="me-4 text-reset">
          <i className="fab fa-twitter"></i>
        </a>
        <a  className="me-4 text-reset">
          <i className="fab fa-google"></i>
        </a>
        <a  className="me-4 text-reset">
          <i className="fab fa-instagram"></i>
        </a>
        <a  className="me-4 text-reset">
          <i className="fab fa-linkedin"></i>
        </a>
        <a  className="me-4 text-reset">
          <i className="fab fa-github"></i>
        </a>
      </div>
      
    </section>
     
    <section className="">
      <div className="container text-center text-md-start mt-5">
        
        <div className="row mt-3">
          
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3"></i>Cheap Move
            </h6>
            <p>
              Creados para que pagues lo justo por lo que contratas, nosotros comparamos por ti.
            </p>
          </div>
                
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold mb-4">
              Products
            </h6>
            <p>
              <a href="#!" className="text-reset">Comparador</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Gratis</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Buscador</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Oficial</a>
            </p>
          </div>
         
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold mb-4">
              Useful links
            </h6>
            <p>
              <a href="#!" className="text-reset">Ajustes</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Otros</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Ayuda</a>
            </p>
            
          </div>
        
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
           
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="fas fa-home me-3"></i> Calle Embajadores, 80, Madrid 28045</p>
            <p>
              <i className="fas fa-envelope me-3"></i>
              cheapmove@gmail.com
            </p>
            <p><i className="fas fa-phone me-3"></i> + 34 691 089 204</p>
            
          </div>
        
        </div>
       
      </div>
    </section>
      
    <div className="text-center p-4" style={{'backgroundColor':'rgba(0, 0, 0, 0.05)'}} >
      © 2021 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">CheapMove.com</a>
    </div>
   
  </footer>
}