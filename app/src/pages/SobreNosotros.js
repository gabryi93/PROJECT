import logoApp from "../assets/app.jpg"; // Tell webpack this JS file uses this image
import logoApp1 from "../assets/app2.jpg"; // Tell webpack this JS file uses this image
import logoApp2 from "../assets/React_Hero.jpg"; // Tell webpack this JS file uses this image

function SobreNosotros() {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <div className="card">
            <img src={logoApp2} className="card-img-top" alt="..." />

<<<<<<< HEAD
            <div className="card-body h-100">
              <h5 className="card-title">
                <b>Nuevas Tecnologías</b>
              </h5>
              <p className="card-text">
                Nos basamos en las nuevas tecnologías del entorno de la
                programación, para ofrecerte el mejor servicio al mejor precio.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={logoApp} className="card-img-top" alt="..." />
=======


  return <>
    <div className="row mt-5">
      <div className="col"><div className="card">
        <img src={logoApp2} className="card-img-top" alt="..." />

        <div className="card-body h-100">
          <h5 className="card-title"><b>Nuevas Tecnologías</b></h5>
          <p className="card-text">Nos basamos en las nuevas tecnologías del entorno de la programación, para ofrecerte el mejor servicio al mejor precio.</p>

        </div>
      </div></div>
      <div className="col"><div className="card">
        <img src={logoApp} className="card-img-top" alt="..." />

        <div className="card-body h-100">
          <h5 className="card-title"><b>Trabajamos con las mejores empresas</b></h5>
          <p className="card-text">Comparamos los precios de las VTC más importantes de tu ciudad, para que en un solo click, puedas solicitar el servicio que más se adecue a tus necesidades.</p>
>>>>>>> 1168b0b27b8ce3590c0ad9542a8e4ab23bab7f48

            <div className="card-body h-100">
              <h5 className="card-title">
                <b>Trabajamos con las mejores empresas</b>
              </h5>
              <p className="card-text">
                Comparamos los precios de las VTC más importantes de tu ciudad,
                para que solicites el servicio que más se adecue a tus
                necesidades.
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="col">
          <div className="card">
            <img src={logoApp1} className="card-img-top" alt="..." />
=======
      </div></div>
      <div className="col"><div className="card">
        <img src={logoApp1} className="card-img-top" alt="..." />

        <div className="card-body h-100">
          <h5 className="card-title"><b>Conductores homologados</b></h5>
          <p className="card-text">Cualquier servicio de transporte que solicites, acudirá un conductor homologado, ya que trabajamos con Uber, Cabify y Bolt. </p>
>>>>>>> 1168b0b27b8ce3590c0ad9542a8e4ab23bab7f48

            <div className="card-body h-100">
              <h5 className="card-title">
                <b>Conductores homologados</b>
              </h5>
              <p className="card-text">
                Cualquier servicio de transporte que solicites, acudirá un
                conductor homologado, ya que trabajamos con Uber, Cabify y Bolt.
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
      <div className="divsobreNostros">
        <h1>¿Por qué elegirnos?</h1>
        <br />
        <p>
          Es muy sencillo, estás cansado de siempre estar comparando entre las 3
          principales aplicaciones de servicios <b>VTC</b>, para saber que
          trayecto es el más barato...
          <br />
          Nosotros nos encargamos de comparar los precios de los principales
          servicios de de <b>VTC</b>, te hacemos ahorrar esos eurillos a fin de
          mes, hacemos que pagues <br />
          lo <b>JUSTO</b> por el servicio que contratas.
          <br />
          Y por último, siempre lo hacemos a través de una contratación directa.
          Es decir tú siempre vas a contratar el servicio que elijas a través
          del proveedor oficial.
          <br />
          Queridos usuarios esperamos que ahorréis todo el <b>TIEMPO</b> y
          dinero posible, pero sobre todo...{" "}
          <b>
            <em>que la fuerza os acompañe es vuestros trayectos</em>
          </b>
          .
        </p>
      </div>
    </>
  );
=======
      </div></div>
    </div>
    <div className='divsobreNostros'>
      <h1>¿Por qué elegirnos?</h1>
      <br />
      <p>Es muy sencillo, estás cansado de siempre estar comparando entre las 3 principales aplicaciones de servicios <b>VTC</b>, para saber que trayecto es el más barato...<br />
        Nosotros nos encargamos de comparar los precios de los principales servicios de de <b>VTC</b>, te hacemos ahorrar esos eurillos a fin de mes, hacemos que pagues <br />
        lo <b>JUSTO</b> por el servicio que contratas.<br />
        Y por último, siempre lo hacemos a través de una contratación directa. Es decir tú siempre vas a contratar el servicio que elijas a través del proveedor oficial.<br />
        Queridos usuarios os deseamos un buen trayecto, pero sobre todo haceros ahorrar todo el dinero y <b>TIEMPO</b> posible.

      </p>
    </div>

  </>


>>>>>>> 1168b0b27b8ce3590c0ad9542a8e4ab23bab7f48
}

export default SobreNosotros;
