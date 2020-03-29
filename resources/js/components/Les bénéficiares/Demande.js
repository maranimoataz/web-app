import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pagination from "react-js-pagination";
import "./Demande.css";

export default class Demande extends Component {
       constructor()
    {
        super();
        this.state={
            etudiant_demandeur:[],
             activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
        }
          this.handlePagechange=this.handlePagechange.bind(this);
    }
    componentDidMount()
     {
         axios.get('http://127.0.0.1:8000/etudiant_demandeur')
         .then(response=>{
             this.setState({etudiant_demandeur:response.data.data});
         });
     }
      handlePagechange(pageNumber) {
         console.log(`active page is ${pageNumber}`);
         //this.setState({activePage: pageNumber});
         axios.get('http://127.0.0.1:8000/etudiant_demandeur?page=' +pageNumber)
         .then(response=>{
             this.setState({
                 etudiant_demandeur:response.data.data,
                 itemsCountPerPage:response.data.per_page,
                 totalItemsCount:response.data.total,
                 activePage:response.data.current_page  
            });
         });
     }
     OnDownload(){
            axios({
             url: 'http://127.0.0.1:8000/api/etudiant_demandeur/getPDF',
             method: 'GET',
             responseType: 'blob', // important
                }).then((response) => {
                   const url = window.URL.createObjectURL(new Blob([response.data]));
                   const link = document.createElement('a');
                   link.href = url;
                   link.setAttribute('getPDF', 'customer.pdf'); 
                   document.body.appendChild(link);
                   link.click();
                });
}
   

    render() {
        return (
                  <div>   
                  <hr />
                  <div class="button1">
                  <button type="button" class="btn btn-primary btn-sm" onClick={this.OnDownload.bind(this)}><img class="image2" src="/image/pdf-file.png"  /><b>Télécharger en format PDF</b></button> <br /> <br />
                  </div>
                      <table className="table table-hover table-secondary">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom </th>
                            <th scope="col">Prénom </th>
                            <th scope="col">Faculté/Institut</th>
                            <th scope="col">Filière</th>
                            <th scope="col">Adresse email</th>
                            <th scope="col">Adresse et la ville</th>
                            <th scope="col">Lettre Formelle</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.etudiant_demandeur.map(etudiant_demandeur=>{
                                    return (
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{etudiant_demandeur.nom}</td>
                                        <td>{etudiant_demandeur.prenom}</td>
                                        <td>{etudiant_demandeur.etablissement}</td>
                                        <td>{etudiant_demandeur.filiere}</td>
                                        <td>{etudiant_demandeur.adresse_mail}</td>
                                        <td>{etudiant_demandeur.adresse_local}</td>
                                        <td>{etudiant_demandeur.lettre_formelle}</td>
                                        
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                        </table>
                        <div class="d-flex justify-content-center">                             
                        <Pagination
                                 activePage={this.state.activePage}
                                 itemsCountPerPage={this.state.itemsCountPerPage}
                                 totalItemsCount={this.state.totalItemsCount}
                                 onChange={this.handlePagechange}
                                 itemClass='page-item'
                                 linkClass='page-link'
                                />
                        </div>     
         </div>                      

                      
        );
    }
}