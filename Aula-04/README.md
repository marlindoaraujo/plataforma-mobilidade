# Plataforma de Mobilidade Corporativa - (Aula 04)

## Componentes do Bootstrap

O Bootstrap tem dezenas de componentes reutilizáveis criados para fornecer elementos dropdown, grupos de inputs , navegação com tabs, alertas e muito mais.
para acesso todos os componentes do bootstrap acesse: https://getbootstrap.com/docs/4.0/components/alerts/

### Alerts (Alertas)

Os componentes de Alerts, oferecem um alerta personalizado, para mensagens de feedback de ações de usuários.

#### Exemplo:
```html
<div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  This is a secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  This is a warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  This is a info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  This is a light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  This is a dark alert—check it out!
</div>
```
Utilizando as classes `.alert` para definir um elemento como alerta, somado ao tipo de alerta por exemplo: `class="alert alert-primary"`, cria uma caixa de alerta de cor azul.

#### Alerta com botão de fechar

Se você incluir os js da `JQuery` e os js do `Boostrap`, você pode usar um alerta com botão de fechamento automático.

#### Exemplo:
```html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
</div>
```
Para mais formas de alerta acesse : https://getbootstrap.com/docs/4.0/components/alerts/

### Buttons (Botões) e Button group (Grupo de botões)

O boostrap lhe oferece uma variedade de botões personalizados de tamanhos e cores diferentes para seu site.

#### Exemplo de botões

```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
```
Utilizando a classe `.btn` em elemento você o define como um botão, e somando a uma classe que define o tipo de botão por exemplo: `class="btn btn-primery"` você cria um botão personalizado na cor azul.
Para saber mais sobre os botões no bootstrap acesse: https://getbootstrap.com/docs/4.0/components/buttons/
Além de tilizar botões de forma separada você também pode utilizar grupos de botões:

#### Exemplo de grup de botões

```html
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
```
Basta adicionar a classe de `.btn-group` au um elemento em bloco e adicionar os botões dentro de sua abertura e fechamento, assim você tera os botões agrupados como no exemplo acima.
Para saber mais sobre o grupos de botões acesse: https://getbootstrap.com/docs/4.0/components/button-group/


