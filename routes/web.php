<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

Route::post('/logout', function () {
    Auth::logout();
    return redirect('/login');
})->name('logout');


require __DIR__.'/auth.php';
