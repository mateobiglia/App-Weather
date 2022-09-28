import React from "react";
import Spinner from "./Spinner";
import "../styles/Card.css";
const Card = ({loadingData, showData, weather, forecast}) => {
    
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + "/" + month + "/" + year;

    var url = "";
    var iconUrl = "";

    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";

    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";

    if(loadingData){
        return <Spinner />;
    }

    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";

        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + "/" + forecast.list[1].dt_txt.substring(5, 7) + "/" + forecast.list[1].dt_txt.substring(0, 4) + " " + forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + "/" + forecast.list[2].dt_txt.substring(5, 7) + "/" + forecast.list[2].dt_txt.substring(0, 4) + " " + forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + "/" + forecast.list[3].dt_txt.substring(5, 7) + "/" + forecast.list[3].dt_txt.substring(0, 4) + " " + forecast.list[3].dt_txt.substring(11, 13);

    }

    return(
        <div className="spinner1">

            {
                showData === true ? (

                    <div className="container">
                        

                        <div className="container2">

                            <h3 className="card-tittle">{weather.name}</h3>
                            <p className="card-date">{date}</p>
                            <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                            <p className="card-desc"><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                            <img src="https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen" className="imagen"/>
                            
                        </div>
                        <div className="container3">

                            <h5 className="card-text">Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                            <h5 className="card-text1">Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                            <h5 className="card-text2">Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)}ºC</h5>
                            <h5 className="card-text3">Humedad: {weather.main.humidity}%</h5>
                            <h5 className="card-text4">Velocidad del viento: {weather.wind.speed}m/s</h5>
                            <hr />
                            <div className="temp-futura">
                                <div className="temp-futura1">
                                    <p>{forecastDate3}h</p>
                                    <p className="icon1"><img src={iconUrl3} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                                    <p className="temp-bot">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                </div>
                                <div className="temp-futura2">
                                    <p>{forecastDate6}h</p>
                                    <p className="icon2"><img src={iconUrl6} alt="icon"/>{forecast.list[2].weather[0].description}</p>
                                    <p className="temp-bot1">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                </div>
                                <div className="temp-futura3">
                                    <p>{forecastDate9}h</p>
                                    <p className="icon3"><img src={iconUrl9} alt="icon"/>{forecast.list[3].weather[0].description}</p>
                                    <p className="temp-bot2">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                </div>
                            </div>
                            
                        </div>
                        
                            
                        
                       

   
                    </div>
                ):(
                    <h2 className="titulito">Sin Datos</h2>
                )
            }

        </div>
    );
}
 export default Card;