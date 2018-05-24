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
//upload image
Route::post('uploadImage',[
    'uses' => 'UserController@saveImage'
]);

//get all images
Route::get('/images',[
    'uses' => 'UserController@getAllImages',
    
]);

//get  image by id
Route::get('/image/{id}',[
    'uses' => 'UserController@getImage',
    
]);