# Plataforma de Mobilidade Corporativa - (Aula 07)

## Introdução ao TypeScript
[Clique para baixar o Slide da Aula 01]()

O JavaScript é uma ótima linguagem, mas há espaço para melhorias:  JS não é um tipo seguro que dificulta o desenvolvimento de aplicações em grande escala. Saiba mais em: https://www.typescriptlang.org/index.html
 - Novos recursos das versões mais recentes dos padrões JS (ES6, ES7) não são bem suportados em todos os navegadores

Os códigos TypeScript criados. É transpilado para JavaScript, portanto pode ser usado em qualquer navegador.
- TypeScript estende a versão mais recente do JavaScript (ES6)
- TypeScript adiciona algumas características da próxima versão (ES7) 
- Além disso, o TypeScript adiciona um sistema e marcação de tipo opcional

### Instalação
Para utilizar o node você precisa ter o node.js instalado e o npm e utilizar o comando:
```
sudo npm install -g typescript
```
### Construindo seu primeiro arquivo TypeScript
Em seu editor crie um arquivo chamado `greeter.ts` e insira o conteúdo:
```typescript
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
console.log(greeter(user));
```
### Compilando seu código
Na linha de comando, execute o compilador TypeScript:
```
tsc main.ts
```
Isso irá criar um arquivo chamado `main.js`

Para testar use o comando no terminal:
```shell
 nodejs main.js
```
#### Alguns Typos básicos
|Tipo|Exemplo                             |
|-----|------|
|`boolean`| let isDone: boolean = false;|
| `number`| let decimal: number = 6;  let hex: number = 0xf00d; let binary: number = 0b1010; let octal: number = 0o744;|
|`string` | let color: string = "blue";|
|`Array`| let list: number[] = [1, 2, 3];|
Para saber mais:
https://www.typescriptlang.org/docs/handbook/basic-types.html
### Declarações de Variáveis
`let` e `const` são dois tipos relativamente novos de declarações variáveis em `JavaScript`. `let`, é similar a `var` em alguns aspectos, o `const` impede a re-atribuição a uma variável. 
Para saber mais:
https://www.typescriptlang.org/docs/handbook/variable-declarations.html

### Interfaces (contratos)
```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Jane", lastName: "User" };

console.log(greeter(user));
```
Para saber mais:
https://www.typescriptlang.org/docs/handbook/interfaces.html
### Classes
```typescript
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

console.log(greeter(user));
```
Para saber mais: https://www.typescriptlang.org/docs/handbook/classes.html
#### Até a próxima aula! :sweat_smile:

# Referências - para saber mais...
 - https://www.typescriptlang.org/index.html

[Voltar](https://github.com/meta-sistemas-2017/plataforma-mobilidade)