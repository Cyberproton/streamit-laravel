<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [WelcomeController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
