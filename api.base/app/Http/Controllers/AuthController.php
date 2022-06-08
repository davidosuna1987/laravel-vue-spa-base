<?php

namespace App\Http\Controllers;

use DB;
use Str;
use Mail;
use Hash;
use Message;
use Validator;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Http\Requests\ForgotPasswordRequest;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try{
            if( auth()->attempt($request->only('email', 'password')) ) {
                $user = auth()->user();
                $token = $user->createToken('app')->accessToken;
                $roles = $user->roles->pluck('name');
                $permissions = $user->permissions->pluck('name');

                return response()->json([
                    'user' => $user,
                    'token' => $token,
                    'roles' => $roles,
                    'permissions' => $permissions,
                ], 200);
            }
        }catch(\Exception $e){
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }

        return response()->json([
            'success' => false,
            'message' => 'Credenciales inválidas',
        ], 401);
    }

    public function register(RegisterRequest $request)
    {
        try{
            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            return $user;
        }catch(\Exception $e){
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    public function forgot(ForgotPasswordRequest $request)
    {
        $email = $request->email;

        if(User::whereEmail($email)->doesntExist()) {
            return response()->json([
                'success' => false,
                'message' => 'No existe ningún usuario con ese correo electrónico.',
            ], 404);
        }

        $token = Str::random(10);

        try{
            DB::table('password_resets')->insert([
                'email' => $email,
                'token' => $token,
            ]);

            Mail::send('mails.forgot', ['token' => $token], function($message) use ($email){
                $message->to($email);
                $message->subject('Restablecer contraseña');
            });

            return response()->json([
                'success' => true,
                'message' => 'Revisa tu correo electónico.',
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    public function reset(ResetPasswordRequest $request)
    {
        $token = $request->token;

        if(!$password_resets = DB::table('password_resets')->where('token', $token)->first()){
            return response()->json([
                'success' => false,
                'message' => 'Token inválido.',
            ], 400);
        }

        if(!$user = User::whereEmail($password_resets->email)->first()){
            return response()->json([
                'success' => false,
                'message' => 'El usuario no existe.',
            ], 404);
        }

        $user->update([
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'La contraseña se ha restablecido correctamente.',
        ], 200);
    }

    public function logout(Request $request)
    {
        auth()->user()->token()->revoke();

        return response()->json([
            'success' => true,
            'message' => 'Te has deslogueado correctamente.',
        ], 200);
    }
}
