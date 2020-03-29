<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Etudiant_demandeur;
use PDF;
use DB;

class Etudiant_demandeurController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Etudiant_demandeur::paginate(3);
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
      $etudiant_demandeur = new Etudiant_demandeur();
      $etudiant_demandeur->nom = $request->nom;
      $etudiant_demandeur->prenom= $request->prenom;
      $etudiant_demandeur->etablissement = $request->etablissement;
      $etudiant_demandeur->filiere=$request->filiere;
      $etudiant_demandeur->adresse_mail=$request->adresse_mail;
      $etudiant_demandeur->adresse_local=$request->adresse_local;
      $etudiant_demandeur->lettre_formelle=$request->lettre_formelle;
      $etudiant_demandeur->save();

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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function getPDF(){
        $etudiant_demandeur = Etudiant_demandeur::all();
        $pdf = PDF::loadView('pdf.customer',['etudiant_demandeur'=>$etudiant_demandeur]);
        return $pdf->download('customer.pdf')->withHeaders([
            'Content-Type' => 'application/pdf']); 
    } 
} 