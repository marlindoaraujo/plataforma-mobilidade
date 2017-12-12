<?php

namespace App\Http\Controllers;

use App\Aluno;
use Illuminate\Http\Request;

class AlunoController extends Controller
{
    protected $aluno;

    public function __construct(Aluno $aluno)
    {
        $this->aluno = $aluno;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $alunos = $this->aluno->all();

        return $alunos;
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
         $aluno = $this->aluno->find($id);
         return $aluno;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $aluno = $this->aluno->fill($request->all());
        $aluno->save();
        return $aluno;
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
        $aluno = $this->aluno->find($id);
        $aluno->fill($request->all());
        $aluno->save();

        return $aluno;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $aluno = $this->aluno->find($id);
        $aluno->delete();
        return ['messagem'=>'deletado'];
    }

    public function buscar(Request $request)
    {
        $query = $this->aluno->select('*');

        if ($request->has('busca')) {
            $busca = $request->get('busca');
            $query->where(\DB::raw('UPPER(nome)'),'like','%'.strtoupper($busca).'%');
        }

        return $query->orderBy('nome')->get();
    }
}
