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
});
Route::get('/add-item', function () {
    return view('welcome');
});
Route::get('/display-item', function () {
    return view('welcome');
});
Route::get('/edit/{id}', function () {
    return view('welcome');
});

Route::post('addStudent', 'StudentController@addStudent');
Route::get('students', 'StudentController@students');
Route::post('getStudent/{id}', 'StudentController@getStudent');
Route::post('update/{id}', 'StudentController@updateStudent');
Route::get('delete/{id}', 'StudentController@deleteStudent');