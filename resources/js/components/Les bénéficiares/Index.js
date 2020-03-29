import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import Add from "./Add";
import Listing from "./Listing";
import Edit from "./Edit";
import Demande from "./Demande";
import "./Index.css";
export default class Index extends Component {
    render() {
        return (
            <div>
            <div class="index">
                <Router>
                    <div>
                        <hr />
                        <div class="wrapper">
                        <div class="button1">
                        <Link to="/Les bénéficiares/Listing"><button className="btn btn-warning my-2 my-sm-0"><img class="image1" src="/image/invoice.png" /> <center><b>étudiants bénéficiares</b></center> </button></Link> &nbsp;<br /> <br /> <br />
                        </div>
                        <div class="button2">
                        <Link to="/Les bénéficiares/Demande" className="btn btn-warning"><img class="image2" src="/image/checklist.png" /> <b><center> Lister les demandes</center></b> </Link> &nbsp; <br /> <br /> <br />
                        </div>
                        <div class="button3">
                        <Link to="/Les bénéficiares/Add" className="btn btn-warning"> <img class="image3" src="/image/followers.png" /><span><b><center> ajouter un/une bénéficiare(e)</center> </b> </span></Link>  <br />  <br /> <br /> 
                        </div> 
                        </div>
                        <Route exact path="/Les bénéficiares/Add" component={Add} />
                        <Route exact path="/Les bénéficiares/Listing" component={Listing} />
                        <Route exact path="/Les bénéficiares/Demande" component={Demande} />
                        <Route exact path="/Les bénéficiares/edit/:Id" component={Edit} />
                        <Route exact path="Index" component={Index} />
                    </div>
                </Router>
                </div>
               
                <div class="footer">
                <img src="/image/logo-white.png" />
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