<?php

namespace App\Http\Controllers;

use App\Professor;
use Illuminate\Http\Request;

class ProfessorController extends Controller
{
    protected $professor;

    public function __construct(Professor $professor)
    {
        $this->professor = $professor;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $professores = $this->professor->all();

        return $professores;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $professor = $this->professor->fill($request->all());
        $professor->save();
        return $professor;
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $professor = $this->professor->find($id);
         return $professor;
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
        $professor = $this->professor->find($id);
        $professor->fill($request->all());
        $professor->save();

        return $professor;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $professor = $this->professor->find($id);
        $professor->delete();
        return ['messagem'=>'deletado'];
    }

    public function buscar(Request $request)
    {
        $query = $this->professor->select('*');

        if ($request->has('busca')) {
            $busca = $request->get('busca');
            $query->where(\DB::raw('UPPER(nome)'),'like','%'.strtoupper($busca).'%');
        }

        return $query->orderBy('nome')->get();
    }
}
