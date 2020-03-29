<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Etudiant;
use PDF;

class EtudiantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Etudiant::paginate(3);
        return $result;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $etudiant = new Etudiant();
        $etudiant->Nom= $request->bénéfic_nom;
        $etudiant->Prenom= $request->bénéfic_prenom;
        $etudiant->Etablissement= $request->bénéfic_faculte;
        $etudiant->Choix= $request->bénéfic_filiere;
        $etudiant->adresse_mail= $request->bénéfic_email;
        $etudiant->adresse_local= $request->bénéfic_adresse;
        $etudiant->num_chambre= $request->bénéfic_chambre;
        $etudiant->save();
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $etudiant = Etudiant::find($id);
        return $etudiant;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $etudiant = Etudiant::find($id);
        $etudiant->Nom= $request->bénéfic_nom;
        $etudiant->Prenom= $request->bénéfic_prenom;
        $etudiant->Etablissement= $request->bénéfic_faculte;
        $etudiant->Choix= $request->bénéfic_filiere;
        $etudiant->adresse_mail= $request->bénéfic_email;
        $etudiant->adresse_local= $request->bénéfic_adresse;
        $etudiant->num_chambre= $request->bénéfic_chambre;
        $etudiant->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $etudiant = Etudiant::find($id);
         $etudiant->delete();     
    }
    public function getetudiantPDF(){
            $etudiant = Etudiant::all();
            $pdf = PDF::loadView('pdf.customeretd',['etudiant'=>$etudiant]);
            return $pdf->stream('customeretd.pdf')->withHeaders([
                'Content-Type' => 'application/pdf']); 
        }
}
