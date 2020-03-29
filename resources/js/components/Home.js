import React, { Component } from 'react';
import "./Home.css";
import Success from './Les bénéficiares/Success';
import Erreur from './Les bénéficiares/Erreur';
export default class Home extends Component {
          constructor()
    {
        super();
        this.onChangeEtudiantnom=this.onChangeEtudiantnom.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeEtudiantprenom=this.onChangeEtudiantprenom.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeEtudiantetablissement=this.onChangeEtudiantetablissement.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeEtudiantfiliere=this.onChangeEtudiantfiliere.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeEtudiantmail=this.onChangeEtudiantmail.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeEtudiantadresse=this.onChangeEtudiantadresse.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeEtudiantlettre=this.onChangeEtudiantlettre.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            nom:'',
            prenom:'',
            etablissement:'',
            filiere:'',
            adresse_mail:'',
            adresse_local:'',
            lettre_formelle:'',
        }
    }

    onChangeEtudiantnom(e){
        this.setState({
            nom:e.target.value
        })
    }

    onChangeEtudiantprenom(e){
        this.setState({
            prenom:e.target.value
        })
    }

    onChangeEtudiantetablissement(e){
        this.setState({
            etablissement:e.target.value
        })
    }

    onChangeEtudiantfiliere(e){
        this.setState({
            filiere:e.target.value
        })
    }

    onChangeEtudiantmail(e){
        this.setState({
            adresse_mail:e.target.value
        })
    }

    onChangeEtudiantadresse(e){
        this.setState({
            adresse_local:e.target.value
        })
    }

    onChangeEtudiantlettre(e){
        this.setState({
            lettre_formelle:e.target.value
        })
    }

     onSubmit(e)
    {
        e.preventDefault();
        const etudiant_demandeur ={
            nom: this.state.nom,
            prenom: this.state.prenom,
            etablissement: this.state.etablissement,
            filiere: this.state.filiere,
            adresse_mail: this.state.adresse_mail,
            adresse_local: this.state.adresse_local,
            lettre_formelle: this.state.lettre_formelle,
        }
        axios.post('http://127.0.0.1:8000/api/etudiant_demandeur/store',etudiant_demandeur)
       .then(res=>{
            this.setState({alert_message:"success"})
        }).catch(error=>{
            this.setState({alert_message:"error"});
        }) 
     }

    render() {
        return (
            <div className="format">
              <hr />
              <div class="alert">
                {this.state.alert_message=="success"?<Success  message={"Votre Demande est en cas de vérification ."}/>: null}
                {this.state.alert_message=="erreur"?<Erreur  message={"Un Erreur est produisé lors de la Demande."}/>: null}
                </div>
            <div className="wrapper">
            <form onSubmit={this.onSubmit}> 
             <div className="form-wrapper">
             <h1> <b>PASSEZ VOTRE DEMANDE</b></h1>
             <label for="nom"><strong> NOM </strong></label>
                        <input type="text" className="form-control" id="nom"
                         value={this.state.nom} 
                         onChange={this.onChangeEtudiantnom} 
                         placeholder="Entrer votre nom" />
                        <label for="prenom"><strong> PRÉNOM </strong></label>
                        <input type="text" className="form-control" id="prenom"
                        value={this.state.prenom}
                        onChange={this.onChangeEtudiantprenom}
                        placeholder="votre prenom" />
                        <label for="etablissement"><strong> Faculté/Institut </strong></label>
                        <input type="text" className="form-control" id="etablissement"
                         value={this.state.etablissement}
                          onChange={this.onChangeEtudiantetablissement} 
                          placeholder= "votre établissement" />
                        <label for="filiere"><strong> FILIÈRE</strong></label>
                        <input type="text" className="form-control" id="filiere" 
                        value={this.state.filiere} 
                        onChange={this.onChangeEtudiantfiliere}
                         placeholder="filiere" />
                        <label for="adresse_mail"><strong> ADRESSE EMAIL</strong></label>
                        <input type="text" className="form-control" id="adresse_mail"
                         value={this.state.adresse_mail} 
                         onChange={this.onChangeEtudiantmail} 
                          placeholder="Entrer l'email du bénéficiare" />
                        <label for="adresse_local"><strong> ADRESSE LOCAL </strong></label>
                        <input type="text" className="form-control" id="adresse_local" 
                        value={this.state.adresse_local} 
                        onChange={this.onChangeEtudiantadresse}  placeholder="Entrer votre adresse local" />
                        <label for="lettre_formelle"><strong> TAPEZ VOTRE LETTRE FORMELLE </strong> <br /><strong>(1200 mots)</strong></label>
                        <textarea type="text" className="form-control" 
                            id="lettre_formelle"
                            rows="8" 
                            value={this.state.lettre_formelle}
                            onChange={this.onChangeEtudiantlettre}  placeholder=" Lettre Formelle" >  
                          </textarea>  
                            <button type="submit" className="btn btn-primary">Envoyer votre Demande </button>
                            <br />
                            <br />             
                       </div>  
                    </form>
                   </div>
                </div> 
                );
    }
}