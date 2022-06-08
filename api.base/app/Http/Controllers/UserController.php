<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function authuser()
    {
        return auth()->user();
    }

    public function roles()
    {
        return auth()->user()->roles->pluck('name');
    }

    public function permissions()
    {
        return auth()->user()->permissions->pluck('name');
    }
}
