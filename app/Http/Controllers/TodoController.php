<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    public function getTodos() {
        $todos = Todo::all();
        return $todos;
    }

    public function addTodo(Request $request)
    {
        $todo = new Todo;
        $todo->title = $request->title;
        $todo->save();

        return Todo::all();
    }

    public function delTodo(Request $request)
    {
        $todo = Todo::where('id', $request->id)->delete();

        return Todo::all();
    }
}
