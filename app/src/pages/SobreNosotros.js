
import logoApp from '../assets/app.jpg'; // Tell webpack this JS file uses this image
import logoApp1 from '../assets/app2.jpg'; // Tell webpack this JS file uses this image
import logoApp2 from '../assets/React_Hero.jpg'; // Tell webpack this JS file uses this image

function SobreNosotros() {

   

    return  <>
        <div className="row mt-5">
            <div className="col"><div className="card">
            <img src={logoApp2} className="card-img-top" alt="..."/>

      <div className="card-body">
        <h5 className="card-title">Nuevas Tecnologías</h5>
        <p className="card-text">Nos basamos en las nuevas tecnologías del entorno de programación, para ofrecerte el mejor servisio al mejor precio.</p>
        
      </div>
</div></div>
            <div className="col"><div className="card">
  <img src={logoApp} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">Trabajamos con las mejores empresas</h5>
    <p className="card-text">Comparamos los precios de las VTC más importantes de tu ciudad, para que en un solo click, puedas solicitar el servicio que más te guste y que te sientas seguro y respaldado.</p>
    
  </div>
</div></div>
            <div className="col"><div className="card">
  <img src={logoApp1} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">Conductores homologados</h5>
    <p className="card-text">Cualquier servicio de transporte que solicites, acudirá un conductor homologado, ya que tú sigues usando las mismas aplicaciones de Cabify, Bolt y Uber, pero desde nuestra aplicación</p>
    
  </div>
</div></div>
</div>
    <div className='divsobreNostros'>
      <h1>¿Porqué elegirnos?</h1>
      <br/>
      <p>Es muy sencillo, estás cansado de siempre estar comparando entre las 3 principales aplicaciones de servicios <b>VTC</b>, para saber que trayecto es el más barato...<br/>
         Nosotros nos encargamos de comparar los precios de los principales servicios de de <b>VTC</b>, te hacemos ahorrar esos eurillos a fin de mes, hacemos que pagues <br/>
         lo <b>JUSTO</b> por el servicio que contratas.<br/>
         Y por último, siempre lo hacemos a través de una contratación directa. Es decir tú siempre vas a contratar el servicio que elijas a través del proveedor oficial.<br/>
         Queridos usuarios os deseamos un buen trayecto, pero sobre todo haceros ahorrar todo el dinero y <b>TIEMPO</b> posible.
       
      </p>
      </div>
        
    </>
  
    
}

export default SobreNosotros