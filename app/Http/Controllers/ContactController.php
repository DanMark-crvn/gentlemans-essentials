<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    //
    public function contact()
    {
        return Inertia::render('Contact'); // Make sure this matches your component's name
    }
}
