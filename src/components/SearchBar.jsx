import React, {useState} from 'react';
import s from "../styles/SearchBar.module.css";

const SearchBar = ({newLocation}) => {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({city});
    if(city === "" || !city) return;
    newLocation(city);
    setCity(" ");
    
  }
    
  return(
    <div className={`${s.divMayor}`}>
      
      <form onSubmit={onSubmit}>
        <div className={`${s.middlediv}`}>
          <input type="text" className={`${s.navbar}`} placeholder='Ciuidad...' onChange={(e) => setCity(e.target.value)}/>
          <button className={`${s.boton}`} type='submit'>Buscar</button>
        </div>
      </form>
    </div>
    
  );
}

export default SearchBar;

