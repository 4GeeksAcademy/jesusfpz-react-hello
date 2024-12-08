// Cuando colocamos la web en modo telefono 
//el droptown que se forma no pude cambiarle el color a las 3 rayitas que tendrian que verse en blanco.
// Entonces se ve en color negro. del resto creo tenerlo todo Okey. 

import React from "react";
import Navbar from "./navbar";
import FirstCard from "./firstCard";
import Card from "./cardtext";
import Footer from "./footer";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		
	<div>
		<Navbar/>
	<div class="container">
		<FirstCard/>
		
  <div class="row mt-2 mb-2">
    	<div class="col ">
			<Card/>
    	</div>
    	  <div class="col">
			<Card/>
    	</div>
    	  <div class="col">
			<Card/>
    	</div>
	<div class="col">
			<Card/>
    
  	   </div>
	</div>
   </div>
<div>
	      <Footer/>
    </div>
</div>

	)
	}

export default Home;


