import React from "react";
import "../styles/NavBar.css";
import sol from "../img/sol.png";
import { Link } from "react-router-dom";



export default function NavBar(){
    return(
            <div className="divMayor">
                <div className="divMenor">
                    <Link to={"/"} onClick={"Home"} style={{ textDecoration: "none" }} >
                        
                        <h2 className="app-clima">Aplicación del Clima</h2>
                        
                    </Link>
                    <Link to={"/"} onClick={"Home"} >

                        <img src={sol} className="sol" alt="imagen"/>
                    
                    </Link>
                    <Link to={"/contact"} onClick={"Contact"} style={{ textDecoration: "none" }} >
                    
                        <h3 className="contacto">Contacto</h3>
                    
                    </Link>
                    
                    
                </div>
            </div>
    )
};