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
         <style>
              img {
              
                }        
          </style>             
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
        <br >
        <br >
        <br >

    <body>
     <center> <h2>La liste des étudiants bénéficiares</h2></center>
     <br >
     <br >
        <table style="width:100%">
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Etablissement</th>
                <th>Filière</th>
                <th>adresse email</th>
                 <th>adresse local</th>
                 <th>num chambre</th>
             </tr>
                @foreach($etudiant as $key => $etudiant)
                <tr>
                    <td>{{$etudiant->Nom}}</td>
                    <td>{{$etudiant->Prenom}}</td>
                    <td>{{$etudiant->Etablissement}}</td>
                    <td>{{$etudiant->Choix}}</td>
                    <td>{{$etudiant->adresse_mail}}</td>
                    <td>{{$etudiant->adresse_local}}</td>
                    <td>{{$etudiant->num_chambre}}</td>
                </tr>
                @endforeach

        </table>
    </body>
  </div>
</html>
