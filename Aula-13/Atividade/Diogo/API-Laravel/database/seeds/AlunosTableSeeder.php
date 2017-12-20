<?php

use Illuminate\Database\Seeder;

use App\Aluno;

class AlunosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Aluno::create(['nome'=>'Anderson']);
        Aluno::create(['nome'=>'Weslley']);
        Aluno::create(['nome'=>'Milton']);
        Aluno::create(['nome'=>'Renan']);
        Aluno::create(['nome'=>'João']);
    }
}
