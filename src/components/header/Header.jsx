import React, { useState } from "react";
import "./Header.css";


const Header = () => {

    window.addEventListener("scroll", function () {

        const header = document.querySelector(".header");


        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");

    });







    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo" ><div class="logo">
                    <div class="software">SOFTWARE</div>
                    <div class="developer">DEVELOPER</div>
                    <div class="star star1"></div>
                    <div class="star star2"></div>
                    <div class="star star3"></div>
                    <div class="star star4"></div>
                </div></a>
                <div className={Toggle ? "nav__menu  show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">

                        <li className="nav__item">

                            <a href="#home" onClick={() => setActiveNav
                                ('#home')

                            } className={activeNav === "#home" ? "nav__link active-link" :
                                "nav__link"
                            }>
                                <i className="uil uil-estate nav__icon"></i> Inicio
                            </a>

                        </li>
                        <li className="nav__item">

                            <a href="#about" onClick={() => setActiveNav
                                ('#about')

                            } className={activeNav === "#about" ? "nav__link active-link" :
                                "nav__link"
                            }>
                                <i className="uil uil-user nav__icon"></i>Acerca de
                            </a>

                        </li>
                        <li className="nav__item">

                            <a href="#skills" onClick={() => setActiveNav
                                ('#skills')

                            } className={activeNav === "#skills" ? "nav__link active-link" :
                                "nav__link"
                            }>
                                <i className="uil uil-file-alt nav__icon"></i>Habilidades
                            </a>

                        </li>

                        <li className="nav__item">

                            <a href="#educacionEx" onClick={() => setActiveNav
                                ('#educacionEx')

                            } className={activeNav === "#educacionEx" ? "nav__link active-link" :
                                "nav__link"
                            }>
                                <i class="uil uil-backpack nav__icon"></i>Trayectoria
                            </a>

                        </li>
                        <li className="nav__item">

                            <a href="#contact" onClick={() => setActiveNav
                                ('#contact')

                            } className={activeNav === "#contact" ? "nav__link active-link" :
                                "nav__link"
                            }>
                                <i className="uil uil-message nav__icon"></i>Contacto
                            </a>

                        </li>


                    </ul>
                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>


                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>

                </div>

            </nav>



        </header>


    );




}

export default Header;