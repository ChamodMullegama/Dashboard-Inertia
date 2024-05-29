<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;

class ParentController extends Controller
{
    public function __construct()
    {

        $this->middleware(['auth:sanctum', 'verified']);

    }
}
