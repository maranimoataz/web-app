<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('index','Api\EtudiantController');

Route::post('etudiant/store','Api\EtudiantController@store');

Route::delete('etudiant/delete/{id}','Api\EtudiantController@destroy');

Route::get('etudiant/edit/{id}','Api\EtudiantController@edit');

Route::put('etudiant/update/{id}','Api\EtudiantController@update');

Route::post('etudiant_demandeur/store','Api\Etudiant_demandeurController@store');

Route::get('/etudiant_demandeur/getPDF','Api\Etudiant_demandeurController@getPDF');

Route::get('/etudiant/getetudiantPDF','Api\EtudiantController@getetudiantPDF');

Route::post('/register','Api\AuthController@register');

Route::post('/signin','Api\AuthController@signin');