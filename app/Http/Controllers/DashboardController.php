<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends ParentController
{

    public function index()
    {
        return Inertia('Dashboard/index');
    }
}
