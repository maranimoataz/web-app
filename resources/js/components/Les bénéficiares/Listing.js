import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pagination from "react-js-pagination";
import Erreur from './Erreur';
import Success from './Success';
import "./Listing.css";
export default class Listing extends Component {

    constructor()
    {
        super();
        this.state={
            etudiant: [],
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
        }
        this.handlePagechange=this.handlePagechange.bind(this);
    }
    componentDidMount()
     {
         axios.get('http://127.0.0.1:8000/etudiant')
         .then(response=>{
             this.setState({etudiant:response.data.data});
         });
     }

     handlePagechange(pageNumber) {
         console.log(`active page is ${pageNumber}`);
         //this.setState({activePage: pageNumber});
         axios.get('http://127.0.0.1:8000/etudiant?page=' +pageNumber)
         .then(response=>{
             this.setState({
                 etudiant:response.data.data,
                 itemsCountPerPage:response.data.per_page,
                 totalItemsCount:response.data.total,
                 activePage:response.data.current_page  
            });
         });
     }

    onDelete(etudiant_Id)
    {
        axios.delete('http://127.0.0.1:8000/api/etudiant/delete/'+etudiant_Id)
        .then(res=>{
            this.setState({alert_message:"success"})
        }).catch(error=>{
            this.setState({alert_message:"error"});   
        });
            var etudiant = this.state.etudiant;

            for(var i=0;i<etudiant.length;i++)
            {
                if(etudiant[i].Id==etudiant_Id)
                {
                    etudiant.splice(i,1)
                    this.setState({etudiant:etudiant});
                }
            }
        }
         OnDownload(){
            axios({
             url: 'http://127.0.0.1:8000/api/etudiant/getetudiantPDF',
             method: 'GET',
             responseType: 'blob', // important
                }).then((response) => {
                   const url = window.URL.createObjectURL(new Blob([response.data]));
                   const link = document.createElement('a');
                   link.href = url;
                   link.setAttribute('getetudiantPDF', 'customer_etd.pdf'); 
                   document.body.appendChild(link);
                   link.click();
                });
            }

    render() {
        return (
            <div>
                <hr />
                {this.state.alert_message=="success"?<Success  message={"La suppression effectué."}/>: null}
                {this.state.alert_message=="erreur"?<Erreur  message={"Un Erreur est produisé lors de la suppression."}/>: null}
                <div class="button1">
                    <button type="button" class="btn btn-primary btn-sm" onClick={this.OnDownload.bind(this)}> <img  class="image1" src="/image/pdf-file.png" />  &nbsp;  &nbsp; <b>Télécharger en format PDF</b></button><br /> <br />
                    </div>
                       <table className="table table-hover table-secondary ">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom du bénéficiare</th>
                            <th scope="col">Prénom du bénéficiare</th>
                            <th scope="col">Faculté/Institut</th>
                            <th scope="col">Filière</th>
                            <th scope="col">Adresse email</th>
                            <th scope="col">Adresse et la ville</th>
                            <th scope="col">Numéro de chambre</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.etudiant.map(etudiant=>{
                                    return (
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{etudiant.Nom}</td>
                                        <td>{etudiant.Prenom}</td>
                                        <td>{etudiant.Etablissement}</td>
                                        <td>{etudiant.Choix}</td>
                                        <td>{etudiant.adresse_mail}</td>
                                        <td>{etudiant.adresse_local}</td>
                                        <td>{etudiant.num_chambre}</td>
                                        <td>
                                            <Link to={`/Les bénéficiares/edit/${etudiant.Id}`}>Modifier</Link> | &nbsp;
                                            <a href="#" onClick={this.onDelete.bind(this,etudiant.Id)}>Supprimer</a></td>
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