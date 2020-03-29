import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import "./Service.css";
import "./Homee.css";
import Home from "./Home";

export default class  Service extends Component {
    render() {
        return (

            <div class="serv">
            <ul>
               	<li><strong class="heb"> Hébergement</strong></li>
               	<br />
               	<p><strong>
               	Dans le Cadre de sa politique sociale, et en réponse à l'une des préoccupations des étudiants, l'Université met à la disposition des étudiants une platforme de la demande du logement universitaires :</strong></p>
               </ul>
	            <br />
	               <div class="text">
	                 <strong>  <p> Pour faire une Demande au Logement universitaire merci de cliquer au button ci-dessous</p> </strong>
	                 	<div class="icon">
	                 	<svg class="bi bi-arrow-bar-down" width="6em" height="6em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						  <path fill-rule="evenodd" d="M11.354 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L8 12.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
						  <path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5V13a.5.5 0 01-1 0V6.5A.5.5 0 018 6zM2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
						</svg>
					  </div>
				  </div>
               				<div class="butt">
               		  <Router>
             					 <center><Link to="/Home"><button type="button" class="btn btn-outline-warning">Faire une Demande</button></Link></center>
             					 <br />
             					 <br />
             					 <br />
             					 <br />
	                  <Route exact path ='/Home' component={Home} />
	                  </Router>
	                  <br />
	                  <br />
	                  <br />
	                  <br />
	            </div>
                <div class="footer">
                <img src="image/logo-white.png" />
                <br /> 
                <br />
                <br />
                <br />
                <div class="footer-content">
                    <div class="footer-section about">
                        <h3 class="logo-text"><strong>A PROPOS</strong></h3>
                        <p>Créée en 1985 au cœur de la ville d'El Jadida dans la région
                         de Doukkala-Abda,
                          l'Université Chouaïb Doukkali a vu le jour avec deux établissements universitaires, 
                          la Faculté des Sciences et la Faculté des Lettres et des Sciences Humaines.
                           Aujourd'hui, l'Université se compose de six établissements universitaires. </p>

                    </div>
                    <div class="footer-section coordonnees">
                    <h3><strong> COORDONNÉES </strong></h3>
                    <p> Avenue des Facultés, ElJadida 24100 <br />
                    <br />
                    <span><i class="fas fa-phone"></i> &nbsp; 05 23 34 44 47</span><br />
                    <br />
                    <span><i class="fas fa-phone"></i> &nbsp; 05 23 34 44 49</span><br />
                    <br />
                     <span><i class="fas fa-envelope"></i> &nbsp; communication@ucd.ac.ma</span></p>
                    </div>
                    <div class="footer-section contact-form">
                    <h3><strong> SUIVI-NOUS SUR </strong></h3>
                     <a href="#"><i class="fab fa-facebook"></i></a><br />
                    <a href="#"><i class="fab fa-instagram"></i></a><br />
                    <a href="#"><i class="fab fa-twitter"></i></a><br />
                    <a href="#"><i class="fab fa-linkedin"></i></a><br />
                    		</div>
               			 </div>
                	</div>
          		 </div>

        );
    }
}