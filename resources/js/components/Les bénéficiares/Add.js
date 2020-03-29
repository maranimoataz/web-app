import React, { Component } from 'react';
import axios from 'axios';
import Success from './Success';
import Erreur from './Erreur';
import "./Add.css";
export default class Add extends Component {
    
    constructor()
    {
        super();
        this.onChangeEtudiantNom=this.onChangeEtudiantNom.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeEtudiantPrenom=this.onChangeEtudiantPrenom.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeEtudiantFaculte=this.onChangeEtudiantFaculte.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeEtudiantFiliere=this.onChangeEtudiantFiliere.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeEtudiantMail=this.onChangeEtudiantMail.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeEtudiantAdresse=this.onChangeEtudiantAdresse.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeEtudiantChambre=this.onChangeEtudiantChambre.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            bénéfic_nom:'',
            bénéfic_prenom:'',
            bénéfic_faculte:'',
            bénéfic_filiere:'',
            bénéfic_email:'',
            bénéfic_adresse:'',
            bénéfic_chambre:'',
            alert_message:'',
        }
    }
    
    onChangeEtudiantNom(e){
        this.setState({
            bénéfic_nom:e.target.value
        })
    }
    onChangeEtudiantPrenom(e){
        this.setState({
            bénéfic_prenom:e.target.value
        })
    }
    onChangeEtudiantFaculte(e){
        this.setState({
            bénéfic_faculte:e.target.value
        })
    }
    onChangeEtudiantFiliere(e){
        this.setState({
            bénéfic_filiere:e.target.value
        })
    }
    onChangeEtudiantMail(e){
        this.setState({
            bénéfic_email:e.target.value
        })
    }
    onChangeEtudiantAdresse(e){
        this.setState({
            bénéfic_adresse:e.target.value
        })
    }
    onChangeEtudiantChambre(e){
        this.setState({
            bénéfic_chambre:e.target.value
        })
    }

    onSubmit(e)
    {
        e.preventDefault();
        const etudiant ={
            bénéfic_nom: this.state.bénéfic_nom,
            bénéfic_prenom: this.state.bénéfic_prenom,
            bénéfic_faculte: this.state.bénéfic_faculte,
            bénéfic_filiere: this.state.bénéfic_filiere,
            bénéfic_email: this.state.bénéfic_email,
            bénéfic_adresse: this.state.bénéfic_adresse,
            bénéfic_chambre: this.state.bénéfic_chambre,
        }
        axios.post('http://127.0.0.1:8000/api/etudiant/store',etudiant)
        .then(res=>{
            this.setState({alert_message:"success"})
        }).catch(error=>{
            this.setState({alert_message:"error"});
        })
    }


    render() {
        return (
            <div class="format">
                <hr />
                {this.state.alert_message=="success"?<Success  message={"Opération effectué."}/>: null}
                {this.state.alert_message=="erreur"?<Erreur  message={"Un Erreur est produisé lors de l'ajout."}/>: null}
                 <div className="wrapper">
                     <form onSubmit={this.onSubmit}> 
                        <div className="form-wrapper">
                        <label for="bénéfic_nom"> <strong>Le nom du bénéficiare</strong></label>
                        <input type="text" className="form-control" id="bénéfic_nom"
                         value={this.state.bénéfic_nom} 
                         onChange={this.onChangeEtudiantNom} 
                         placeholder="Entrer le nom du bénéficiare" />
                        <label for="bénéfic_prenom"> <strong>Le prénom du bénéficiare</strong></label>
                        <input type="text" className="form-control" id="bénéfic_prenom"
                         value={this.state.bénéfic_prenom}
                          onChange={this.onChangeEtudiantPrenom} 
                           placeholder="Entrer le prénom du bénéficiare" />
                        <label for="bénéfic_faculte"><strong>faculté ou institut</strong></label>
                        <input type="text" className="form-control" id="bénéfic_faculte"
                         value={this.state.bénéfic_faculte}
                          onChange={this.onChangeEtudiantFaculte} placeholder="Faculté/Institut" />
                        <label for="bénéfic_filiere"><strong>Filière</strong></label>
                        <input type="text" className="form-control" id="bénéfic_filiere" 
                        value={this.state.bénéfic_filiere} 
                        onChange={this.onChangeEtudiantFiliere} placeholder="Filière" />
                        <label for="bénéfic_email"><strong>Adresse email</strong></label>
                        <input type="text" className="form-control" id="bénéfic_email"
                         value={this.state.bénéfic_email} 
                         onChange={this.onChangeEtudiantMail} 
                          placeholder="Entrer l'email du bénéficiare" />
                        <label for="bénéfic_adresse"><strong>L'Adresse du bénéficiare</strong></label>
                        <input type="text" className="form-control" id="bénéfic_adresse" 
                        value={this.state.bénéfic_adresse} 
                        onChange={this.onChangeEtudiantAdresse}  placeholder="Entrer l'adresse du bénéficiare" />
                        <label for="bénéfic_chambre"><strong>chambre disponible</strong></label>
                        <input type="text" className="form-control" id="bénéfic_chambre"
                         value={this.state.bénéfic_chambre}
                          onChange={this.onChangeEtudiantChambre}  placeholder=" Chambre disponible" />                 
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
             </form>
            </div>
            </div>
        );
    }
}