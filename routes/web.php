<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Add your route
Route::get('/product', function () {
    return Inertia::render('Product/Product');
})->name('product');

Route::get('/about', function () {
    return Inertia::render('About/About');
})->name('about');

Route::get('/reseller', function () {
    return Inertia::render('Reseller/Reseller');
})->name('reseller');

Route::get('/contact', function () {
    return Inertia::render('Contact/Contact');
})->name('contact');


require __DIR__.'/auth.php';
