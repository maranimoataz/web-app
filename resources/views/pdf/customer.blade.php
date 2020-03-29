<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
         <style>
        table, th, td {
          border: 1px solid black;
          border-collapse: collapse;
        }
        th, td {
          padding: 15px;
        }
        th {
        text-align: left;
      }
      </style>  
      <div>
    <center> <img src="image/index.png"  style ="width: 20%;"/></center>
      </div>
         <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
       <style type="text/css">
       table{
            width:70%;
            margin:0 auto;
            border: 1px solid;
       } 
      </style>
      </head>
      <div>
        <br>
        <br>
        <br>
    <body>
    <center>  <h2><strong>La liste des étudiants demandeurs</strong></h2></center>
    <br>
    <br>
        <table style="width:100%">
            <thead>
                <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Etablissement</th>
                <th>Filière</th>
                <th>adresse email</th>
                 <th>adresse local</th>
             </tr>
            </thead>
            <tbody>
                @foreach($etudiant_demandeur as $key => $etudiant_demandeur)
                <tr>
                    <td>{{$etudiant_demandeur->nom}}</td>
                    <td>{{$etudiant_demandeur->prenom}}</td>
                    <td>{{$etudiant_demandeur->etablissement}}</td>
                    <td>{{$etudiant_demandeur->filiere}}</td>
                    <td>{{$etudiant_demandeur->adresse_mail}}</td>
                    <td>{{$etudiant_demandeur->adresse_local}}</td>
                </tr>
                @endforeach
            </tbody>

        </table>
    </body>
  </div>
</html>
