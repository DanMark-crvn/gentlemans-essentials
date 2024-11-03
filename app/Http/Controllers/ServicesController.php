<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ServicesController extends Controller
{
    //
    public function services()
    {
        return Inertia::render('Services'); // Make sure this matches your component's name
    }
}
