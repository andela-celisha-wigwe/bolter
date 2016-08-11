<?php

namespace App\Http\Controllers;

use Auth;
use App\Video as V;
use Illuminate\Http\Request;

class VideosController extends Controller
{

	public function __construct()
	{
		header('Access-Control-Allow-Origin: *');
	}
    public function index(Request $request)
    {
        $videos = V::all();

        return $videos;
    }
}
