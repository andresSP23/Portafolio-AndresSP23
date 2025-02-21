import React from "react";
import Backend from "./Backend";
import "./Skills.css";
import Frontend from "./Frontend";

const Skills = () => {

    return (

        <section className="skills section" id="skills">


            <h2 className="section__title">Habilidades</h2>
            <span className="section__subtitle">Mi nivel tecnico</span>

            <div className="skills__container container grid">
                      
                      <Frontend />
                      <Backend />

                     

            </div>

        </section>
    )

}



export default Skills;