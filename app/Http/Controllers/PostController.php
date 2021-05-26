<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Post as PostResouce ;
use App\Models\Post;


class PostController extends Controller
{
    /**
     * Display a listing of the resource .
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PostResouce::collection(Post::all());
        //echo 'Hello oussama';
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);
        $post = new Post([
            'title' => $request->title,
            'description' => $request->description,
        ]);
        $post->save();
        return response()->json([
            'data' => 'Post created'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return new PostResouce(Post::findOrFail($id)); 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);
        $post = Post::findOrFail($id);
        $post->title = $request->title;
        $post->description = $request->description;
        $post->save();
        return response()->json([
            'data' => 'Post updated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();
        return response()->json([
            'data' => 'Post deleted'
        ]);
    }
}
