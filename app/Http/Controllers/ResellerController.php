<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ResellerController extends Controller
{
    //
    public function reseller()
    {
        return Inertia::render('Reseller'); // Make sure this matches your component's name
    }
}
