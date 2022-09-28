import React from "react";
import NavBar from "./NavBar";
import WeatherPanel from "./WeatherPanel";


export default function Home(){
    return(
        <React.Fragment>

            <NavBar />
            <WeatherPanel />

        </React.Fragment>
    )
};