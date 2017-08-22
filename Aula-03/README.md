# Plataforma de Mobilidade Corporativa - (Aula 03)

## Introdução ao Bootstrap

Bootstrap é o mais popular framework `HTML`, `CSS`, e `JS` para desenvolvimento de projetos responsivo e focado para dispositivos móveis na web.
Documentação oficial
http://getbootstrap.com/

## Bootstrap
Aproposta do Bootstrap é "Crie projetos responsivos e móveis de primeira linha na web com a biblioteca de componentes de front-end mais popular do mundo".

O Bootstrap é um conjunto de ferramentas de código aberto para desenvolvimento com `HTML`, `CSS` e `JS`. Protótipo rapidamente de suas idéias ou crie seu aplicativo completo com nossas variáveis `Sass` e `mixins`, sistema de grade responsivo, extensos componentes pré-construídos e plugins poderosos criados no `jQuery`.

## Inicío rápido

Para iniciar você pode fazer o [Download](https://github.com/twbs/bootstrap/releases/download/v4.0.0-beta/bootstrap-4.0.0-beta-dist.zip) dos arquivos `CSS` e `JS` do Bootstrap além dos das bibliotecas [`JQuery`](https://code.jquery.com/jquery-3.2.1.slim.min.js) ([clique para saber mais sobre JQuery](https://jquery.com/)) e [`popper.js`](https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js) ([clique para saber mais sobre Popper.js](https://popper.js.org/index.html)) ou incluir os aquivos diretamente do repositório Bootstrap CDN.

### Exemplo de incusão direto pelo  Bootstrap CDN :
Copie e cole o `<link>` em seu `<head>` antes de todas as outras folhas de estilo para carregar no `CSS`.

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
```

Adicione os `JavaScript` opcionais, `jQuery` e `Popper.js`) perto do final de suas páginas, logo antes da tag `</ body>` de fechamento. Certifique-se de colocar `jQuery` e `Popper.js` primeiro, pois os nossos plugins `JavaScript` dependem deles.

```html
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
```

### Exemplo de um tamplate inicial:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
  </body>
</html>
```

