import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Homee from './Homee';
import "./Header.css"
import Map from "./Map/Map";
import Service from "./Service";
import Index from "./Les bénéficiares/Index";
export default class Header extends Component {
    render() {
        return (
                        
            <Router>
                <div class="hd">
                       <div class="header">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <img class="photo" src="image/index.png" />
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                  
                                        <Link className="nav-link" href="/"><button type="button" class="btn btn-light"><img class="home" src="image/home.png" /><b>Accueil</b></button> </Link>
                                    
                                    </li>
                                    <li className="nav-item">
                                    <Link
                                      rel="stylesheet"
                                      href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                                      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                                      crossorigin="" 
                                    />
                                   <Link className="nav-link" to="/Map/Index"><button type="button" class="btn btn-light"><img class="place1" src="image/place.png" /><strong> map</strong></button></Link>
                                    </li> 
                                     <li className="nav-item">
                                      <Link className="nav-link" to="/Service"><button type="button" class="btn btn-light"><img class="support" src="image/support.png" /><b>Nos Services</b></button> </Link>
                                    </li> 
                                    &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                    <li class="login">
                                      <Link to="/Les bénéficiares/Index"><button type="button" class="btn btn-outline-warning my-2 my-sm-0"> <img class="image" src="image/index1.png" /> &nbsp; <center><b>Gestion des bénéficiares</b></center></button></Link>
                                    </li>
                                </ul>
                              
                            </div>
                            </div>
                          
                        </nav>

                
                <Route exact path='/'  component={Homee} />
                <Route exact path='/Les bénéficiares/Index' component={Index} />
               <Route exact path='/Map/Map' component={Map} />
               <Route exact path ='/Service' component={Service} />
            </div>
            </div>
            </Router>

        );
    }
}