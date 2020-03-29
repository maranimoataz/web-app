import React, { Component } from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import { Icon } from 'leaflet';
import "./Index.css";
//import * as parkData from "./data/skateboard-parks.json";
export default function Index() {
        return( 
        <Map center={[33.231838, -8.490870]} zoom={12}>
        <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution='$copy; <a href="http://osm.org/copyright">openstreetmap</a>contributors'
      	/>   
        </Map>
        );
    }