import React, { useEffect, useState } from 'react';
import ShowCountry from '../ShowCountry/ShowCountry';
import './LoadCountries.css'

const LoadCountries = (props) => {
    const [countries,setCountries]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
        
    },[])
    return (
        
        <div className="products-container">
           {
            
            countries.map(country=><ShowCountry
                 name={country.name.common}
                 capital={country.capital}
                 flags={country.flags.png}
                  area={country.area}
                 ></ShowCountry>)
           }

{/* {
            
            countries.map(country=>console.log(country))
           } */}

            
        </div>
    );
};

export default LoadCountries;