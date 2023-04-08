import React from 'react';
import './ShowCountry.css'
const ShowCountry = (props) => {

    console.log(props)
    return (
<div>

<div class="card h-100" style={{width: "18rem;"}}>
  <img  src={props.flags} class="card-img-top img-fluid" alt="..."/>
  <div class="card-body">
    <h1>Name : {props.name}</h1>
    <h2>Capital : {props.capital}</h2>
    <h2>Area :{props.area}</h2>
   
  </div>
</div>

</div>
    );
};

export default ShowCountry;