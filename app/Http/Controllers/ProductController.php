<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    //
    public function contact()
    {
        return Inertia::render('Product'); // Make sure this matches your component's name
    }
}
