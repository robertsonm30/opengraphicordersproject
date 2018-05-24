<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

use File;
use Illuminate\Support\Facades\Storage;


class UserController extends Controller
{
    //upload image
    public function saveImage(Request $request)
    {
        $user = new User();
        $message = "";
        if($request->hasFile('file')){
            $fileNameWithExt = $request->file('file')->getClientOriginalName();
            
            $file = $request->file($request->input('file'));
            // get just file name
            $filename = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
            // GET EXTENSION
            $extension = $request->file('file')->getClientOriginalExtension();
            // file name to store
            $fileNameToStore = $filename.time().'.'.$extension;
            // upload file
            $path = $request->file('file')->storeAs('public',$fileNameToStore);

            $user->image = Storage::url($fileNameToStore);
            $user->save();
        
            $url = Storage::url($fileNameToStore);
            $message = $message.'<br> '.$fileNameWithExt." Saved"; 
        }else{
            $fileNameToStore = 'noImage.jpg';
            $path = "nothing";
            if ($message == "") {
                
                $message = " nothing to show";
            }
        }
        return response()->json(['message' => $message, "path" => "http://localhost:8000".$url ], 200);
    }

    //get all images
    public function getAllImages()
    {
        $images = User::all();
        return response()->json(['images' => $images ], 200);
    }

    // get an image by id
    public function getImage()
    {

    }


}
