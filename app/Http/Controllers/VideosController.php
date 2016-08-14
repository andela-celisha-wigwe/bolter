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

    public function search(Request $request, $title)
    {
    	$condition = env('DB_CONNECTION') == 'pgsql' ? 'ILIKE' : 'LIKE';
    	return V::where('title', $condition, "%$title%")->get();
    }
}
