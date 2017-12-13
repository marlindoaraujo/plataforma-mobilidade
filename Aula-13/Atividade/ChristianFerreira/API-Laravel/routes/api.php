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

Route::get('aluno','AlunoController@index');
Route::get('aluno/{id}/edit','AlunoController@edit');
Route::post('aluno','AlunoController@store');
Route::put('aluno/{id}','AlunoController@update');
Route::delete('aluno/{id}','AlunoController@destroy');
Route::get('buscar_aluno', 'AlunoController@buscar');

Route::get('professor','ProfessorController@index');
Route::get('professor/{id}/edit','ProfessorController@edit');
Route::post('professor','ProfessorController@store');
Route::put('professor/{id}','ProfessorController@update');
Route::delete('professor/{id}','ProfessorController@destroy');
Route::get('buscar_professor', 'ProfessorController@buscar');