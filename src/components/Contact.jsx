import React from "react";
import NavBar from "./NavBar";
import linkedin from "../img/linkedin.png";
import "../styles/Contact.css";
import correo from "../img/correo.png";

export default function Contact(){
    return(
        
        <React.Fragment>

            <NavBar />
            
            <div>
                <span>
                    <div className="containerIconosRedes">

                        <a href="https://www.linkedin.com/in/mateo-biglia-31829b239/">
                        <img src={linkedin} className="linkedin" alt="imagen" />
                        </a>
                        <a href="mailto:biglia_tute@hotmail.com">
                        <img src={correo} className="correo" alt="imagen" />
                        </a>
                    
                    </div>
                </span>
        </div>

        </React.Fragment>


    )
};