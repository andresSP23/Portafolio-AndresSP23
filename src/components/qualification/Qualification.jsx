import React, { useState } from "react";
import "./Qualification.css";


const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggletab = (index) => {

        setToggleState(index);
    };




    return (

        <section className="qualification section" id="educacionEx">
            <h2 className="section__title">Educación / Experiencia</h2>
            <span className="section__subtitle">Mi viaje personal</span>

            <div className="qualification__container container">

                <div className="qualification__tabs">

                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" :
                        "qualification__button  button--flex"

                    }

                        onClick={() => toggletab(1)}>

                        <i className="uil uil-graduation-cap  qualification__icon"></i>{" "}Educación
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" :
                        "qualification__button  button--flex"

                    }

                        onClick={() => toggletab(2)}>

                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}Experiencia
                    </div>

                    <div className="qualificacion__button button--flex">

                        <i className="uil uil- qualification__icon"></i>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" :
                        "qualification__content"}>

                        <div className="qualification__data">


                            <div>

                                <h3 className="qualification__title">Desarrollo de Software</h3>
                                <span className="qualification__subtitle">Instituto Tecnológico Universitario Cordillera</span>

                                <div className="qualification__calender">

                                    <i className="uil uil-calendar-alt"></i>{" "}2024

                                </div>

                            </div>

                            <div>
                                <span className="qualification__rounder"></span>

                                <span className="qualification__line"></span>



                            </div>


                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>

                                <span className="qualification__line"></span>



                            </div>


                            <div>

                                <h3 className="qualification__title">Proximamente</h3>
                                <span className="qualification__subtitle">Mas estudios</span>

                                <div className="qualification__calender">

                                    <i className="uil uil-calendar-alt"></i>{" "}2025 <i class='bx bx-question-mark'></i>

                                </div>

                            </div>

                          


                        </div>





                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" :
                        "qualification__content"}>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>

                                <span className="qualification__line"></span>



                            </div>


                            <div>

                                <h3 className="qualification__title">Desarrollo de Software</h3>
                                <span className="qualification__subtitle">Secretaria Técnica de Gestion Inmobiliaria del Sector Publico "Inmobiliar"</span>

                                <div className="qualification__calender">

                                    <i className="uil uil-calendar-alt"></i>{" "}2024/03 - 2024/08

                                </div>

                            </div>




                        </div>

                         <div className="qualification__data">
                            


                            <div>

                                <h3 className="qualification__title">Proximamente</h3>
                                <span className="qualification__subtitle">Mas experiencia</span>

                                <div className="qualification__calender">

                                    <i className="uil uil-calendar-alt"></i>{" "}2025 <i class='bx bx-question-mark'></i>

                                </div>

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>

                                <span className="qualification__line"></span>



                            </div>




                        </div>  




                    </div>


                </div>
            </div>



        </section>


    )
}

export default Qualification;


