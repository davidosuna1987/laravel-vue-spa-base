<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Laratrust\Traits\LaratrustUserTrait;

class User extends Authenticatable
{
    use LaratrustUserTrait, HasApiTokens, HasFactory, Notifiable;

    protected $fillable = ['first_name', 'last_name', 'email', 'password'];

    protected $hidden = ['password', 'roles', 'permissions'];
}
