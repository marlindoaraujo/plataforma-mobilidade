# Plataforma de Mobilidade Corporativa - (Aula 08 -09)

## Introdução ao Angular

[Clique para baixar o Slide da Aula](https://github.com/meta-sistemas-2017/plataforma-mobilidade/blob/master/Aula-08-09/PLATAFORMA%20DE%20MOBILIDADE%20CORPORATIVA%20-%20Aula%2008%20-%202017.2.pdf)

Angular é uma plataforma de desenvolvimento para construção de aplicativos móveis e desktop. 
Angular permite expandir a sintaxe do HTML para expressar os componentes da sua aplicação de forma clara e sucinta. 
A ligação angular e a Injeção de Dependência eliminam grande parte do código que você teria de escrever.

### Angular CLI

As boas ferramentas tornam o desenvolvimento de aplicativos mais rápido e fácil de manter do que se você fizesse tudo à mão.
A "**Angular CLI**" é uma ferramenta de interface de linha de comando que pode criar um projeto, adicionar arquivos e executar uma variedade de tarefas de desenvolvimento contínuo, como teste, agrupamento e implantação.
Para saber mais: https://cli.angular.io/

#### Instalando Angular CLI

Com o npm instalado execute o comando no terminal:
```shellscript
sudo npm install -g @angular/cli
```

#### Criando um novo projeto com Angular CLI

Ao instalar o CLI do angular o comando ng ficará disponível no seu terminal.
para criar um novo projeto a partir do CLI, navegue até a pasta onde você irá criar seu projeto e execute os comandos:

```shell
ng new my-app
```

Isso irá criar um novo esqueleto de projeto.
Para saber mais: https://github.com/angular/angular-cli#usage

### Servidor

O Angular CLI, fornece um servidor para uso em desenvolvimento.
Para iniciar o servidor vá a pasta do projeto criado e execute o comando:

```shell
cd my-app
ng serve --open
```

O comando `ng serve` inicia um servidor e observa seus arquivos e reconstrói o aplicativo à medida que você faz alterações nesses arquivos.
Usando a opção `--open` (ou apenas `-o`) abrirá automaticamente seu navegador em http://localhost:4200/

### Estrutura de arquivos

Seu aplicativo vive na pasta `src`. Todos os componentes angulares, modelos, estilos, imagens e qualquer outra coisa que o seu aplicativo necessite aqui. 
Todos os arquivos fora desta pasta devem apoiar a criação de seu aplicativo.
Para saber mais: https://angular.io/guide/quickstart#the-src-folder

### Criando um novo componente

Os componentes são o bloco de construção mais básico de uma *IU* em uma aplicação Angular. Uma aplicação angular é uma árvore de componentes angulares. 
Os componentes angulares são um subconjunto de diretrizes. Ao contrário das diretivas, os componentes sempre possuem um modelo e apenas um componente pode ser instanciado por um elemento em um modelo. 
Um componente deve pertencer a um `NgModule` para que ele possa ser usado por outro componente ou aplicativo.

Para saber mais: 
* https://angular.io/api/core/Component
* https://www.webcomponents.org/introduction

#### Criando um componente

Crie um pasta chamada novo-componente em `src/app`, e crie um novo arquivo chamado `novo-componente.component.ts`.

```javascript
import { Component } from '@angular/core';
@Component({
    selector: 'novo-componente',
    template: `
        <div>
            <h1>Olá sou o novo componente!!</h1>
        </div>
    `
})
export class NovoComponent {
}
```
#### Usando o componente
No arquivo `app.component.html`  em `src/app`, adicione sua o novo componente:
```html
  <novo-componente></novo-componente>
```

Para finalizar adicione as linhas abaixo no arquivo `app.module.ts` em `src/app`:
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NovoComponent } from './novo-componente.component'; // Importa A classe do Componente

@NgModule({
  declarations: [
    AppComponent,
    NovoComponent //Adiciona nas declarações do módulo.
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### Criando um componente via CLI

Para criar um novo componente utilizando o Angular CLI basta usar o comando.
```
ng g component nome-do-componente
```
esse comando irá criar os arquivos
* src/app/nome-do-componente/nome-do-componente.component.css
* src/app/nome-do-componente/nome-do-componente.component.html
* src/app/nome-do-componente/nome-do-componente.component.spec.ts
* src/app/nome-do-componente/nome-do-componente.component.ts

E atualizar o arquivo `src/app/app.module.ts` adicionando em suas *declarations* o novo componente 

### Templates

Angular possui um sistema de modelo muito expressivo, que leva o HTML como base e o estende com elementos personalizados:
Double chaves `{{ }}` permite que você inclua propriedades do componente;

```javascript
import { Component } from '@angular/core';
@Component({
    selector: 'novo-componente',
    template: `
        <div>
            <h1>Olá sou {{ nome }} !</h1>//Uso do Double chaves para mostrar o conteúdo da propriedade nome
        </div>
    `
})
export class NovoComponent {
    nome = 'Vitor Hugo';
}
```
Para saber mais: https://angular.io/guide/template-syntax

####  Property Binding ou Propriedades reativas
As propriedades reativas, tornam as propriedades do HTML e componentes totalmente interativas. Qualquer propriedade ou atributo pode interagir diretamente com a programação do componente e do Angular. 

De forma bem simples, o Angular define valores dinâmicos de estilos, conteúdo e outras propriedades do DOM. Tudo isso em tempo real e de acordo com qualquer ação do usuário na aplicação (manipulações do mouse, teclado, etc).

Exemplo:

```javascript
import { Component } from '@angular/core';
@Component({
    selector: 'novo-componente',
    template: `
        <div>
            <h1>Olá sou {{ nomeCompleto() }} !</h1>  
            <img [src]="avatar" />  <!--  usando Property Binding para a propriedade src  -->
        </div>
    `
})
export class NovoComponent {
    nome: string= 'Vitor Hugo';
    sobreNome: string = 'Silva';
    avatar = 'assets/image/avatar.png';
    nomeCompleto() :string {
        return this.nome + ' ' + this.sobreNome;
    }
}
```
##### Outras propriedades:

```html
<!-- This is valid HTML syntax. -->
<input [value]="person.emailAddress">
<!-- It works on attribute syntax. -->
<button [attr.aria-label]="help">help</button>
<!-- It allows to conditionally bind a class  -->
<div [class.special]="isSpecial">Special</div>
<!-- Or style properties -->
<button [style.color]="isSpecial ? 'red' : 'green'">
<!-- And work with custom components! -->
<birthday-card [date]="person.birthday"> 
```
Para saber mais acesse: https://angular.io/guide/attribute-directives

#### Até a próxima aula! :sweat_smile:

# Referências - para saber mais...
 - https://angular.io/

[Voltar](https://github.com/meta-sistemas-2017/plataforma-mobilidade)