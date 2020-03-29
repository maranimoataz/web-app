<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
}
);

Route::get('etudiant','Api\EtudiantController@index');

Route::get('etudiant_demandeur','Api\Etudiant_demandeurController@index');

Route::get('/getPDF','Api\Etudiant_demandeurController@getPDF');

Route::get('/getetudiantPDF','Api\EtudiantController@getetudiantPDF');

Route::get('admin','Api\AdminController@index');
