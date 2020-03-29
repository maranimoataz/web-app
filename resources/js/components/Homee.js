import React, { Component } from 'react';
import "./Homee.css";
import Slider from "./Slider";
export default class Homee extends Component {
    render() {
        return (
            <div >
                


                <Slider />


                <div class="footer">
                <img src="image/logo-white.png" />
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