import React from "react";


const Info = () =>{

return(

<div className="about__info grid">

<div className="about__box">
<i class='bx bx-award'></i>
    <h3 className="about__title">Experiencia</h3>
    <span className="about__subtitle">1 Año trabajando</span>
</div>
<div className="about__box">
<i class='bx bx-briefcase-alt-2' ></i>

    <h3 className="about__title">Completados</h3>
    <span className="about__subtitle">5 Proyectos</span>
</div>

<div className="about__box">
<i class='bx bx-support' ></i>
    <h3 className="about__title">Soporte</h3>
    <span className="about__subtitle">En linea 24/7</span>
</div>



</div>

)


}

export default Info;