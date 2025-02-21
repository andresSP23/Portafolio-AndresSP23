import React from "react";


const Services = () =>{
return(
    <section className="services section" id="services">


    <h2 className="section__title">Servicios</h2>
    <span className="section__subtitle">Que ofresco</span>

    <div className="services__container container grid">
              
             <div className="services__content">
                <div>

                    <i className="uil uil services__ico"></i>
                    <h3 className="services__title"></h3>

                </div>

                <span className="services__button"> Mirar mas <i className="uil uil-arrow-right services__buton-icon"></i></span>
                 
                 <div className="services__modal">

                    <div className="services__modal-content">
                      <i className="uil uil-times services__modal-close"></i>
                      <h3 className="services__modal-title"></h3>
                      <p className="services__modal-description">Con mas de 1 año de experiencia.
                        Entregando trabajo de calidad para los clientes y empresas. 
                      </p>
                        
                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                       
                                       <i className="uil uil-check-circle services__modal-icon"></i>
                                       <p className="services__modal-info"> Desarrollo la interfaz de usuario</p>

                            </li>
                            <li className="services__modal-service">
                                       
                                       <i className="uil uil-check-circle services__modal-icon"></i>
                                       <p className="services__modal-info">Desarrollo de paginas Web</p>

                            </li>
                            <li className="services__modal-service">
                                       
                                       <i className="uil uil-check-circle services__modal-icon"></i>
                                       <p className="services__modal-info">Interacciones con el usuario </p>

                            </li>
                        </ul>


                    </div>
                 </div>

             </div>
             

    </div>

</section>


)

}

export default Services;