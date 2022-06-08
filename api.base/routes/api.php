<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', [App\Http\Controllers\AuthController::class, 'login']);
Route::post('register', [App\Http\Controllers\AuthController::class, 'register']);
Route::post('forgot', [App\Http\Controllers\AuthController::class, 'forgot']);
Route::post('reset', [App\Http\Controllers\AuthController::class, 'reset']);

Route::group(['middleware' => ['auth:api']], function(){

    Route::post('logout', [App\Http\Controllers\AuthController::class, 'logout']);

    Route::group(['prefix' => 'authuser'], function(){
        Route::get('/', [App\Http\Controllers\UserController::class, 'authuser']);
        Route::get('roles', [App\Http\Controllers\UserController::class, 'roles']);
        Route::get('permissions', [App\Http\Controllers\UserController::class, 'permissions']);
    });

    Route::group(['middleware' => ['role:admin']], function(){
        // Route::get('admin', [App\Http\Controllers\UserController::class, 'admin']);
    });

});
